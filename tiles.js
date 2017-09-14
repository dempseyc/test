// $(document).ready( function () {
// util
let rand = function(int) {
  return Math.floor(Math.random()*2);
}

// cache jquery things
let Hand = $('#hand');
let Board = $('#board');

// jq class components
let Space = function (size,xCoo,yCoo) {
  //size 20x20px
  this.height = size;
  this.width = size;
  this.coord = `${xCoo}-${yCoo}`;
  this.class = "space";
}

// jq dom elements

let appendGridOfSpaces = function (size,wide,high,target) {
  //size 20x20px
  for (i=0;i<high;i++){
    for (j=0;j<wide;j++){
      let space = new Space(size,j,i);
      let left = size*j;
      let top = size*i;
      let jq = $('<div class="space">');
      jq.css('left', left);
      jq.css('top', top);
      jq.css('width', size);
      jq.css('height', size);
      jq.css('border', '1px solid white');
      if (target===Hand) { jq.addClass('hand-space'); }
      jq.addClass(`${space.coord}`);
      target.append(jq);
    }
  }
}

appendGridOfSpaces(20,30,30,Board);
appendGridOfSpaces(20,4,1,Hand);

let Tile = function (t,r,b,l) {
  this.t = t;
  this.r = r;
  this.b = b;
  this.l = l;
  this.profile = `${t}${r}${b}${l}`;
  //profile is array of t,r,b,l
}

let HandSpaces = Hand.find('.hand-space');
console.log(HandSpaces);

let buildHand = function (number) {
  let tiles = [];
  for (i=0;i<number;i++) {
    let space = Hand.find($(`.${i}-0`)); // huh?
    let aTile = new Tile (rand(2),rand(2),rand(2),rand(2));
    tiles.push(aTile);
    let str = String(aTile.profile);
    let tile = $('<div>');
    tile.addClass('hand-tile');
    // img = $(`<img src="./images/${aTile.profile}`);
    // tile.append(img);
    tile.text(str);
    // console.log(str);
    // let handSpace = $('.hand-space')[i];
    // handSpace.append(tile);
    space.append(tile);
  }
}

buildHand(4);



// });
