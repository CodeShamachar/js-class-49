const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const caseCheck = document.getElementById("caseCheck");
const textDiv = document.getElementById("text");
const notFound = document.getElementById("notFound");
const count = document.getElementById("count");

const originalText = textDiv.innerText;

function highlightText() {
  const value = searchInput.value.trim();
  if (!value) return;

  // Case Sensitive toggle
  const flags = caseCheck.checked ? "g" : "gi";
  const regex = new RegExp(value, flags);
  const matches = originalText.match(regex);

  if (matches) {
    textDiv.innerHTML = originalText.replace(
      regex,
      match => `<span class="highlight">${match}</span>`
    );
    notFound.style.display = "none";
    count.innerText = `Match Found: ${matches.length}`;
  } else {
    textDiv.innerText = originalText;
    notFound.style.display = "block";
    count.innerText = "";
  }
}

// Button click
searchBtn.addEventListener("click", highlightText);

// Enter key support
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    highlightText();
  }
});
