let id = document.getElementById('perfumeId');
let brand = document.getElementById('brand');
let name = document.getElementById('name');
let size = document.getElementById('size');
let price = document.getElementById('price');
let edit = document.querySelectorAll('button.edit');


for (let i = 0; i < edit.length; i++) {
    edit[i].addEventListener('click', function () {
        editRequest(edit[i])
        console.log(edit[i]);
    })
}

function editRequest(el) {
    alert('Que bosta!');
    id.value = `${el.dataset.id}`
    brand.value = `${el.dataset.brand}`
    name.value = `${el.dataset.name}`
    size.value = `${el.dataset.size}`
    price.value = `${el.dataset.price}`
}