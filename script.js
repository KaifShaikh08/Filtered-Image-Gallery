const filterButtons = document.querySelectorAll(".filter_buttons button")
const filterAbleCards = document.querySelectorAll(".filter-cards .card")


const filterCards = e => {
    document.querySelector('.active').classList.remove('active')
    e.target.classList.add("active")

    filterAbleCards.forEach(card => {
        card.classList.add("hide")
        if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all"){
            card.classList.remove("hide")
        }
    })
}
 
filterButtons.forEach(button => button.addEventListener('click',filterCards))