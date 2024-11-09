const originalArticle = document.getElementById("article").innerText;

// Fungsi untuk mencari kata dan menampilkan jumlah kemunculannya
function searchWord() {
  const searchTerm = document.getElementById("search-word").value;
  const regex = new RegExp(searchTerm, "gi");
  const matches = originalArticle.match(regex);
  const result = matches ? matches.length : 0;
  document.getElementById("search-result").innerText = `Kata "${searchTerm}" ditemukan ${result} kali.`;
}

// Fungsi untuk mengganti kata
function replaceWord() {
  const findTerm = document.getElementById("find-word").value;
  const replaceTerm = document.getElementById("replace-word").value;
  const replacedText = originalArticle.replace(new RegExp(findTerm, "gi"), replaceTerm);
  document.getElementById("replaced-article").innerText = replacedText;
}

// Fungsi untuk mengurutkan kata
function sortWords() {
  const words = originalArticle.match(/\w+/g);
  const sortedWords = words ? words.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())) : [];
  const sortedList = sortedWords.map((word) => `<li>${word}</li>`).join("");
  document.getElementById("sorted-words").innerHTML = sortedList;
}
