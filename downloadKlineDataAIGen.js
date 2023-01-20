class apiCollection {
    constructor(api) {
    this.api = api;
    this.jsonData = null;
    }
    
    async getJson() {
        this.jsonData = await fetch(this.api);
        this.jsonData = await this.jsonData.json();
        console.log(this.jsonData);
        return this.jsonData;
    }
    
    async saveKlinedata() {
        if (this.jsonData === null) {
            console.log("You need to get json data first by calling getJson()");
            return;
        }
        let finalData = this.jsonData.map(d => {
            return {time:d[0]/1000,open:parseFloat(d[1]),high:parseFloat(d[2]),low:parseFloat(d[3]),close:parseFloat(d[4])}
          });
        console.log(finalData);
    }
    }
    
    const apiExchangeInfo = new apiCollection("https://fapi.binance.com/fapi/v1/exchangeInfo");
    const apiKline = new apiCollection("https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=1000");
    const apiInterestRate = new apiCollection("https://fapi.binan");
    
    // Usage example
    apiKline.getJson().then(() => {
    apiKline.saveKlinedata();
    });