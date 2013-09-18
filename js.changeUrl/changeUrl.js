function toPage() { // start the function called toPage
    var whereNow = document.location.href; // pulls the current location of browser
    var list = document.getElementById('dlist'); // finds the dropdown list by its ID value
    var selected = list.options[list.selectedIndex].value; // pulls the value from the selected dropdown option
    var whereTo = whereNow; // here we make the variable whereTo take the value of whereNow in order to manipulate whereTo without having to change the value of whereNow, at least not yet. ^_^
    var checkCat = whereTo.match('cat2'); // check the url for cat2
    if (checkCat !== null) { // if the check for cat2 is not null (which means the current URL contains cat2) ...
        var fixTo = whereTo.replace('index.htm', '').replace('/cat2/', '/cat/'); // find and replace index file with null, and replace 'cat2' dir with just 'cat' dir
    } else fixTo = whereTo.replace('index.htm', ''); // if not (else), simply get rid of index filename if it is found, no need to worry about 'cat2' now
    var findLast = fixTo.charAt(length - 1); // check the last character of the URL for forward slash '/'
    if (findLast != '/') { // if the last character of findLast is not a fwd slash
        whereNow = fixTo + selected + '/index.htm'; // take the value of the adjusted fixTo URL and add the value pulled from the dropdown
    } else whereNow = fixTo + '/' + selected + '/index.htm'; // else, if we found a slash at the end, add one in between the base URL and the value pulled from the dropdown value
    document.location = whereNow; // change the browser location to the value of whereNow
} //close this function