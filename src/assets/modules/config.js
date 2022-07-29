export var api_base;

switch (location.host) {
  case "192.168.100.5":
    api_base = 'http://192.168.100.5/yamasha_live/api/user_panel/';
    break;
  case "127.0.0.1:5500":
    api_base = 'http://192.168.100.5/yamasha_live/api/user_panel/';
    break;
  case "127.0.0.1:5501":
    api_base = 'http://192.168.100.5/yamasha_live/api/user_panel/';
    break;

  default:

    api_base = 'https://api.yamasha.in/user_panel/';
}


