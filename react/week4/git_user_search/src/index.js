import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ListOfUsers from './ListOfUsers.js'




class Page extends React.Component {
    constructor(props) {
        super(props);
        // var timeoutHandle = false;
    }

    triggerTimer = () => {
        if (this.timeoutHandle) window.clearTimeout(this.timeoutHandle);
        this.timeoutHandle = window.setTimeout(this.getData, 1000);
    }

    createList = (dataFromAPI) => {
        console.log('wdfsad')
        return (true)
        // const listOfUsers = dataFromAPI.items.map(user => user.login)
        // console.log(listOfUsers);
    }

    printData = e => {
        console.log(e)
        return (true)
    }

    createListrrr = (dataFromAPI) => {
        console.log('wdfsad')
        // return (true)
        // const listOfUsers = dataFromAPI.items.map(user => user.login)
        // console.log(listOfUsers);
    }

    getData = () => {
        fetch('https://api.github.com/search/users?q=hosseinTa').then(
            function (response) {
                if (response.status > 299 || response.status < 100) {
                    console.log('Please check your internet connection');
                    return;
                }
                response.json().then(res => printData('tdffffffffffffffft'));
            }
        )
    }

    

    render = () => {
        return (
            <div>
                <h1>Hello World</h1>
                <input type="text" onChange={this.triggerTimer}></input>
                {/* <ListOfUsers listOfUsers={}></ListOfUsers> */}
            </div>
        )
    }
}

function printData(e) {
    console.log(e)
    console.log(Page)
    return (true)
}

ReactDOM.render(
    <Page />, document.getElementById('root')
);