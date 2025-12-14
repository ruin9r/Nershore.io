export function toggleLangButton() {
  const langButton = document.querySelector(".dropdown__button");
  const langList = document.querySelector('.dropdown__content')

  let currentLang = "EN";
  langButton.textContent = currentLang;

  langButton.addEventListener("click", () => {
    langButton.classList.toggle('open');
    langList.classList.toggle("open");
  })
}