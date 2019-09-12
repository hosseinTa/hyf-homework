function what2Wear(temperature) {
    let decision;
    const clothesSet = ['every under wear that you have plus a bear skin over coat' ,
                    'one set of underwear, wool polywear with jacket' ,
                    'trawser, polo, jacket and hat' ,
                    'trawser, sweater and a T-shirt' ,
                    'short and T-shirt' ,
                    'just short' ,
                    'NOTHING' ];
    if(typeof(temperature) === 'number') {
        if (temperature < -5 ) {
            decision = 0 ;
        } else if (temperature <= 0 ) {
            decision = 1 ;
        } else if (temperature < 10 ) {
            decision = 2 ;
        } else if (temperature < 15 ) {
            decision = 3 ;
        } else if (temperature < 28 ) {
            decision = 4 ;
        } else if (temperature < 38 ) {
            decision = 5 ;
        } else {
            decision = 6 ;
        }
        return `You should wear ${clothesSet[decision]}`
    }else {
        return `Enter a number!`
    }
    
}

console.log(what2Wear(17))