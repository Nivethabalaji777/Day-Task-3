var json = [{
    "id" : "Nivetha", 
    "msg"   : "All the Best",
    "mail": "nivethabharathi77@gmail.com"
},
{
    "id" : "Balaji", 
    "msg"   : "Best of Luck",
    "mail": "balajinagarajan@gmail.com"
}];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.mail);

}
//for Each
json.forEach(function(obj) { console.log(obj.msg); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].id);
  //console.log(json[key].msg);
 
}
}
//for Of
let text = "";
for (let x of json[key].id) {
 text += x; 
}
 console.log(text);