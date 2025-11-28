import {db} from "./firebase-config.js";
import {checkSession} from "./check_session.js";
import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

export const getProductList = async (limitCount, container) => {
  let htmls = "";
  try {
    const q = query(
      collection(db, "products"),
      orderBy("createdAt", "desc"),
      limit(limitCount)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const product = doc.data();
      const productId = doc.id;
      const formattedPrice = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(product.price ?? 0);

      htmls += `
        <div class="product-item col-md-3 col-6">
          <div class="content p-2">
            <img src="${product.imageUrl ?? "./src/img/default.jpg"}" alt="${
        product.name ?? "Sản phẩm"
      }" class="img-fluid rounded">
            <div class="text p-2">
              <div class="d-flex justify-content-between flex-column align-items-center">
                <h5 class="mb-2 text-uppercase">${product.name ?? ""}</h5>
                <p class="mb-3">Giá: <span class="fs-6 fw-semibold text-danger">${formattedPrice}</span></p>
              </div>
              <button type="button" class="btn btn-primary mt-2 w-100" data-id="${productId}">Đặt hàng</button>
            </div>
          </div>
        </div>
      `;
    });

    container.innerHTML = htmls;
  } catch (error) {
    console.error("Lỗi khi lấy sản phẩm", error);
  }
};
