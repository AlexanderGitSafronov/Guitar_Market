class Products {
  constructor() {
    this.classNameActive = "products__element_btn-active";
    this.labelAdd = "Добавить в корзину";
    this.labelRemove = "Удалить из корзины";
  }

  handleSetLocationStorage(element, id) {
    const { pushProduct, products } = localStorageUtil.putProducts(id);

    if (pushProduct === true) {
      element.classList.add(this.classNameActive);
      element.innerHTML = this.labelRemove;
    } else {
      element.classList.remove(this.classNameActive);
      element.innerHTML = this.labelAdd;
    }

    headerPage.render(products.length);
  }

  render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = "";
    CATALOG.forEach(({ id, name, img, price }) => {
      let activeClass = "";
      let activeText = "";

      if (productsStore.indexOf(id) === -1) {
        activeText = this.labelAdd;
      } else {
        activeClass = this.classNameActive;
        activeText = this.labelRemove;
      }
      htmlCatalog += `
                <li class='products__element'>
                <span class='products__element_name'>${name}</span>
                <img src='${img}' class='products__element_img'>
                <span class='products__element_price'>⚡️${price.toLocaleString()} USD</span>
                <button class='products__element_btn ${activeClass}' onclick="productsPage.handleSetLocationStorage(this, '${id}')">${activeText}</button>
                </li>
            `;
    });
    const html = `<ul class='products__container'>${htmlCatalog}</ul>`;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();
