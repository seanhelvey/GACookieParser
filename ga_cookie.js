var regex = /.*\.(.*)/g;
var cookie_list = document.cookie.split(";");
for (var i=0; i<cookie_list.length; i++) { 
  var split_cookies=cookie_list[i].split("="); 
  if(split_cookies[0]==" __utmz") {
    var juicy_cookie=cookie_list[i].split(regex)[1]; 
    var juicy_cookie_list=juicy_cookie.split("|"); 
    for (var j=0; j<juicy_cookie_list.length; j++) {
      var split_juicy_cookie = juicy_cookie_list[j].split("="); 
      console.log(split_juicy_cookie[0] + "=" + split_juicy_cookie[1]);
    }
  }
}