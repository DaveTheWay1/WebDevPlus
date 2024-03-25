    $(document).ready(function(){
        // when the doc is ready... essentially we will fire the function in the code line above

        $('form').on('submit', function(){
            // after hitting the submit on the form it will fire the function

            var item = $('form input');
            // will create a variable called item which is set equal to the input field
            var todo = {item: item.val()};
            // then another variable called todo which is set to an object and the key item is set to the value of the item variable .val

            $.ajax({
                // then an ajax request is made to the server
                type: 'POST',
                // we say the type of request is a post request
                url: '/todo',
                // we doing the post request to the route above .. so the app.post in the toDoController is fired upon this line
                data: todo,
                // the data property recieves the todo from line 9 and that data can now be used in app.post in toDoController
                success: function(data){
                    // after that app.post does something with that data, after it is all pushed up to the data array found in toDoController, the success function runs 
                //do something with the data via front-end framework -- not my note you can ignore
                location.reload();
                // then the page is reloaded so that that data is out on the page
                }
            });

            return false;

        });

        $('li').on('click', function(){
            // upon clicking a li
            var item = $(this).text().replace(/ /g, "-");
                        // this.text is the text(li), and replace it with -
            $.ajax({
                // we make an ajax request
                type: 'DELETE',
                // it is a delete type
                url: '/todo/' + item,
                // whatever the item is is attached to the /todo/
                success: function(data){
                //do something with the data via front-end framework
                location.reload();
                }
            });
        });

    });