function renderProductList(data) {
  var productListElement = document.getElementById("product-list");
  var htmlString = "";
  for (var index in data) {
    htmlString =
      htmlString +
      `
      <div class="col-6 col-sm-4 col-md-3 ">
      <div class="products">
        <img src="${data[index].image}" alt="" />
        <h2>${data[index].name}</h2>
        <p>${data[index].price}</p>
      </div>
    </div>
        `;
  }
  productListElement.innerHTML = htmlString;
}
axios
  .get("https://65869502468ef171392e68af.mockapi.io/Products")
  .then(function (data) {
    console.log(data);
    var productList = data.data;
    renderProductList(productList);
  });
