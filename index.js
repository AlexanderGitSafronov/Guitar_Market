function render() {
  const productsStore = localStorageUtil.getProducts();
  headerPage.render(productsStore.length);

  productsPage.render();
}
spinnerPage.render();

let CATALOG = [];

// server/catalog.json

fetch(
  "https://api.myjson.online/v1/records/c9f6be0d-d417-455c-9560-b717e82b0be5"
)
  .then((result) => result.json())
  .then((body) => {
    CATALOG = body.data;

    spinnerPage.handelClear();
    render();
  })
  .catch((error) => {
    spinnerPage.handelClear();
    errorPage.render();
  });
