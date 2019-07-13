// var Product = require("../models/product");
// var mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/shopping", {
//   useNewUrlParser: true
// });

// var products = [
//   new Product({
//     imagePath:
//       "https://www.sony.co.in/image/76e7f8d0a403399b0c04fadaec7aef76?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
//     title: "Sony Headphones B12",
//     description: "Sony's top headphone B1221,top seller, limited stock",
//     price: 10
//   }),
//   new Product({
//     imagePath:
//       "https://www.sony.co.in/image/https://i5.walmartimages.com/asr/b7bcd89b-e55c-4a19-b4b8-2ca10fa3d31a_1.f4591516219e4db546a1cf41e2ad150d.jpeg?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
//     title: "Apple beats",
//     description: "Apple's top headphone B1221,top seller, limited stock",
//     price: 50
//   }),
//   new Product({
//     imagePath:
//       "https://www.https://tshop.r10s.com/0dc/8d6/174e/2d6f/40ea/b623/fe12/117ae7b0f954ab3a295b6a.jpg.co.in/image/76e7f8d0a403399b0c04fadaec7aef76?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
//     title: "Red Apple beats",
//     description: "Top headphone B1221,top seller, limited stock",
//     price: 40
//   }),
//   new Product({
//     imagePath:
//       "https://www.https://tshop.r10s.https://media.energysistem.com/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/4/4/44488_2000_38.jpg/0dc/8d6/174e/2d6f/40ea/b623/fe12/117ae7b0f954ab3a295b6a.jpg.co.in/image/76e7f8d0a403399b0c04fadaec7aef76?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
//     title: "Headphones 2 bluetooth blue",
//     description: "Top headphone B1221,top seller, limited stock",
//     price: 20
//   }),
//   new Product({
//     imagePath:
//       "https://www.https://tshop.r10s.com/https://cdn.bmstores.co.uk/images/hpcProductImage/imgFull/330054-Goodmans-Headphones-Pink.jpg/8d6/174e/2d6f/40ea/b623/fe12/117ae7b0f954ab3a295b6a.jpg.co.in/image/76e7f8d0a403399b0c04fadaec7aef76?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
//     title: "Goodman's Headphones",
//     description: "Top headphone B1221,top seller, limited stock",
//     price: 25
//   })
// ];

// var done = 0;
// for (var i = 0; i < products.length; i++) {
//   products[i].save(function(err, result) {
//     done++;
//     if (done === products.length) {
//       exit();
//     }
//   });
// }

// function exit() {
//   mongoose.disconnect();
// }

// -----------------------------------------
var Product = require("../models/product");

var MongoClient = require("mongodb").MongoClient;

MongoClient.connect(
  "mongodb://localhost:27017/Shopping",
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      console.log("unable to connect 1");
    }
    console.log("Success 1");

    var db = client.db("shopping");

    var products = [
      new Product({
        imagePath:
          "https://www.sony.co.in/image/76e7f8d0a403399b0c04fadaec7aef76?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
        title: "Sony Headphones B12",
        description: "Sony's top headphone B1221,top seller, limited stock",
        price: 10
      }),
      new Product({
        imagePath:
          "https://zinggadget.com/wp-content/uploads/2019/05/42-alu-silver-sport-white-nc-s3-grid.jpg",
        title: "Apple Watch",
        description: "Apple's top  B1221,top seller, limited stock",
        price: 50
      }),
      new Product({
        imagePath:
          "https://cdn.shopify.com/s/files/1/1195/1382/products/rose-embroidered-mens-hoodie-s-riot-society-clothing.jpg?v=1556195515",
        title: "Hoodie for men",
        description: "Top Hooedies dark theme B1221,top seller, limited stock",
        price: 20
      }),
      new Product({
        imagePath:
          "https://www.dhresource.com/0x0s/f2-albu-g6-M00-44-F3-rBVaR1vZaGGAPPE0AAHOJ_nwDPY887.jpg/outdoors-best-sunglasses-for-men-2018-driving.jpg",
        title: "Goodman's Sunglasses",
        description: "Top glases for men and women,top seller, limited stock",
        price: 25
      }),
      new Product({
        imagePath:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDQAozCqHt8WuKlq0XN_W1BEJ-AugTdKyIk2GQcNDjOkNZ-1Q_",
        title: "Shoes",
        description: "Best Shoes,top seller, limited stock",
        price: 40
      })
    ];

    db.collection("products").insertMany(products, (err, result) => {
      if (err) {
        return console.log("unable to connect to mongodb");
      }
      console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
  }
);
