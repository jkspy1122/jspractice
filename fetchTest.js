var exchangeInfo = "https://fapi.binance.com/fapi/v1/exchangeInfo";
let exInfo = fetch(exchangeInfo);

exInfo
.then(function (tickData) {
     return tickData.json();
     })
.then(function (tickJsonData) {
     console.log(tickJsonData);
     });