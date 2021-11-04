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
    var obj = new Object();
    var totPrice =0 ;
    var cont = 0;
    var avg;

    establishments.forEach(establishment => {
        obj[establishment.name] = {}
        let prodId = establishment.productsId;
        products.forEach(product => {
            let catP = product.categoriesId;
            category.forEach(category => {
                for (var i = 0; i < catP.length; i++){
                    for (var j = 0; j < prodId.length; j++){
                        if (category.id == catP[i] && product.id== prodId[j]){
                            if (!obj[establishment.name][category.name]){
                                obj[establishment.name][category.name] = {}
                            }
                            obj[establishment.name][category.name][product.name] = {price: product.price/100}
                            totPrice += parseFloat(product.price/100)
                            cont++;
                        }
                    }
                }
            })
        })

        avg = totPrice/cont;
        obj[establishment.name]["avgPrice"] = avg.toFixed(2)

        cont = 0;
        avg = 0;
        totPrice = 0;
        
        JSONWrite('./output.json', obj).then(console.log).catch(console.error)
    })
 
    res.json(obj)
})

app.listen(3000, () => {
    console.log("Running on port 3000")
})