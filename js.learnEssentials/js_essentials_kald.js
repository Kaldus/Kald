
    function theNumbers() {
        // A prompt that will popup to ask user what number they want to start with.
        var x = prompt('What number would you like to use?');

        /* This variable we choose to call "detect"
        simply declares it and its equal =null or nothing or ""
        for now until we want to use it later */
        var detect = "";

        /* We declare y equal to 0 here just because we want to, we will use
        This is not necessary, but, it is best practice.
        We will be using y as the starting point for a loop later. */
        var y = 0;

        /* This line simply attaches the variable we
        are choosing to call "a" --> to any DOM element
        with an (ID="countTester"). (DOM is a fancy acronym
        referring to HTML Document Object Model, which really
        just means the elements in an HTML page) */
        var a = document.getElementById("countTester");

        /* The following while loop uses whatever value of x
        the user entered from the inital prompt (first line after the beginning of this function)
        and increments x by 1 (x++) UNTIL it counts to 10 using the y (y++).

        Remember we set y=0 earlier? We didn't really need to as
        that is the default. As mentioned before, however, it is best practice.
        This helps us organize before we start calculating things.
        Unlike us, CPUs are usually trained to count from 0 as a valid value.
        They don't normally start with 1 as we do;
        we usually learn to count with our fingers.

        So, we only need to go up to 9 in this while loop from 0 in order to get 10 counts.
        Remember we have set the variable y=0 here.
        IF we had set y=1 earlier, then we would be TELLING the CPU to
        start count from 1 in this calculation. We would then have to use the value of 10
        as the comparitive number (y <= 10) in this while argument if we want to count to 10. */
        while (y <= 9) {
            z = x + " and " + (x + y) + " are the two numbers. X is " + x + "<br>";
            y++;
            x++;
        }

        /* The .innerHTML adds the text from the variable z
        that we've just declared above inside that while loop -->
        to the DOM #countTester which we set as to the variable "a" above.
        *NOTICE: We don't need "var ". It is best practice to use var, however.
        Not using var could potentially cause conflicts in the more complex functions.
        However, we will take the chance with this :) */
        a.innerHTML = z;

        // Add a new p (paragraph) element to the DOM, changing the page dynamically...
        var textAdd = document.createElement("p");

        // ... then this line adds the text to that p element that we just added.
        textAdd.innerHTML = "Is x > 250? ";

        /* Here we're making two variables for the computer to choose from
        based on value of x that the user entered from the prompt
        + the amount that the above while loop added to the value of x.
        (x+10, unless you decided to change some numbers) */
        var wordsTrue = document.createTextNode("It's true.");
        var wordsFalse = document.createTextNode("It's untrue.");

        /* This one is a little tricky if you're not familiar with the term "Boolean".
        What Boolean does is sets either a value of "true" or false",
        and, there are a few ways to set Boolean to either true or false in Javascript.

        If we set it to Boolean(1), it's true. If we set Boolean(true), this is true.
        Pretty much anything else within the () will set Boolean equal to false.
        If we say Boolean(false), it is false. If we leave Boolean empty like Boolean(), this also sets it as false.
        Even if we enter "TRUE" or "True" it is also FALSE as Javascript syntax is also case sensitive.
        */
        if (x >= 250) { var detect = Boolean(1) }
        else { var detect = Boolean(0) };

        /* below we use the "==" in the if statement, this means equal to in JavaScript.
        If we only use a simple "=" here it will not work as desired.
        Since we set the Booleans in the ^above IF statement, we know if detect is true or not.
        It is because we are using this as in argument in this case for the if statement here.
        The syntax has to be different to distinguish the meaning, instead of JS assuming we are trying to set a new variable.
        We are not setting a new variable here, but, we are setting the argument(or, condition) for the IF statement.
        Lets just say Javascript is not smart as we can be.
        */
        if (detect == true) {
            textAdd.appendChild(wordsTrue)
        }
        else { textAdd.appendChild(wordsFalse); }
        document.body.appendChild(textAdd);
        /* Finally we use the .appendChild() method here. It is one of the coolest thing we've used in the function.
        This adds a text string to the p element that we created earlier, when we created the textAdd variable.
        So, we created the paragraph element via var textAdd dynamically using JS, and, now we've added "children"
        using .appendChild(TextHere); passing text strings to that element in the DOM.
        The if statement of course chooses which one based on the value of x in the function. */
    };