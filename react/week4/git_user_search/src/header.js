import React from 'react';

class Header extends React.Component {
    render = () => {
        return(
            <h1> Github User Search + {`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`}</h1>
        )
    }
}

export default Header;