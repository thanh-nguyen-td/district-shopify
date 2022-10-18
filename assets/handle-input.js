function deleteWhitespaceInputLengthZero (classOrIdName){
        var valueEmail = document.querySelector(classOrIdName).value;
        if(valueEmail.length == 0){
            valueEmail = valueEmail.trim();
            document.querySelector(classOrIdName).value = valueEmail
        }
};