class apiCollection {
    constructor(api) {
        this.api = api;
        this.jsonData = null;
    }
    
    async getJson() {
        this.jsonData = await (await fetch(this.api)).json();
        // console.log(this.jsonData);
        return this.jsonData;
    }
    
    async saveKlinedata() {
        if (this.jsonData === null) {
            console.log("You need to get json data first by calling getJson()");
            return;
        }
        // console.log(typeof(this.jsonData));
        let finalData = this.jsonData.map(d => {
            return {time:d[0]/1000,open:parseFloat(d[1]),high:parseFloat(d[2]),low:parseFloat(d[3]),close:parseFloat(d[4])}
          });
        // console.log(finalData);
    }

    //check exchange info for latest ticker and save to var
    async saveExchangeInfo() {
        if (this.jsonData === null) {
            console.log("You need to get json data first by calling getJson()");
            return;
        }
        // console.log(typeof(Object.values(this.jsonData))); 
        var ticker = [];
        for (var i = 0 ; i < this.jsonData.symbols.length; i++) {
            if (this.jsonData.symbols[i].contractType === "PERPETUAL") {
                ticker.push(this.jsonData.symbols[i].symbol);
            }
        }
        // console.log((this.jsonData.symbols).length);
        // console.log(this.jsonData.symbols[0].symbol);
         console.log(ticker);
         return ticker;
    }
}
    
    const apiExchangeInfo = new apiCollection("https://fapi.binance.com/fapi/v1/exchangeInfo");
    const apiKline = new apiCollection("https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=1000");
    const apiInterestRate = new apiCollection("https://fapi.binan");


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //apiExchangeInfo.getJson()運行完後會回傳一個 Promise { <pending> }
    //要以then來解開promiss後印出->定義一個function並將promiss解開的結果以"x"帶入函數裡處理
    //apiExchangeInfo.getJson().then(function(x) {console.log(x)});
    //也可以寫成
    //apiExchangeInfo.getJson().then((x) => {console.log(x)});
    //
    // 和命名一個function來執行saveKlinedata的差別在哪
    //
    // 命名一個function來執行saveKlinedata 的方式和使用.then(()=>{})的差別在於：
    // 可讀性 : 使用.then(()=>{})有更好的可讀性，因為它直接在鏈式調用中指出了執行的操作，而使用命名函數需要在其他地方定義和調用函數。
    // 範圍 : 在.then(()=>{})中定義的函數是區域性的，它只在那一個鏈式調用中存在，而命名函數則會在整個作用域中存在。
    // 可重用性: 命名函數可以在多個地方重用，而.then(()=>{})中的函數則只能在那一個鏈式調用中使用。
    // 總之,選擇使用.then(()=>{})或命名函數取決於你的需求，如果你只需要在那一個鏈式調用中執行操作，那麼使用.then(()=>{})是一個好選擇
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // async function StartDownload(){
    //    await apiKline.getJson();
    //    apiKline.saveKlinedata();
    //    console.log(apiKline);
    // }
    // StartDownload();
    //
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // StartDownload函數中直接呼叫saveKlinedata()，而沒有使用物件去呼叫函數。會產生錯誤
    // 因為saveKlinedata 是 apiCollection 的一個方法，而不是全局函數。所以應該使用 apiKline.saveKlinedata() 來呼叫這個函數。
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

          // Usage example
    // apiKline.getJson().then(() => {
    // apiKline.saveKlinedata();
    // });

    apiExchangeInfo.getJson().then(() => {
    apiExchangeInfo.saveExchangeInfo();
    });
