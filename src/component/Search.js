

import React from 'react';
const Search = ({searchField, val})=> {
        return (
            <div className="row">
                <div className="center">
                <div className="form-group form-inline">
                    <input onChange={searchField} placeholder="Search farmers by name or number" value={val}
                           className="form-control Search-box"/>
                </div>
                </div>
            </div>
        )
}



export default Search;
