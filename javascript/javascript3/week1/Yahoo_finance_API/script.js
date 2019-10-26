const API_key = 'oF7EdY5q1NJub4muivlvtbPL6s8OTSWVVv8HBa2H5jP9RFJazEdpt1MZlWJl';

const init = 'https://api.worldtradingdata.com/api/v1/stock?symbol='

const additives = '&api_token=';

async function fetchJSON(url) {
    const response = await fetch(url).then( (value) => {return value.json()});
    return response;
}

const mybutton = document.getElementById('search')
mybutton.addEventListener('click' , shoeShareInfo)


async function shoeShareInfo() {
    const shareSymbol = document.getElementById('symbol').value;
    const ss = init + shareSymbol + additives + API_key;
    
    console.log(ss);

    const response = await fetchJSON(ss);
    console.log(response);
    const shareInfo = response.data[0];
    console.log(shareInfo);

    let newShare = document.createElement('div')

    const receivedKeys = Object.keys(shareInfo)

    for(let i = 0 ; i< 4 ;i++) {
    // receivedKeys.forEach(receivedKeys => {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = `${receivedKeys[i]} : ${shareInfo[receivedKeys[i]]}`;
        newShare.appendChild(newParagraph);
    };
    newShare.style = 'border: 2px black solid; margin-top : 10px; width : 200px'
    
    document.body.appendChild(newShare);
}

