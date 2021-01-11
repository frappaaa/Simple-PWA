const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis" },
  { name: "Voluptatem" },
  { name: "Explicabo" },
  { name: "Rchitecto" },
  { name: "Beatae" },
  { name: "Vitae" },
  { name: "Inventore" },
  { name: "Veritatis" },
  { name: "Accusantium" },
]

const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name }) =>
        (output += `
                <div class="card">
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCoffees)
  
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }