// define a function that detectword that takes an argument 
//for loop letarte through each letter 

// var hidden word = ""

// for every letter 
// check if the letter is upper case or lower case 
// convert the letter to upper case and compare it with the orginal 
// use the toUpperCase() method

// if equal then it is upper case skip

// else save the value on the hidddenword variable

//Return the hidden word varible;

function detectword(a) {
    var hidddenword = "";
    for (i = 0; i < a.length; i++) {
        var singleletter = a.charAt(i);
        if (singleletter == singleletter.tolowercase)
            console.log(singleletter);

    }


}
detectword("UcNFHDaYDtDDKKSWDs");