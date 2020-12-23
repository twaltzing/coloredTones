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
console.log(myString+" has punctuation at position "+punctIndex);
    }
    




  let value="wo3";
  let string="wo3,";

  console.log(punctuationIndex(string));