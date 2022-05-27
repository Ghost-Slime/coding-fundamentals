function missingLetter(str) {  
    const letter="abcdefghijklmnopqrstuvwxyz";
    for(let p = 0; p < letter.length;p++){
        if(str[0]==letter[p]){
            /*console.log(str[0])
            console.log(letter[p]) */
            var c = p
            for(let i = 0; i < str.length; i++){
                if(str[i] != letter[c]){
                   /* console.log(str[i])
                    console.log(letter[c]) */
                    var getMissingLetter = letter[c];
                    {break;}
                }
                else{
                    getMissingLetter="undefined"
                    c++;
                }
            }
        }
    }
    return console.log("The missing letter in", str , "is" , getMissingLetter);
}
missingLetter("abce");
missingLetter("abcdefghjklmno");
missingLetter("stvwx");
missingLetter("bcdf");
missingLetter("abcdefghijklmnopqrstuvwxyz");