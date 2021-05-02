var selectedRow = null;

function calculateBill() {
    var fBillTotal = 0.00;
    var i = 0;
    var aCBTags = document.querySelectorAll('input');

    for (i = 0; i < aCBTags.length; i++) {
        
        if (aCBTags[i].checked) {
            
            var oTR = getParentTag(aCBTags[i], 'TR');
            
            var oTDPrice = oTR.getElementsByTagName('TD')[5];
            
            fBillTotal += parseFloat(oTDPrice.firstChild.data);
        };
    };
    
    return Math.round(fBillTotal * 100.0) / 100.0;
};


function getParentTag(oNode, sParentType) {
    var oParent = oNode.parentNode;
    while (oParent) {
        if (oParent.nodeName == sParentType)
            return oParent;
        oParent = oParent.parentNode;
    };
    return oParent;
};


document.getElementById('delete').addEventListener('click', function () {
    const perfumesEl = document.getElementsByClassName('select')
    array = []
    for (let prop in perfumesEl) {
        if (perfumesEl[prop].checked)
            array.push(perfumesEl[prop].dataset.perfume)
    }
    console.log(array)
    if (array.length > 0) {
        deleteData('perfumes', array)
            .then(data => {
                console.log(data);
                alert('Item successfully deleted!')
                window.location.reload();
            })
            .catch(err => console.log(err))
    };
});


async function deleteData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}


// ---------------------








function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    const element = document.getElementsByClassName('select');
    document.getElementById("perfumeId").value = selectedRow1.cells[0].innerHTML;
    document.getElementById("brand").value = selectedRow.cells[1].innerHTML;
    document.getElementById("name").value = selectedRow.cells[2].innerHTML;
    document.getElementById("size").value = selectedRow.cells[3].innerHTML;
    document.getElementById("price").value = selectedRow.cells[4].innerHTML;
    console.log(element);
}

// function getFormValue() {
//     return data = {
//         id: id.value,
//         brand: brand.value,
//         name: name.value,
//         size: size.value,
//         price: price.value
//     }

// }

function readFormData() {
    var formData = {};
    formData["idPerfume"] = document.getElementById("perfumeId").dataset.perfume;
    formData["brand"] = document.getElementById("brand").value;
    formData["name"] = document.getElementById("name").value;
    formData["size"] = document.getElementById("size").value;
    formData["price"] = document.getElementById("price").value;
    return formData;
    console.log(formData);
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

// document.getElementById('update').addEventListener("click", function () {
//     const data = readFormData()
//     console.log(data)
//     updateData('/perfumes', readFormData())
//         .then(data => alert("Updated successfully"))
//         .catch(err => alert("failed"))
//     window.location.reload()
// })