function randomString(){
var chars = "12345678";
var string_length = 3;
var randomstring = '';
for (var i=0; i<string_length; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum,rnum+1);
    }
    document.randfrom.randomfield.value = randomstring;
}