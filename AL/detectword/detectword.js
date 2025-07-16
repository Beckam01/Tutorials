// define a function that detect  word that takes argument 
// for loop to iterate  through each latter

// for every latter 
// chech if the latter is upper case or lower case 
// convert the latter to upper case and comare it with the original 


// use the upppercase() method 
//  if it is equal then it is upppercase 
//      skip

// else 

// save the value in the hiddenword varibale 

// return the hiddenword


function detectword(a) {
    var hiddenword = "";

    for (let i = 0; i < a.length; i++) {
        var singleLetter = a.charAt(i);
        if (singleLetter === singleLetter.toLowerCase() && singleLetter !== singleLetter.toUpperCase()) {
            hiddenword += singleLetter;
        }
    }

    console.log(hiddenword); // Log the final result
    return hiddenword;
}

detectword("UcUNFaGTDJDUNDtJHD"); // Output: "cat"
detectword("GDWWQbUUEeWcGkDaDGMm");


