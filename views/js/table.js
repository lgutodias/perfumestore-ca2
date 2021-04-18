$(document).ready(function () {
        $.getJSON('perfumes', function (data) {
            var perfumeData = '';
            $.each(data, function (key, value) {
                perfumeData += '<tr>';
                perfumeData += '<td>'+ '<input class="select" type="checkbox">' + '</td>';
                perfumeData += '<td>' + value.brand + '</td>';
                perfumeData += '<td>' + value.name + '</td>';
                perfumeData += '<td>' + value.size + '</td>';
                perfumeData += '<td>' + value.price + '</td>';
                perfumeData += '</tr>';
            });
            $('#results').append(perfumeData);
        });
    });