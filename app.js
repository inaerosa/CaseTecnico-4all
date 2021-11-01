const express = require('express');
const app = express();
const data = require('./data.json')

app.get('/', (req, res) => {
    let products = data.products;
    let category = data.categories;

        for (var i = 0; i < products.length; i ++){
            let catP = products[i].categoriesId;
            for (var j = 0; j < category.length; j++){
                for (var k = 0; k < catP.length; k++){
                    if (category[j].id == catP[k]){
                         console.log("Product: " + products[i].name);
                         console.log("Category: " + category[j].name)
                     }
                }   
            }
        }
})

app.listen(3000, () => {
    console.log("Running on port 3000")
})