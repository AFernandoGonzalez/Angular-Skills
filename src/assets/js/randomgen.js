const getRandomNumbers = () => {
    let rNum = [];
    for(let i =0; i <10; i++){
        let rnd = Math.floor((Math.random() * 9999) + 1);
        rNum.push(rnd);
    }
    return rNum;
}

const getPageNumbers = () => {
    let rNum = [];
    for (let i = 0; i < 100; i++) {
        
        rNum.push(i);
    }
    return rNum;
}