class apiCollection {
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

const apiExchangeInfo = new apiCollection("https://fapi.binance.com/fapi/v1/exchangeInfo");
const apiKline = new apiCollection("https://fapi.binance.com/fapi/v1/exchangeInfo");
const apiInterestRate = new apiCollection("https://fapi.binan");

apiExchangeInfo.getJson();


// apiKline.getJson();


// apiInterestRate.getJson();