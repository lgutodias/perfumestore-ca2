$(document).ready(function () {
        $.getJSON('perfumes', function (data) {
            var perfumeData = '';
            $.each(data, function (key, value) {
                perfumeData += '<tr>';
                perfumeData += '<td>'+ '<input class="select" type="checkbox" value="value._id">' + '</td>';
                console.log(value._id);
                perfumeData += '<td>' + value.brand + '</td>';
                perfumeData += '<td>' + value.name + '</td>';
                perfumeData += '<td>' + value.size + '</td>';
                perfumeData += '<td>' + value.price + '</td>';
                perfumeData += '</tr>';
            });
            $('#results').append(perfumeData);
        });
    });


    function select_row()
{
	$("#results tbody tr[_id]").click(function ()
	{
		$(".selected").removeClass("selected");
		$(this).addClass("selected");
		var section = $(this).prevAll("tr").children("td[colspan='5']").length - 1;
		var perfume = $(this).attr("_id") - 1;
		delete_row(section, perfume);
	})
};