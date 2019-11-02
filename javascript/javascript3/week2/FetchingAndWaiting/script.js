basicURL = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

const deckinfo = fetch(basicURL).then(data => data.json());
deckinfo.then(data => console.log(data));

// let doc = document.body;
// const deck_id = '76547ucro898';

function drawCard(count) {
    return deckinfo.then( data => {
        const deckID = data.deck_id;
        drawURL = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=${count}`
        const cards = fetch(drawURL).then(data => data.json())
        return cards;
    })
}

function showpicture(address) {
    let renderlocation = document.createElement('div'); // createElement('div');
    renderlocation.innerHTML = `<img src ='${address}' alt = 'card'>`
    document.body.appendChild(renderlocation);
}

drawCard(1).then(cards => {
    console.log(cards);    
    const picture = cards['cards'][0].image
    console.log(picture);
    showpicture(picture);
})

drawCard(1).then(cards => {
    console.log(cards);    
    const picture = cards['cards'][0].image
    console.log(picture);
    showpicture(picture);
})

setTimeout(()=> {
    drawCard(1).then(cards => {
        console.log(cards);    
        const picture = cards['cards'][0].image
        console.log(picture);
        showpicture(picture)
    }).then(
        drawCard(1).then(cards => {
            console.log(cards);    
            const picture = cards['cards'][0].image
            console.log(picture);
            showpicture(picture)
        })
    )
} , 3*1000);

