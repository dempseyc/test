// style guide
// is actually really important
// "'_'"   displays    '_'
// '"_"'   displays    "_"
// written with default to double-quotes
// 3-2-1,2-2-3 //11 or 12 chars
// note
// the functions just make strings
// return of ultimate animojifunction = something like "  )!_!)  ";

let ANMJcont = $(".animoji-cont");  //DOM container for animoji span

// ANMJcont container parents a class
// $(".animoji")   in jquery which has a p tag
// which parents another class
// $(".animogi-cont")   which has a span tag

let com = "'_'";  //initialized animoji

//////     // //  /////  /////  /      /////  /////  //   /
//////     // //    /      /    /        /      /     ////
//////     /////    /    /////  /////  /////    /       /

let ranNum = function (min,max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}



let openingWrappers = [
"  ", //0 //blank
"( ", //1 //more emotion
"| ", //2 //bar
") ", //3 //interested
")(", //4 //hey
"z(", //5 //confused
"!(", //6 //like
"x(", //7 //dislike
"`(", //8 //wantto
"^(", //9 //opento
"0("  //10 //offbyone error
]

let closingWrappers = openingWrappers.map(function (strO){
  let str = "";
  let strArr = strO.split("");
  let strArr2 = strArr.map(function(str1){
    if (str1==="(") {
      str1 = ")";
      return str1;       //flip parens looses spaces somewhere
    } else if (str1===")"){
      str1 = "(";
      return str1;
    } else {
      return str1;
    }
  });
  strArr2.reverse();
  str = strArr2.join("");
  return str;
});

let leftEyes = [
"' ", //0 //blank
"- ", //1 //blink
"^ ", //2 //happy
"* ", //3 //amazed
" '", //4 //attention
"` ", //5 //think
"`O", //6 //surprise
"`*", //7 //excited
"-^", //8 //emotional
"`@", //9 //buggingout
"-0", //10 //off by one error
];

let rightEyes = leftEyes.map(function (strO){
  let str = "";
  let strArr = strO.split("");
  strArr.reverse();
  str = strArr.join("");
  return str;
});  //returns array of reversed strings

let center = [
"_",  //0 // mum
"o",  //1 // oh
",",  //2 // smurk
".",  //3 // kiss
"_",  //4 // smile
"=",  //5 // shh
"._",  //6 // waiting
"  ",  //7 // blank
"~ ",  //8 // thinking
"__",  //9 // big smile
",-", //10 // curious
",," //11 // teeth
];

// console.log(closingWrappers);  //these work
// console.log(rightEyes);        //these work


let createCom = function (com) {

  let eyes = ranNum(0,10);

  // make face
  com = leftEyes[eyes]+
    center[ranNum(0,10)]+
    rightEyes[eyes];

  //i can add layers like hair, clothes, etc.

  let wrappers = ranNum(0,10);

  com = openingWrappers[wrappers]+com+closingWrappers[wrappers];
  //console.log(com); //should be in an animoji retuning function
  return com;  //returning animojifunction

}  //endcreatecom

////
////  ANIMATION FUNCTIONS
////
////
//// vars for animation


let randomFaces = function () {

  setInterval(function() {
    com = createCom(com);
    console.log(com);
    ANMJcont.text(com);
  }, 100); //10fps

}


let bleepBloop = function () {

  let rans = [ranNum(1,4),ranNum(1,9)]; //pause and bleep

  function animFace (time) {
    com = createCom(com);
    //after a time, it starts animating

    let animate = setInterval(function() {
      com = createCom(com);
      console.log(com)
      ANMJcont.text(com);
    }, 100); //

    setTimeout(function() {
      clearInterval(animate);
      doPause(rans[0]*150);  //length of pause
    }, time); //animates for a sec then calls doPause

  }  ///animface

  function doPause(time) {
    setTimeout(function(){
      ANMJcont.text(com);
      animFace(rans[1]*150);  //length of of looping anim
    }, time);
  }

  animFace(rans[1]*150);  //length of init anim

}


////SCRIPTED ANIMATION
  //console.log("frame "+frame);
  // if (frame<numFrames) {
  //   frame++;
  // } else {
  //   frame = 0;
  // }
////

