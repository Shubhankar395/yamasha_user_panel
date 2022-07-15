// if (location.host == "192.168.100.5") {
//   var api_base = "http://192.168.100.5/yamasha_v2/api/user_panel/";
// } else {
//   var api_base = "https://api.yamasha.in/user_panel/";
//   // var api_base ='https://pxop-php.herokuapp.com/user_panel/'
//   // var api_base ='https://yamasha.in/api/user_panel/'
// }
switch(location.host){
    case "192.168.100.5":
        var api_base = "http://192.168.100.5/yamasha_v2/api/user_panel/";
        break;
    case "127.0.0.1:5500":
        var api_base = "http://192.168.100.5/yamasha_v2/api/user_panel/";
        break;
    case "127.0.0.1:5501":
        var api_base = "http://192.168.100.5/yamasha_v2/api/user_panel/";
        break;
    default:
        var api_base = "https://api.yamasha.in/user_panel/";
}

//# sourceMappingURL=watch_list.9558b630.js.map
