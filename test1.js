let pra = document.querySelector("#pr")
let increaseBtn = document.querySelector('#increase')
// console.log(increaseBtn)
let decreaseBtn = document.querySelector('#decrease')
// console.log(decreaseBtn)
let resetBtn = document.querySelector('#reset')



let a = 0;
increaseBtn.addEventListener('click', () => {
    a++
    updatePra()
    pra.style.color = "palegreen"
})

decreaseBtn.addEventListener('click', () => {

    if (a != 0) {
        a--
    }
      pra.style.color = "red"
    updatePra()

})


        //  show number  on browser after updation
function updatePra() {
    pra.textContent = a
}

    //  style and appedn the count
pra.style.color = "blue"
pra.append(a)

                //  reset btn
resetBtn.addEventListener("click", () => {
    pra.textContent = 0
    pra.style.color = "blue"
})

