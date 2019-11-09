/*
  returns the change needed to give the least amount of coins
*/

let coins = [1,2,5,10,20,50,100,200,500,1000,2000,5000];

function change(itemPrice, amountGiven){
  changeAmount = amountGiven - itemPrice;
  let change = [];
  console.log('Total: ' + changeAmount);

  while (changeAmount > 0){
    for (let i = 0; i < coins.length; i++){
      if ((coins[i + 1] > changeAmount && coins[i] <= changeAmount) || (coins[i] == coins[coins.length - 1] && coins[i] <= changeAmount)){
          change.push(coins[i]);
          changeAmount -= coins[i];
      }
    }
  }
  return change;
}

console.log(change(89, 200));