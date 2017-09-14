console.log("uses jquery");

//jquery
  a = $('body');
  x = $('ul');
  a.append(x);

//vanilla
  b = document.getElementByTagName('body');
  y = document.createElement(ul);
  b.appendChild(y);

console.log(a);
console.log(b);




























// $(function() {
//   console.log("ready...");

//   $("body").append("<mytag>");
//   $("body").append("<p>");
//   $("body").append("<p>");
//   $("body").append("<p>");
//   $("body").append("<p>");
//   $("body").append("<p>");
//   $("body").append("<p>");

//   let i = 0;
//   $("p").each(function() {
//     i++;
//     this.innerText = "Paragraph: "+i;
//   })

//   $("p").first();
//   $("p").last();
//   $("p").last().hide();
// // .show
// // .remove

//   let $x = $("p").first()
//   $x.clone();
//   $x.remove();
//   $("body").append($x);
//   $("p").last().css({"cursor":"pointer",
//                         "color":"blue"});

//   $("p").first().attr("src","bob.jpg");
//   $("p").first().attr("data_secret_password","lskjeivn");

// });
