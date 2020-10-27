import React from 'react';

import './searchbox.css';

export const Searchbox= (props) => (
        <input className='search'
            type="search"
            placeholder={props.placeholerNAme}
            autoFocus
            onKeyPress={
                e=>{
                   if(e.key==='Enter') props.handleSearch(e.target.value)
                }
            }
        
        ></input>
)