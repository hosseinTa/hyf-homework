import React from 'react';

class ListOfUsers extends React.Component {
    state = { listOfUsers: this.props.listOfUsers }
    render = () => {
        if (this.state.listOfUsers.length() > 0) {
            return (<p>dsdælfsøælfsædæ</p>)
        }
        return (
            <></>
        )
    }
}

module.export = { ListOfUsers }