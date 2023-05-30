class Header {
  handlerOpenShoppingPage() {
    cartPage.render();
  }

  render(count) {
    const html = `
            <div class='header__container'>
                 <div class='header__counter' onclick="headerPage.handlerOpenShoppingPage();">🔥 ${count}</div>
            </div>
        `;
    ROOT_HEADER.innerHTML = html;
  }
}
const headerPage = new Header();
