var myArray = []
	
	$.ajax({
		method:'GET',
		url:'perfumes',
		success:function(response){
			myArray = response
			buildTable(myArray)
			console.log(myArray)
		}
	})

	function buildTable(){
		var table = document.getElementById('myTable')

		for (var i = 0; i < myArray.length; i++){
			var row = `<tr>
                            <td><input class="select" type="checkbox" data-perfume=${myArray[i]._id}></td>
                            <td>${myArray[i].brand}</td>
							<td>${myArray[i].name}</td>
                            <td>${myArray[i].size}</td>
                            <td>${myArray[i].price}</td>
                            <td><button class="edit"
                                    data-id=${myArray[i]._id}
                                    data-brand=${myArray[i].brand}
                                    data-name=${myArray[i].name}
                                    data-size=${myArray[i].size}
                                    data-price=${myArray[i].price}>Update</button>
                                <button onclick="deleteTest1()" class="btn-update">Delete</button>
                            </td>
					  </tr>`
			table.innerHTML += row


		}
    }


//     function select_row()
// {
// 	$("#results tbody tr[_id]").click(function ()
// 	{
// 		$(".selected").removeClass("selected");
// 		$(this).addClass("selected");
// 		var section = $(this).prevAll("tr").children("td[colspan='5']").length - 1;
// 		var perfume = $(this).attr("_id") - 1;
// 		delete_row(section, perfume);
// 	})
// };


// document.getElementById('delete').addEventListener('click', function () {
//     const perfumesEl = document.getElementsByClassName('select')
//     array = []
//     for (let prop in perfumesEl) {
//         if (perfumesEl[prop].checked)
//             array.push(perfumesEl[prop].dataset.perfume)
//     }
//     console.log(array)
//     if (array.length > 0) {
//         deleteData('perfumes', array)
//             .then(data => {
//                 console.log(data);
//                 window.location.reload();
//             })
//             .catch(err => console.log(err))
//     };
// });

// Funcao de teste novo botao delete

function deleteTest1() {
    const perfumesEl = document.getElementsByClassName('select')
    const productId = perfumesEl.dataset.perfume
    console.log(productId);

}




// final


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

    // document.getElementById('update').addEventListener('click', function () {
    // const perfumesEl = document.getElementsByClassName('select')
    // var teste = new Array(0);
    // for (let prop in perfumesEl) {
    //     if (perfumesEl[prop].checked)
    //         teste.push(perfumesEl[prop].dataset.perfume)
    // }
    // console.log(teste)
    // if (array.length > 0) {
    //     deleteData('perfumes', array)
    //         .then(data => {
    //             console.log(data); // JSON data parsed by `data.json()` call
    //         });
    // }
//})