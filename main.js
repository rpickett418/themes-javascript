console.log('yo saan')

const counterText = document.querySelector('#counter')
const plusBtn = document.querySelector('#plus-btn')
const minusBtn = document.querySelector('#minus-btn')
const resetBtn = document.querySelector('#reset-btn')
console.log(plusBtn)

let count = 0

const setCount = (num) => counterText.textContent = num

function increase() {
    count++
    // console.log(count)
    // counterText.textContent = count
    setCount(count)
}

plusBtn.addEventListener('click', increase)

function decrease(){
    count--
    setCount(count)
    // counterText.textContent = count
}

function reset(){
    count = 0
    setCount(count)
}

plusBtn.addEventListener('click', increase)
minusBtn.addEventListener('click', decrease)
resetBtn.addEventListener('click', reset)

const btnList = document.querySelectorAll('.theme-buttons')
console.log(btnList)

function themeChange(event) {
    const themeName = event.target.textContent 

    // const bodyEl = document.querySelector('body')
    document.querySelector('body').className = themeName
    document.querySelector('main').className = themeName
    console.log(bodyEl.className)
    bodyEl.className = themeName

    const allBtn = document.querySelectorAll('button')
    console.log(allBtn)    
    for(let i = 0; I < allBtn.length; i++){
        allBtn[i].className = themeName
    }

}

for ( let i = 0; i < btnList.length; i++){
    btnList[i].addEventListener('click', themeChange)
}