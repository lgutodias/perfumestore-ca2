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
                            <td>${myArray[i].section}</td>
                            <td>${myArray[i].brand}</td>
							<td>${myArray[i].name}</td>
                            <td>${myArray[i].size}</td>
                            <td>${myArray[i].price}</td>
					  </tr>`
			table.innerHTML += row


		}
    }
