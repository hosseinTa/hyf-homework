import React from 'react';
import ReactDOM from 'react-dom';

import DatePicker from 'react-date-picker'

class CreateNewTask extends React.Component {
    state = { ...this.props, newTaskDate: new Date(), NewTaskName: 'Add new task' }


    cleanDefaultValue = () => {
        this.setState({ NewTaskName: '' })
    }

    onChangeNewTaskDescription = (evnt) => {
        this.setState({ NewTaskName: evnt.target.value })
    }

    onChange = date => this.setState({ newTaskDate: date })

    addbuttonClick = () => {
        this.setState({
            taskList: this.state.taskList.push({
                id: 1,
                description: this.state.NewTaskName,
                deadline: this.state.newTaskDate,
                donestatus: false,
                display: true,
                editmode: false,
            })
        })
        console.log(this.state)
    }

    render() {
        console.log(this.props);
        console.log(this.state);
        return (
            <div className='NewTascContainer' key='newTaskMaker'>
                <input id='newTaskBox' type="text" placeholder={this.state.NewTaskName} onClick={this.cleanDefaultValue} onChange={this.onChangeNewTaskDescription} />
                <DatePicker
                    onChange={this.onChange}
                    value={this.state.newTaskDate}
                />
                <button onClick={this.addbuttonClick}>ADD</button>
            </div>
        )
    }
}

export default CreateNewTask;
