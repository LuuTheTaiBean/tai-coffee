import {getProductList} from "./get-products.js";

document.addEventListener("DOMContentLoaded", () => {
  const productContainer = document.querySelector(".product-list");
  getProductList(4, productContainer); // ví dụ lấy 4 sản phẩm
});
