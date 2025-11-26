import {auth, db} from "./firebase-config.js";
import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const inpUserName = document.querySelector("#username");
const inpEmail = document.querySelector("#email");
const inpPwd = document.querySelector("#password");
const inpConfirmPwd = document.querySelector("#confirm-password");
const registerForm = document.querySelector("#register-form");

const handleRegister = function (event) {
  event.preventDefault();
  let username = inpUserName.value;
  let email = inpEmail.value;
  let password = inpPwd.value;
  let confirmPassword = inpConfirmPwd.value;
  let role_id = 2;
  if (!username || !email || !password || !confirmPassword) {
    alert("Vui lòng nhập đầy đủ các trường dữ liệu:");
    return;
  }
  if (password === confirmPassword) {
    alert("Mật khẩu không khớp!");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      const userData = {
        username,
        email,
        password, //Lưu ý: Mã hóa
        role_id,
        balance: 0,
      };
      return addDoc(collection(db, "users"), userData);
    })
    .then(() => {
      alert("Đăng ký thành công");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert("Lỗi" + error.message);
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      // ..
    });
};

registerForm.addEventListener("submit", handleRegister);
