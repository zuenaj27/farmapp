
import React from 'react';
import {connect} from 'react-redux';
import Modal from 'react-modal';
import {bindActionCreators} from 'redux';
import Search from '../component/Search';
import {
    withRouter
} from 'react-router-dom';

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


class ListForms extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            farmers: [],
            showing: false,
            data: {},
            searchValue: '',
            searching: false,
            searchedValues: []
        }
    }

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

    _searchField = (e) => {
        this.setState({searchValue: e.target.value});
        if(!e.target.value) {
            this.setState({searching: false});
        }else{
           let values = this.state.farmers.filter((o)=> {
                return ( (o.name.toLowerCase().indexOf(e.target.value) != -1)
                || (o.phoneNumber.indexOf(e.target.value) != -1));
            });

           this.setState({searchedValues: values, searching: true});
        }
    };

    render () {
        return(
            <div className="center">
                <Search searchField={this._searchField} val={this.state.searchValue} />
                <p>List of Farmers</p>
                <ul className="list-group">

                    { (!this.state.searching)  ? this.state.farmers.map( (obj, index) =>
                        <li key={index}
                            onClick={()=> {
                                this._showName(index)
                            }}
                            className="list-group-item">{obj.name}
                            <span className="badge">{(++index)}</span>
                        </li>
                    ) : this.state.searchedValues.map( (obj, index) =>
                            <li key={index}
                                onClick={()=> {
                                    this._showName(index)
                                }}
                                className="list-group-item">{obj.name}
                                <span className="badge">{(++index)}</span>
                            </li>
                        )

                    }

                </ul>
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

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    }
}

export default withRouter(connect(mapStateToProps, null)(ListForms))