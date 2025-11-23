// === Приклад 2: Лише цифри ===
function checkSymbol(kc) {
  if (kc < 48 || kc > 57) return false;
  return true;
}

// === Приклад 3: Користувацьке меню ===
function showCustomMenu(sign, x, y) {
  const cm = document.getElementById("custommenu");
  if (sign) {
    cm.style.visibility = "visible";
    cm.style.left = x + "px";
    cm.style.top = y + "px";
  } else {
    cm.style.visibility = "hidden";
  }
}

// для зберігання поточного розміру шрифту
let currentFontSize = 16;

function doAction(actionType) {
  switch (actionType) {
    case "copy":
      navigator.clipboard
        .writeText(document.body.innerText)
        .then(() => alert("Текст скопійовано!"))
        .catch(() => alert("Не вдалося скопіювати текст."));
      break;
    case "close":
      window.close();
      break;
    case "fontIncrease":
      currentFontSize += 2;
      document.body.style.fontSize = currentFontSize + "pt";
      break;
    case "fontDecrease":
      currentFontSize -= 2;
      if (currentFontSize < 6) currentFontSize = 6; // мінімальний розмір
      document.body.style.fontSize = currentFontSize + "pt";
      break;
    case "changeBkg":
      // випадковий колір фону
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
      break;
  }
}
