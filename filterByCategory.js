function filterByCategory(product)
{
    return function (category)
    {
        return product.filter(el=> {
            return el.category===category})
    }
}

var products = [
    { name: "Shirt", category: "Clothing" },
    { name: "Pants", category: "Clothing" },
    { name: "Hat", category: "Accessories" },
    { name: "Sunglasses", category: "Accessories" },
  ];
  
  var clothingProducts = filterByCategory(products)("Clothing");
  console.log(clothingProducts);

//   Output:
//   [
//     { name: 'Shirt', category: 'Clothing' },
//     { name: 'Pants', category: 'Clothing' }
//   ]