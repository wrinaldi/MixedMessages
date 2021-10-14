//console.log('its working');
//console.log('on the next branch');

const randMessage = {
    greeting: ['hi', 'hello'],
    intro: [' buddy', ' pal', ' guy'],
    type: [' i need a new mtb', ' ya boy is looking for a cruiser', ' need something for hh'],
    pay: [' willing to pay $5', ' willing to ball out']

};
function printMsg(){
    let str = '';
    for (let key in randMessage){
        str = str + randMessage[key][Math.floor(Math.random()*randMessage[key].length)];
        console.log(key);
    };
    console.log(str);
};

printMsg();