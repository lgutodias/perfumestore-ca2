$(document).ready(function () {
        $.getJSON('perfumes', function (data) {
            var perfumeData = '';
            $.each(data, function (key, value) {
                perfumeData += '<tr>';
                perfumeData += '<td>'+ '<input class="select" type="checkbox" data-perfume="<%= value._id %>">' + '</td>';
                perfumeData += '<td>' + value.brand + '</td>';
                perfumeData += '<td>' + value.name + '</td>';
                perfumeData += '<td>' + value.size + '</td>';
                perfumeData += '<td>' + value.price + '</td>';
                perfumeData += '</tr>';
            });
            $('#results').append(perfumeData);
        });
    });


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


document.getElementById('delete').addEventListener('click', function () {
    const perfumesEl = document.getElementsByClassName('select')
    array = []
    for (let prop in perfumesEl) {
        if (perfumesEl[prop].checked)
            array.push(perfumesEl[prop].dataset.perfume)
    }
    console.log(array)
    // if (array.length > 0) {
    //     deleteData('books', array)
    //         .then(data => {
    //             console.log(data); // JSON data parsed by `data.json()` call
    //         });
    // }
})