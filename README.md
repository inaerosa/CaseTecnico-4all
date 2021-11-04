# Case Técnico 4all
 
## 💢 Sobre

**Case técnico** desenvolvido a partir de um .json

Nele encontramos 3 objetos:

* Produtos
* Categorias
* Estabelecimentos

### 📢 Missão

* Retornar um .json que vincule os objetos respeitando suas restrições.


### 🔨 Ferramentas

* Node.js
* Express

### ***Exemplo de entrada***
```json
    "products": [{
      "id": 1,
      "categoriesId": [1],
      "name": "product A",
      "price": 100
    }, 
     "categories": [
    {
      "id": 1,
      "name": "category A"
    },
    "establishments": [{
      "name": "establishment A",
      "id": 1,
      "productsId": [1]
    }
```
### ***Exemplo de saída***
```json
"establishment A": {
    "category A": {
      "product A": {
        "price": "1.00"
      }
    }
  },
```
