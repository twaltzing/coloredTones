function hasNumber(myString) {
    return /\d/.test(myString);
  }

function punctuationIndex(myString){  
    let punctSet = [",",".","#","!","¡","¿","$","%",";",":","！","，","。","、","？","?","：","；","“","”","「","」"];
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

const REGEX_CHINESE = /[\u4e00-\u9fff]|[\u3400-\u4dbf]|[\u{20000}-\u{2a6df}]|[\u{2a700}-\u{2b73f}]|[\u{2b740}-\u{2b81f}]|[\u{2b820}-\u{2ceaf}]|[\uf900-\ufaff]|[\u3300-\u33ff]|[\ufe30-\ufe4f]|[\uf900-\ufaff]|[\u{2f800}-\u{2fa1f}]/u;
const isChinese = (str) => REGEX_CHINESE.test(str);
    
/* if(isChinese("3")){
    console.log("That's Chinese!");
}
else {console.log("Nope!")}; */

/* var button =  document.getElementById("myBtn");
 
button.addEventListener("click", function(){
    color();
}); */


function color(){
/*let test="wo3 xi3huan1 xia1ren2chao3fan4!";*/
let test="他1 喜3欢1 虾1仁2炒3饭4吧5!"

/* let textIn = document.getElementById("textIn");
let test = textIn.value; */

//place words into an array - explode on spaces
let chunks = test.split(" ");




console.log("The array of words to be transformed is "+chunks);


 //for each thing between two spaces
for (i=0; i<chunks.length; i++){
    
        //for each character within those

        character=" ";
            //test if position is a Chinese character
        for (j=0; j<chunks[i].length; j++){
            if (isChinese(chunks[i][j])){
                character=chunks[i][j];
                
            

            //Store the tone number
            tone = chunks[i][j+1];
            console.log(character+ ": Tone "+ tone);


 
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
else {(tone="black");}


outputString += "<span style=\"color:" +toneColor+"\">"+character +"</span>"; 

}}
outputStuff.push(outputString);
outputString="";
}


let finalOutput=outputStuff.join(" ");
console.log(finalOutput);

}
let outputStuff=[];
let outputString="";
color();
