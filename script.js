function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./asset/foto-carmen-purple.png")
  } else {
    img.setAttribute("src", "./asset/foto-carmen-gray.png")
  }
}
