const number = document.getElementById('reset')
const bigBox = document.querySelector('#Box')
const button = document.querySelector('#setNumber')
const trapse = document.querySelectorAll('.cum')

function setBox() {
for (let x=1; x<=number.value; x++) {
    const div = document.createElement('div');
    bigBox.appendChild(div);
    div.className = "cum";
};
}

button.addEventListener("click", setBox)

console.log(trapse)

trapse.onmouseenter.style.backgroundColor = "black";