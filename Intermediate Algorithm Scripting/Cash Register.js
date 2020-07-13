/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), 
payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.
Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return 
the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, 
as the value of the change key.
*/

const denominations = ['ONE HUNDRED', 'TWENTY', 'TEN', 'FIVE', 'ONE', 'QUARTER', 'DIME', 'NICKEL', 'PENNY'];
const moneyDict = {
  'PENNY': 1,
  'NICKEL': 5,
  'DIME': 10,
  'QUARTER': 25,
  'ONE': 100,
  'FIVE': 500,
  'TEN': 1000,
  'TWENTY': 2000,
  'ONE HUNDRED': 10000
};

const takeOutMoneyFromCid = (amtLeftToPay, cidObj, changeToGive, moneyType) => {
  if (amtLeftToPay >= moneyDict[moneyType] && cidObj[moneyType]) {
    if (amtLeftToPay >= cidObj[moneyType]) {
      const amtToSubtract = cidObj[moneyType];
      amtLeftToPay -= amtToSubtract;
      changeToGive.push([moneyType, amtToSubtract / 100]);
      cidObj[moneyType] = 0;
    } else {
      const amtToSubtract =
        Math.floor(amtLeftToPay / moneyDict[moneyType]) * moneyDict[moneyType];
      amtLeftToPay -= amtToSubtract;
      changeToGive.push([moneyType, amtToSubtract/ 100]);
      cidObj[moneyType] -= amtToSubtract;
    }
  }

  return [amtLeftToPay, cidObj, changeToGive];
};

function checkCashRegister(price, cash, cid) {
  let amtLeftToPay = Math.round((cash - price) * 100);

  let cidObj = cid.reduce((acc, [moneyType, amt]) => {
    return {
      ...acc,
      [moneyType]: Math.round(amt * 100)
    }
  }, {});

  let changeToGive = [];

  denominations.forEach(moneyType => {
    [amtLeftToPay, cidObj, changeToGive] =
      takeOutMoneyFromCid(amtLeftToPay, cidObj, changeToGive, moneyType);
  });

  if (amtLeftToPay > 0) {
    return {status: 'INSUFFICIENT_FUNDS', change: []};
  }

  const amtLeftInCid = Object.values(cidObj).reduce((acc, amt) => acc + amt, 0);

  if (amtLeftInCid > 0) {
    return {status: 'OPEN', change: changeToGive};
  }

  return {status: "CLOSED", change: cid};
}


// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]


console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], 
["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));