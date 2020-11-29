import React from 'react';

function Header(props){
    return (
        <>
            <p>Header: {props.title}</p>
            <p>{props.children}</p>
        </>       
    )
}

export default Header;