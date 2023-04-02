
$('#submitButton').on('click', function(){


    //list of variables used to extract the values
    // from the user name input and the comment input
    var userName = $('#displayName').val();
    var comment = $('#comment').val();

    //This condition check if both input fields are empty
    // and prevents the user from submitting empty comments
    // or user names
    if (!userName || !comment) {
        alert('Please, fillout all fields');
        return
    }
        
    // user name and comment template
    var userComments = '<div id="userComment"><div class="userBox"><img src="./images/userlogo.png" class="userLogo"><div class="commentBox"><p class="userName">' + userName + '</p><h1 class="comment">' + comment + '</h1></div><div class="editButton">Edit</div><div class="deleteComment">Delete</div></div></div>';

    // this will add the commenter to the container
    var $userComment = $(userComments).prependTo('#container');


    // this will find a remove a user comment
    $userComment.find('.deleteComment').on('click', function(){
        $(this).closest('#userComment').remove();
        // console.log($userComment);
    });


    $userComment.find(".editButton").on('click', function(){
        var $commentBox = $(this).siblings('.commentBox')
        var $editForm = $commentBox.find('.editForm');

        // This checks if the editFormm already exists
        // to prevent the user from creating a new
        if ($editForm.length > 0) {
            //if the form exists, then the function focuses on the input
            //to orientate the user
            editForm.find('#editComment').focus();
            return
        }


        var $comment = $commentBox.find('.comment');
        var oldComment = $comment.text();
        var editForm = '<div class="editForm"><input type="text" id="editComment" placeholder="Edit Comment" required><div id="submitEdit">Submit</div></div>';
        $(this).siblings('.commentBox').append(editForm);


        $('#submitEdit').on('click', function(){
            var newComment = $('#editComment').val();

            //This condition check if the input field is empty
             // and prevents the user from submitting empty comments
            if(newComment.trim()=== ''){
                alert('Comment cannot be empty');
                return;
            }
           
            $comment.text(newComment);
            $(this).closest('.editForm').remove();

        });

        $comment.text('');
        $('#editComment').val(oldComment);


    });

    //This is to clear the text inputed on the form
    // after it's been submitted.
    $('#displayName').val('');
    $('#comment').val('');

});

