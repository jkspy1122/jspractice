function checkResult() {
    requestResultA()
    .then(function(resultA) {
        return requestResultB(requestResultA);
    })
    .then(function(resultB) {
        console.log(resultB)
    })
}


async function checkResult() {
    let resultA = await requestResultA;
    let resultB = await requestResultB(resultA);
    console.log(resultB);
}