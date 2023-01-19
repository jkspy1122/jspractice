let sentToAirport = true;
let p = new Promise(function(resolve,reject) {
    if (sentToAirport) {
        resolve('Resolved checked');
    } else {
        reject('reject checked');
    }
});

console.log(p);
p.then(console.log("then go home"));