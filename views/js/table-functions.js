var selectedRow = null;

function calculateBill() {
    var fBillTotal = 0.0;
    var i = 0;
    var aCBTags = document.querySelectorAll('input');

    for (i = 0; i < aCBTags.length; i++) {
        // is this menu item selected? it is if the checkbox is checked
        if (aCBTags[i].checked) {
            // get the checkbox' parent table row
            var oTR = getParentTag(aCBTags[i], 'TR');
            // retrieve the price from the price column, which is the third column in the table
            var oTDPrice = oTR.getElementsByTagName('TD')[4];
            // the first child text node of the column contains the price
            fBillTotal += parseFloat(oTDPrice.firstChild.data);
        };
    };
    // return the price as a decimal number with 2 decimal places
    return Math.round(fBillTotal * 100.0) / 100.0;
};

// function highlightSale(idTable, bShowSale) {
//     // if bShowSale is true, then we're highlighting vegetarian
//     //	meals, otherwise we're unhighlighting them.
//     var i = 0;
//     var oTable = document.getElementById(idTable);
//     var oTBODY = oTable.getElementsByTagName('tbody')[0];
//     var aTRs = oTBODY.getElementsByTagName('tr');
//     // walk through each of the table rows and see if it has a 
//     // "vegetarian" attribute on it.
//     for (i = 0; i < aTRs.length; i++) {
//         if (aTRs[i].getAttribute('sale') == "true") {
//             if (bShowSale) {
//                 aTRs[i].style.backgroundColor = "rgb(243,213,165)";
//             } else {
//                 aTRs[i].style.backgroundColor = "";
//             };
//         };
//     };
// };
// Utility function for getting the parent tag of a given tag
// but only of a certain type (i.e. a TR, a TABLE, etc.)
function getParentTag(oNode, sParentType) {
    var oParent = oNode.parentNode;
    while (oParent) {
        if (oParent.nodeName == sParentType)
            return oParent;
        oParent = oParent.parentNode;
    };
    return oParent;
};


// ---------------------

// let brand = document.getElementById('brand')
// let name = document.getElementById('name')
// let size = document.getElementById('size')
// let price = document.getElementById('price')
// let id = document.getElementById('perfumeId')
// let edit = document.querySelectorAll('button.edit')

// function Bosta() {
// for(let i = 0; i < edit.length; i++){
//      edit[i].addEventListener('click' , function(){
//         editRequest(edit[i])
//         alert('Bosta')

//     })
// }
// }

// function editRequest(el){
//     id.value =`${el.dataset.id}`
//     brand.value =`${el.dataset.brand}`
//     name.value =`${el.dataset.name}`
//     size.value =`${el.dataset.size}`
//     price.value =`${el.dataset.price}`
// }



// document.getElementById('update').addEventListener("click", function () {
//     const data = getFormValue()
//     console.log(data)
//     updateData('/books', getFormValue())
//         .then(data => alert("Updated successfully"))
//         .catch(err => alert("failed"))
//     window.location.reload()
// })


function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("brand").value = selectedRow.cells[1].innerHTML;
    document.getElementById("name").value = selectedRow.cells[2].innerHTML;
    document.getElementById("size").value = selectedRow.cells[3].innerHTML;
    document.getElementById("price").value = selectedRow.cells[4].innerHTML;
}

function getFormValue() {
    return data = {
        id: id.value,
        genre: genre.value,
        title: title.value,
        author: author.value,
        publisher: publisher.value,
        price: price.value
    }

}


async function updateData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}