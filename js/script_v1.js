//GET - jQuery


$(document).ready(function() {
    
    $('#get-data-v1').click(function() {
        
        $.get('https://akademia108.pl/api/ajax/get-post.php')
            .done(function(data) {
                // console.log(data);

                let pId = $('<p></p>').text(`Post ID: ${data.id}`);
                let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
                let pTitle = $('<p></p>').text(`Title: ${data.title}`);
                let pBody = $('<p></p>').text(`Body: ${data.body}`);

                let jqBody = $('body');
                jqBody.append(pId);
                jqBody.append(pUserId);
                jqBody.append(pTitle);
                jqBody.append(pBody);
                jqBody.append( $('<hr/>'));
            })

            .fail(function(err) {
                console.error(err);
            });

    });

});