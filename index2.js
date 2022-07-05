const gewinnWürfel = Math.random() * 6 + 1;
if (gewinnWürfel === 6) {
  console.log("🎊Herzlich Glückwunsch Sie haben gewonnen 🎊");
} else {
  console.log("😞opss!😞");
}
