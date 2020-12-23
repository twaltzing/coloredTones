//This version works to color characters and leave English black, but doesn't handle punctuation. 

function hasNumber(myString) {
    return /\d/.test(myString);
  }

function punctuationIndex(myString){  
    var punctSet = [",",".","#","!","¡","¿","$","%",";",":","！","，","。","、","？","?","：","；","“","”","「","」"];
    let hasPunct = false;
    let punctIndex = "-1";
    for (i=0; i<punctSet.length; i++){
        hasPunct=false;
  hasPunct=myString.includes(punctSet[i]);
  if (hasPunct==true) {

      punctIndex=myString.indexOf(punctSet[i]);
  }
    }
    }

function isPunct() {
    
    return punctSet.test(myString);
}


const REGEX_CHINESE = /[\u4e00-\u9fff]|[\u3400-\u4dbf]|[\u{20000}-\u{2a6df}]|[\u{2a700}-\u{2b73f}]|[\u{2b740}-\u{2b81f}]|[\u{2b820}-\u{2ceaf}]|[\uf900-\ufaff]|[\u3300-\u33ff]|[\ufe30-\ufe4f]|[\uf900-\ufaff]|[\u{2f800}-\u{2fa1f}]/u;
const isChinese = (str) => REGEX_CHINESE.test(str);
    
const REGEX_NONPUNCT = /[\u4e00-\u9fff]|[\u3400-\u4dbf]|[\u{20000}-\u{2a6df}]|[\u{2a700}-\u{2b73f}]|[\u{2b740}-\u{2b81f}]|[\u{2b820}-\u{2ceaf}]|[\uf900-\ufaff]|[\u3300-\u33ff]|[\ufe30-\ufe4f]|[\uf900-\ufaff]|[\u{2f800}-\u{2fa1f}]|"。"|"，"/u;
const isNotPunct = (str) => REGEX_NONPUNCT.test(str);

/* var button =  document.getElementById("myBtn");
 
button.addEventListener("click", function(){
    color();
}); */




function color(){

    let test="Todd 跟1 Rod 是4 兄1弟4。";
    let chunks = test.split(" ");
    
/* let textIn = document.getElementById("textIn");
let test = textIn.value; */

//place words into an array - explode on spaces
/* let chunks = test.split(" "); */

 //for each phrase between two spaces
for (i=0; i<chunks.length; i++){
    
    //for each character within a phrase

    character=" ";
    //If the phrase-chunk has Chinese, do some stuff
    if (isChinese(chunks[i])){
            

            //test if set position is a Chinese character and handle as individual character within a Chinese word
        for (j=0; j<chunks[i].length; j++){
            if (isChinese(chunks[i][j])){
                character=chunks[i][j];
                
            //Store the tone number
            tone = chunks[i][j+1];
            //console.log(character+ ": Tone "+ tone);
            
            

            //Add the tone color spans
            var toneColor="";
            if (tone==1) {
                toneColor="blue";
            }
            if (tone==2) {
                toneColor="green";
            }    
            if (tone==3) {
                toneColor="black";
            }
            if (tone==5) {
                toneColor="gray";
            }
            if (tone==4) {
                toneColor="red";
            }



        //output each indvidual character with its tone span
        outputString += "<span style=\"color:" +toneColor+"\">"+character +"</span>"; 

        }
    }
}

/* deal with English words in the text */
if (!isChinese(chunks[i])){
    outputString += chunks[i];
}
    
/* append the colored character or word to the array */
outputStuff.push(outputString);
outputString="";
}

/* Output the final reconstructed colored text to console for copying*/
let finalOutput=outputStuff.join(" ");
console.log(finalOutput);
}
//RUN IT

var outputStuff= new Array(0);
var outputString="";
color();