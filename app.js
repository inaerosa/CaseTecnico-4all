const express = require('express');
const app = express();
const fs = require('fs')
const data = require('./data.json')

const JSONWrite = (filePath, data, encoding = 'utf-8') => {
    const promiseCallback = (resolve, reject) => {
        fs.writeFile(filePath, JSON.stringify(data, null, 2), encoding, (err) => {
            if (err) return reject(err)
            resolve(true)
        })
    }
    return new Promise(promiseCallback)
}

app.get('/', (req, res) => {
    let products = data.products;
    let category = data.categories;
    let establishments = data.establishments;
    var myEst = new Object();
    let array = []
    var totPrice =0 ;
    var cont = 0;
    var avg = []
    for (var l = 0; l < establishments.length; l++){
        myEst[establishments[l].name] = {}
        let prodId = establishments[l].productsId;
        for (var i = 0; i < products.length; i ++){
            let catP = products[i].categoriesId;
            for (var j = 0; j < category.length; j++){
                for (var k = 0; k < catP.length; k++){
                    for (var m = 0; m < prodId.length; m++){
                        if (category[j].id == catP[k] && products[i].id== prodId[m]){
                            totPrice += parseInt(products[i].price/100)
                            myEst[establishments[l].name][category[j].name] = {}
                            myEst[establishments[l].name][category[j].name][products[i].name] = {}
                            myEst[establishments[l].name][products[i].name] = {price: products[i].price/100}
                            
                            JSONWrite('./output.json', myEst).then(console.log).catch(console.error)

                            cont++;
                        }
                    }        
                }   
            }
        }
        avg[l] = totPrice/cont;
        myEst[establishments[l].name]["avgPrice"] = avg[l].toFixed(2)
        array.push(myEst)
    }
    res.json(myEst)
})

app.listen(3000, () => {
    console.log("Running on port 3000")
})