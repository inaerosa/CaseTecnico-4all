const express = require('express');
const app = express();
const data = require('./data.json')

app.get('/', (req, res) => {
    let products = data.products;
    let category = data.categories;
    let establishments = data.establishments;

        for (var i = 0; i < products.length; i ++){
            let catP = products[i].categoriesId;
            for (var j = 0; j < category.length; j++){
                for (var k = 0; k < catP.length; k++){
                    for (var l = 0; l < establishments.length; l++){
                        let prodId = establishments[l].productsId;
                        for (var m = 0; m < prodId.length; m++){
                            if (category[j].id == catP[k] && products[i].id == prodId[m]){
                                console.log("Establishment: " + establishments[l].name)
                                console.log("Product: " + products[i].name);
                                console.log("Category: " + category[j].name)
                            }
                        }           
                    }    
                }   

            }
        console.log("\n")

        }
        
        

        
})

app.listen(3000, () => {
    console.log("Running on port 3000")
})