document.addEventListener("DOMContentLoaded", function() {
    const uusirivibtn = document.getElementById("uusirivibtn")
    const jokeririvitp = document.getElementById("jokeririvit")
    const jokeritaulukko = document.getElementById("jokeritaulukko")

    let rivilkm = 0;

    function uusiRivi() {
        const newRow = jokeritaulukko.insertRow()
        for (let i = 0; i < 7; i++) {
            const newCell = newRow.insertCell()
            const randomNumber = Math.floor(Math.random() * 10)
            newCell.textContent = randomNumber
        }
    }

    uusirivibtn.addEventListener("click", function() {
        uusiRivi()
        rivilkm++
        jokeririvitp.textContent = `Valmiita rivejä: ${rivilkm}`
    })

})
