import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ListOfUsers from './ListOfUsers.js'
import Header from './header.js'




class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { total_count: 0, items: [] }
    }

    triggerTimer = (textChangeEvent) => {
        const searchWord = textChangeEvent.target.value.substr(0, 100)
        if (this.timeoutHandle) window.clearTimeout(this.timeoutHandle);
        this.timeoutHandle = window.setTimeout(e => this.getData(searchWord), 2000);
    }

    getData = async (searchWord) => {
        fetch(`https://api.github.com/search/users?q=${searchWord}`).then(async response => {
            if (response.status > 299 || response.status < 100) {
                console.log('Please check your internet connection');
                return;
            }
            const extractData = await response.json()
            this.setState({ ...extractData })
        })
    }



    render = () => {
        return (
            <div>
                <Header />
                <input type="text" onChange={e => this.triggerTimer(e)}></input> {`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`}
                <ListOfUsers key={this.state.total_count} items={this.state.items}></ListOfUsers>
            </div>
        )
    }
}

ReactDOM.render(
    <Page />, document.getElementById('root')
);









// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import ListOfUsers from './ListOfUsers.js'

// class Page extends React.Component {
//     constructor(props) {
//         super(props);
//         // var timeoutHandle = false;
//     }

//     triggerTimer = (e) => {
//         if (this.timeoutHandle) window.clearTimeout(this.timeoutHandle);
//         this.timeoutHandle = window.setTimeout(e => this.getData(e), 3000);
//     }

//     createList = (dataFromAPI) => {
//         console.log('wdfsad')
//         return (true)
//     }

//     getData = async () => {
//         console.log('rrrr')
//         fetch('https://api.github.com/search/users?q=hosseinTa').then(
//             response => {
//                 if (response.status > 299 || response.status < 100) {
//                     console.log('Please check your internet connection');
//                     return;
//                 }
//                 this.createList(response.json())
//             }
//         )
//     }



//     render = () => {
//         return (
//             <div>
//                 <h1>Hello World</h1>
//                 <input type="text" onChange={e => this.triggerTimer(e)}></input> {`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`}
//                 {/* <ListOfUsers listOfUsers={}></ListOfUsers> */}
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <Page />, document.getElementById('root')
// );