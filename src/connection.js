//Agregar Localhost, métodos de envío y obtención de datos como confiables para Salesforce
var method = "POST";
var url = "http://localhost:3000";
var xhr = new XMLHttpRequest();
xhr.open(method, url);
xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
xhr.setRequestHeader("Access-Control-Allow-Origin", "http://localhost:3000")
xhr.setRequestHeader("Access-Control-Allow-Methods", "GET, POST");
xhr.setRequestHeader("Access-Control-Allow-Headers", "Content-Type");
xhr.send();
/*
function conexionSF(){
  var jsforce = require('jsforce');
  var conn = new jsforce.Connection(
    {
      oauth2 : { //Credenciales de Connected App creada en SF Developer
        clientId : '3MVG9p1Q1BCe9GmB09Kun63r6Q4ahYjnr3wE9kJcL5PxzFJYJdzHLMk11vsmHIfLKZBuhSf.ffO9SZfE6IXqr',
        clientSecret : '7F3E9029AD67A3C0695798E16640CBECAD13A2621797441CB57429D0A88EC013',
        redirectUri : 'https://francistaxservice-dev-ed.my.salesforce/services/oauth2/callback',
        loginUrl: 'https://francistaxservice-dev-ed.my.salesforce.com',
      },
      instanceUrl: 'https://francistaxservice-dev-ed.my.salesforce.com',
      accessToken: '00D5f000006MrVf!AQMAQCgmRF4EM_zSa_nTukKno1oJvfmz8S6C1WOuKD725G.SsBhyF6vFZhtma1Bg6R1cbLVaCo6VJvDCdoDWAuzJczdLhTax',
      //curl -d "username=marioqbo@francistaxservice.com" -d "password=DashFLTowe16@1dn2GJuWJhkKKuIBwvapBgABkk" -d "client_id=3MVG9p1Q1BCe9GmB09Kun63r6Q4ahYjnr3wE9kJcL5PxzFJYJdzHLMk11vsmHIfLKZBuhSf.ffO9SZfE6IXqr" -d "client_secret=7F3E9029AD67A3C0695798E16640CBECAD13A2621797441CB57429D0A88EC013" -v -d "grant_type=password" https://francistaxservice-dev-ed.my.salesforce.com/services/oauth2/token
    }
  );
  return conn;
}*/
function conexionSF(){
  var jsforce = require('jsforce');
  var conn = new jsforce.Connection(
    {
      oauth2 : { //Credenciales de Connected App creada en SF Developer
        clientId : '3MVG9_XwsqeYoueI9lW80PulX9gVJAlYn3KNczBnsayfj7xy0u3acv2kRsekXSxvYUjpZuGk1Okc5jkuU.hQf',
        clientSecret : '915737BCC01C5695B6C49FD0CEBBDC51157CFF92970EA9C2BAA6874542CCDA56',
        redirectUri : 'https://francistax.my.salesforce.com/services/oauth2/callback',
        loginUrl: 'https://francistax.my.salesforce.com',
      },
      instanceUrl: 'https://francistax.my.salesforce.com',
      accessToken: '00D3k000000t52V!AQEAQD3O6rcxpKK8KhnVPdBtJVlqRfPyR9.XM1_aSoTvOfXjqJv79VMw1czQHXsdrHPU7u408b2UXUVhIMzF9dN9DdM6hR7g',
      //curl -d "username=eautomationdep@francistaxservice.com" -d "password=DashFLTowe16" -d "client_id=3MVG9_XwsqeYoueI9lW80PulX9gVJAlYn3KNczBnsayfj7xy0u3acv2kRsekXSxvYUjpZuGk1Okc5jkuU.hQf" -d "client_secret=915737BCC01C5695B6C49FD0CEBBDC51157CFF92970EA9C2BAA6874542CCDA56" -v -d "grant_type=password" https://francistax.my.salesforce.com/services/oauth2/token

    }
  );
  return conn;
}

export default conexionSF;