var money = prompt("how many money would you gave to robot?");
var milkCost = 119;

function getMilk(money) {   
    console.log("You can buy total " + Math.floor(money/milkCost) + " milks");
		var outputVar = money % milkCost;
    return outputVar;
  }

getMilk(money);

//如果在function內宣告變數outputVar,將無法在function外使用該變數 (function scope VS. Global Scope)
//解決方式：在global區塊宣告outputVar變數，就可以在return後在function外使用該變數。
console.log("outside function" + outputVar);