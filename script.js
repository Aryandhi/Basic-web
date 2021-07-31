
function Count(){
  let input = document.getElementById("input").value;
  let data=[];
  for(let i=1; i <= input; i++){
    data.push(i)    
  }
  document.getElementById("multiply").innerHTML = data.reduce((a,b) => a * b)
  document.getElementById("form").reset();
}

function View(){
  let input = document.getElementById("input").value;
  let convert = input.split(",");
  // document.getElementById("pattern").innerHTML = convert.length
  let mf = 1;
  let m =0;
  let item;
  for(let i=0; i <= convert.length; i++){
    for(let j=i; j <= convert.length; j++){
      m++;
      if(mf < m){
        mf=m;
        item = convert[i];
      }
    }
    m =0;
  }
  document.getElementById("char").innerHTML = item;
  document.getElementById("form").reset();
}

/*
https://www.malasngoding.com/manipulasi-string-pada-javascript/
https://www.makeuseof.com/find-the-most-frequently-occurring-character-in-a-string/
https://www.w3resource.com/javascript-exercises/javascript-array-exercise-8.php
 */

/*
https://stackoverflow.com/questions/19175063/multiply-all-elements-in-array?answertab=votes#tab-top
https://komputasi.wordpress.com/2008/11/09/php-mencari-huruf-paling-sering-muncul/
https://informatika.stei.itb.ac.id/~rinaldi.munir/Stmik/2014-2015/Makalah2015/Makalah_IF221_Strategi_Algoritma_2015_065.pdf
https://sambalandroid.wordpress.com/2016/11/06/sambalandroid/
*/