//Logic Challenge - Toko X

function countProfit(shoppers) {
  var listBarang = [ 
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
  ];

  var result = [];

  if (shoppers.length === 0) {
    return result;
  } else {
    var sepatuStock = listBarang[0][2];
    var bajuStock = listBarang[1][2];
    var sweaterStock = listBarang[2][2];
    var sepatuShoppers = [];
    var bajuShoppers = [];
    var sweaterShoppers = [];
    
    for(var i = 0; i < shoppers.length; i++) {
      if(shoppers[i]['product'] === 'Sepatu Stacattu' && sepatuStock >= shoppers[i]['amount']) {
        sepatuShoppers.push(shoppers[i]['name']);
        sepatuStock -= shoppers[i]['amount'];
      } else if(shoppers[i]['product'] === 'Baju Zoro' && bajuStock >= shoppers[i]['amount']) {
        bajuShoppers.push(shoppers[i]['name']);
        bajuStock -= shoppers[i]['amount'];
      } else if (shoppers[i]['product'] === 'Sweater Uniklooh' && sweaterStock >= shoppers[i]['amount']) {
        sweaterShoppers.push(shoppers[i]['name']);
        sweaterStock -= shoppers[i]['amount'];
      }
    }

    var buyer;
    var stockLeftOver;
    var profit;

    for(var i = 0; i < listBarang.length; i++) {
      if(listBarang[i][0] === 'Sepatu Stacattu') {
        buyer = sepatuShoppers;    
        stockLeftOver = sepatuStock;
        profit = listBarang[0][1] * (listBarang[0][2] - sepatuStock);
      } else if (listBarang[i][0] === 'Baju Zoro') {
        buyer = bajuShoppers;
        stockLeftOver = bajuStock;
        profit = listBarang[1][1] * (listBarang[1][2] - bajuStock);
      } else if (listBarang[i][0] === 'Sweater Uniklooh') {
        buyer = sweaterShoppers;
        stockLeftOver = sweaterStock;
        profit = listBarang[2][1] * (listBarang[2][2] - sweaterStock);
      }

      var productUpdate = {};
      productUpdate.product = listBarang[i][0];
      productUpdate.shoppers = buyer;
      productUpdate.leftOver = stockLeftOver;
      productUpdate.totalProfit = profit;
      result.push(productUpdate);
    }
  return result;
  }
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]