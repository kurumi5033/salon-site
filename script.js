// Salon Non - 共通スクリプト
// スマホ表示でのナビゲーション開閉のみを行う、最小限のJSです。
// 外部ライブラリは使わず、フォーム送信やユーザー入力の受け付けも行いません。

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  if (!toggle || !nav) {
    return;
  }

  toggle.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
});
