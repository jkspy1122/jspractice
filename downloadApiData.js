class apiCollection {
    constructor(api) {
        this.api = api;
    }

    async getJson() {
        let exInfo = await fetch(this.api);
        exInfo = await exInfo.json();
        // console.log(exInfo);
        // return exInfo;
        let finalData = exInfo.map(d => {
            return {time:d[0]/1000,open:parseFloat(d[1]),high:parseFloat(d[2]),low:parseFloat(d[3]),close:parseFloat(d[4])}
          });
        console.log(finalData);
    }
}

const apiExchangeInfo = new apiCollection("https://fapi.binance.com/fapi/v1/exchangeInfo");
const apiKline = new apiCollection("https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=1000");
const apiInterestRate = new apiCollection("https://fapi.binan");

// apiExchangeInfo.getJson();


apiKline.getJson();


// apiInterestRate.getJson();