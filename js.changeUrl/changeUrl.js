    function toPage() { // start the function called toPage
        var whereNow = document.location.href; // pulls the current location of browser
        var list = document.getElementById('dlist'); // finds the dropdown list by its ID value
        var selected = list.options[list.selectedIndex].value; // pulls the value from the selected dropdown option
        var whereTo = whereNow; // here we make the variable whereTo take the value of whereNow in order to manipulate whereTo without having to change the value of whereNow, at least not yet. ^_^
        var checkCat = whereTo.match('cat2'); // check the url for cat2
        if (checkCat !== null) { // if the check for cat2 is not null ...
            var fixTo = whereTo.replace('index.htm', '').replace('/cat2/', '/cat/'); // find and replace index file with null, and replace 'cat2' with just 'cat'
        }
        else var fixTo = whereTo.replace('index.htm', ''); // if not (else), simply get rid of index filename if it is found, no need to worry about 'cat2' now
        var findLast = fixTo.charAt(length-0);
        if (findLast !== '/') {
            whereNow = fixTo + selected;
        }
        else whereNow = fixTo + '/' + selected;
        document.location = whereNow;
    };