import React from 'react';

class ListOfUsers extends React.Component {
    state = { items: this.props.items }


    render = () => {
        if (this.state.items.length > 0) {
            return(
                this.state.items.map( item => <p>{item.login}</p>)
            )
        } else {
            return (
                <p>hi</p>
            )
        }

    }
}

export default ListOfUsers;