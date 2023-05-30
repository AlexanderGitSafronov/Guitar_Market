class Cart {

    handleClear(){
        ROOT_CART.innerHTML = '';
    }


  render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = "";
    let sumCart = 0;

    CATALOG.forEach(({ id, name, price }) => {
        if(productsStore.indexOf(id) !== -1){
            htmlCatalog += `
                <tr>
                    <td class="cart__element_name">🎸 ${name}</td>
                    <td class="cart__element_price">${price.toLocaleString()} USD</td>
                </tr>
            `;
            sumCart += price;
        }
    })

    const html = `
        <div class="cart__container">
        <div class='cart__close' onclick='cartPage.handleClear()'></div>
            <table>
                ${htmlCatalog}
                <tr>
                    <td class="cart__element_name">💸 Сумма: </td>
                    <td class="cart__element_price">${sumCart.toLocaleString()} USD</td>
                </tr>
            </table>
        </div>
    `;

    ROOT_CART.innerHTML = html;
  }
}

const cartPage = new Cart();
