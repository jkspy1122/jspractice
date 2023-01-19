//API接口存放區
var exchangeInfo = "https://fapi.binance.com/fapi/v1/exchangeInfo"; //API接口：交易所資訊與目前上架之交易兌列表

/////// functions for reuse ///////
//download json and parsed out javascript data and returned
async function getJson(api) {
    let exInfo = await fetch(api);
    exInfo = await exInfo.json();
    console.log(exInfo);
};

getJson(exchangeInfo);