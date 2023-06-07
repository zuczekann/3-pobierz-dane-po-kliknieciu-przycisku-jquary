//GetJSON

$(document).ready(function() {
    
    $('#get-data-v2').click(function() {

        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
            .done(function(data) {

                let jqBody = $('body');
                jqBody.append($('<p></p>').text(`Post ID: ${data.id}`));
                jqBody.append($('<p></p>').text(`User ID: ${data.userId}`));
                jqBody.append($('<p></p>').text(`Title: ${data.title}`));
                jqBody.append($('<p></p>').text(`Body: ${data.body}`));
                jqBody.append( $('<hr/>'));
            })

            .fail(function(err) {
                console.error(err);
            });

    });

});