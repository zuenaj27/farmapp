
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../actions/userActions';
import Modal from 'react-modal';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

class CreateFarmer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            phoneNumber: '',
            gender: '',
            disable: false,
            loader: false,
            farmers: [],
            showing: false,
            data: {}
        };

        this._onSubmit = this._onSubmit.bind(this);
    }

    _nameChange = (e) => {
        this.setState({name: e.target.value});
    };

    _phoneNumberChange =(e) => {
        this.setState({phoneNumber: e.target.value});
    };

    _genderChange =(e) => {
        this.setState({gender: e});
    };

    componentWillMount () {
        this.setState({farmers: this.props.user.allUsers});
    }

    _showName =(id) => {
        let object = this.state.farmers[--id];
        this.setState({data: object});
        if(object){
            this.setState({showing: true});
        }
    };

    _onClose = () => {
        this.setState({showing: false});
    };

    _onSubmit = (e) => {
        this.setState({loader: true, disable: true});
        e.preventDefault();
        const name = this.state.name;
        const phoneNumber = this.state.phoneNumber;
        const gender = this.state.gender;

        if(name && phoneNumber && gender) {
            let obj = {
                name,gender, phoneNumber
            };

            this.props.action.createUser(obj, this.props.user.allUsers).then( response => {

                this.setState({loader: false ,
                    disable: false,name: '', phoneNumber: '',
                    farmers:this.props.user.allUsers});
            });
        }else{

        }

    };

    render (){
        return (
            <div className="row">
            <div className="center">
            <form onSubmit={this._onSubmit}>
                <div className="form-group ">
                    <input type="name"
                           required
                           disabled={this.state.disable}
                           className="form-control"
                           placeholder="Enter Name"
                           onChange={this._nameChange}
                           value={this.state.name}
                    />
                </div>
                <div className="form-group">
                    <input type="number"
                           className="form-control "
                           required
                           disabled={this.state.disable}
                           placeholder="Enter Phone Number"
                           onChange={this._phoneNumberChange}
                           value={this.state.phoneNumber}
                    />
                </div>
                <div onClick={ () => this._genderChange('female')} id="female" className="form-group form-inline">
                    <div className="radio">
                        <label>
                            <input type="radio"
                                      required
                                      name="optradio"
                                   disabled={this.state.disable}
                            />Female
                        </label>
                    </div>
                    <div onClick={ () => this._genderChange('male')} id="male" className="radio mg-left ">
                        <label>
                            <input type="radio"
                                   required
                                   disabled={this.state.disable}
                                   onClick={this._genderChange}
                                   name="optradio"/>
                                    Male
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary mg-left ">Submit</button>

                </div>
                <div className="form-group">
                    { (this.state.loader)?
                        <i className="fa fa-spinner fa-spin" aria-hidden="true"></i>: null
                    }
                </div>

            </form>
            </div>
                <div className="center">
                    <p>List of Farmers</p>
                    <ul className="list-group">
                        {this.state.farmers.map( (obj, index) =>
                            <li key={index}
                                onClick={()=> {
                                    this._showName(index)
                                }}
                                className="list-group-item"
                            >
                                {obj.name}
                            <span className="badge">{(++index)}</span>
                            </li>
                        )}

                    </ul>
                </div>
                <Modal
                    isOpen={this.state.showing}
                    onRequestClose={this._onClose}
                    style={customStyles}
                    contentLabel="Modal"
                >
                    <div>{this.state.data.name}</div>
                    <div>{this.state.data.phoneNumber}</div>
                    <div>{this.state.data.gender}</div>
                </Modal>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(userActions, dispatch)
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateFarmer);