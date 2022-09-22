var maxProfit = function (prices) {
 let sellIdx = prices.length - 1;
 let profit = 0;

 for (let buyIdx = prices.length - 1; buyIdx >= 0; buyIdx--) {
  let buyVal = prices[buyIdx];
  let sellVal = prices[sellIdx];

  if (buyVal - sellVal >= 0) {//if buyVal > sellVal
   sellIdx = buyIdx;
  } else {//if sellVal > buyVal
   let price = sellVal - buyVal;//current sale price
   profit = Math.max(profit, price);//running max sale price
  }
 }
 return profit;
};