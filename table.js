// $(document).ready(function(){
//     $.getJSON("employee.json", funtion(data){
//         var perfumeData = '';
//         $.each(data, function(key, value){
//             perfumeData += '<tr>';
//             perfumeData += '<td>'+value.brand+'</td>';
//             perfumeData += '</tr>';
//         });
//         $('#results').append(perfumeData);
//     });
// });

function draw_table()
{
	$("#results").empty();
	$.getJSONuncached = function (url)
	{
		return $.ajax(
		{
			url: url,
			type: 'GET',
			cache: false,
			success: function (html)
			{
				$("#results").append(html);
				select_row();
			}
		});
	};
	$.getJSONuncached("/get/html")
};