const fonts = {
  Biennale: {
    family: "Biennale",
    size: "16px",
  },
  Arial: {
    family: "Arial, sans-serif",
    size: "16px",
  },
  Georgia: {
    family: "Georgia, serif",
    size: "18px",
  },
  Verdana: {
    family: "Verdana, sans-serif",
    size: "14px",
  },
};
function changeFont() {
  const fontSelect = document.getElementById("fontSelect");
  const selectedFontName = fontSelect.value;
  const selectedFont = fonts[selectedFontName];
  document.body.style.fontFamily = selectedFont.family;
  document.body.style.fontSize = selectedFont.size;
}
function resetFont() {
  const defaultFont = fonts.Biennale;
  document.body.style.fontFamily = defaultFont.family;
  document.body.style.fontSize = defaultFont.size;
}
const changeFontButton = document.getElementById("changeFontButton");
changeFontButton.addEventListener("click", changeFont);
const resetFontButton = document.getElementById("resetFontButton");
resetFontButton.addEventListener("click", resetFont);
