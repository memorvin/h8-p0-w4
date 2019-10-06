//Logic Challenge - Shopping Time!

function shoppingTime(memberId, money) {
  var items = [
      ['Sepatu Stacattu', 1500000],
      ['Baju Zoro', 500000], 
      ['Baju H&N', 250000],
      ['Sweater Uniklooh', 175000], 
      ['Casing Handphone', 50000]
    ];
  var transaction = {};
  var buy = [];
  var total = 0;
  var toSpend = money;

  if (memberId === '' || memberId === undefined) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  } else if (money < items[items.length-1][1]) {
      return 'Mohon maaf, uang tidak cukup';
    } else {
      transaction.memberId = memberId;
      transaction.money = money;
      transaction.listPurchased = purchase(toSpend);
      transaction.changeMoney = change(money);
      function purchase() {
        for (var i = 0; i < items.length; i++) {
          if (toSpend >= items[i][1]) {
            total += items[i][1];
            toSpend -= items[i][1];
            buy.push(items[i][0]);
          }
        }
        return buy;
      }
      function change() {
        return money - total;
      }
    return transaction;      
  }  
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja