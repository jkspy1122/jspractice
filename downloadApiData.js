class ExchangeInfo {
    constructor(api) {
        this.api = api;
    }

    async getJson() {
        let exInfo = await fetch(this.api);
        exInfo = await exInfo.json();
        console.log(exInfo);
        return exInfo;
    }
}

const exchangeInfo = new ExchangeInfo("https://fapi.binance.com/fapi/v1/exchangeInfo");
const exchangeInfo1 = new ExchangeInfo("https://fapi.binance.com/fapi/v1/exchangeInfo");
const exchangeInfo2 = new ExchangeInfo("https://fapi.binan");

exchangeInfo.getJson();


exchangeInfo1.getJson();


exchangeInfo2.getJson();