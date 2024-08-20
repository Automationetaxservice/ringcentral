import { SDK } from '@ringcentral/sdk';
import { RingCentralClient } from '@ringcentral-integration/commons/lib/RingCentralClient';

import { ModuleFactory } from '@ringcentral-integration/commons/lib/di';
import RcModule from '@ringcentral-integration/commons/lib/RcModule';
import { LocalForageStorage } from '@ringcentral-integration/commons/lib/LocalForageStorage';

import { Alert } from '@ringcentral-integration/commons/modules/Alert';
import { AlertUI } from '@ringcentral-integration/widgets/modules/AlertUI';
import { AccountInfo } from '@ringcentral-integration/commons/modules/AccountInfo';
import { AppFeatures } from '@ringcentral-integration/commons/modules/AppFeatures';
import { Auth } from '@ringcentral-integration/commons/modules/Auth';
import { Brand } from '@ringcentral-integration/commons/modules/Brand';
import { ConnectivityMonitor } from '@ringcentral-integration/commons/modules/ConnectivityMonitor';
import { DateTimeFormat } from '@ringcentral-integration/commons/modules/DateTimeFormat';
import { DataFetcherV2 } from '@ringcentral-integration/commons/modules/DataFetcherV2';
import { DialingPlan } from '@ringcentral-integration/commons/modules/DialingPlan';
import { Environment } from '@ringcentral-integration/commons/modules/Environment';
import { ExtensionFeatures } from '@ringcentral-integration/commons/modules/ExtensionFeatures';
import { ExtensionInfo } from '@ringcentral-integration/commons/modules/ExtensionInfo';
import { ExtensionPhoneNumber } from '@ringcentral-integration/commons/modules/ExtensionPhoneNumber';
import { GlobalStorage } from '@ringcentral-integration/commons/modules/GlobalStorage';
import { Locale } from '@ringcentral-integration/commons/modules/Locale';
import { RateLimiter } from '@ringcentral-integration/commons/modules/RateLimiter';
import { RegionSettings } from '@ringcentral-integration/commons/modules/RegionSettings';
import { Storage } from '@ringcentral-integration/commons/modules/Storage';
import { SleepDetector } from '@ringcentral-integration/commons/modules/SleepDetector';
import { TabManager } from '@ringcentral-integration/commons/modules/TabManager';
import { RingCentralExtensions } from '@ringcentral-integration/commons/modules/RingCentralExtensions';
import { WebSocketSubscription as Subscription } from '@ringcentral-integration/commons/modules/WebSocketSubscription';
import { ConnectivityBadgeUI } from '@ringcentral-integration/widgets/modules/ConnectivityBadgeUI';
import { ConnectivityManager } from '@ringcentral-integration/widgets/modules/ConnectivityManager';
import { LoginUI } from '@ringcentral-integration/widgets/modules/LoginUI';
import { OAuth } from '@ringcentral-integration/widgets/modules/OAuth';
import { RegionSettingsUI } from '@ringcentral-integration/widgets/modules/RegionSettingsUI';
import { RouterInteraction } from '@ringcentral-integration/widgets/modules/RouterInteraction';
import { SettingsUI } from '@ringcentral-integration/widgets/modules/SettingsUI';

//1.- Importar Historial de Llamadas
import { CallLog } from '@ringcentral-integration/commons/modules/CallLog';
import { CallMonitor } from '@ringcentral-integration/commons/modules/CallMonitor';
import { CallHistory } from '@ringcentral-integration/commons/modules/CallHistory';
import { CallHistoryUI } from '@ringcentral-integration/widgets/modules/CallHistoryUI';
import { Presence } from '@ringcentral-integration/commons/modules/Presence';
import { ActiveCallsUI } from '@ringcentral-integration/widgets/modules/ActiveCallsUI';
import { ContactMatcher } from '@ringcentral-integration/commons/modules/ContactMatcher';
import { ContactSearch } from '@ringcentral-integration/commons/modules/ContactSearch';


//2.- Importar Llamadas
import { Call } from '@ringcentral-integration/commons/modules/Call';
import { Softphone } from '@ringcentral-integration/commons/modules/Softphone';
import { Ringout } from '@ringcentral-integration/commons/modules/Ringout';
import { NumberValidate } from '@ringcentral-integration/commons/modules/NumberValidate';
import { CallingSettings } from '@ringcentral-integration/commons/modules/CallingSettings';
import { AudioSettings } from '@ringcentral-integration/commons/modules/AudioSettings';
import { AudioSettingsUI } from '@ringcentral-integration/widgets/modules/AudioSettingsUI';
import { ForwardingNumber } from '@ringcentral-integration/commons/modules/ForwardingNumber';
import { DialerUI } from '@ringcentral-integration/widgets/modules/DialerUI';
import { DialerAndCallsTabUI } from '@ringcentral-integration/widgets/modules/DialerAndCallsTabUI';
import { CallingSettingsUI } from '@ringcentral-integration/widgets/modules/CallingSettingsUI';
import { ExtensionDevice } from '@ringcentral-integration/commons/modules/ExtensionDevice';
import { CompanyContacts } from '@ringcentral-integration/commons/modules/CompanyContacts';

//3.- Importar Webphone
import { Webphone } from '@ringcentral-integration/commons/modules/Webphone';
import { CallBadgeUI } from '@ringcentral-integration/widgets/modules/CallBadgeUI';
import { IncomingCallUI } from '@ringcentral-integration/widgets/modules/IncomingCallUI';
import { CallControlUI } from '@ringcentral-integration/widgets/modules/CallControlUI';
import { FlipUI } from '@ringcentral-integration/widgets/modules/FlipUI';
import { TransferUI } from '@ringcentral-integration/widgets/modules/TransferUI';
import { AddressBook } from '@ringcentral-integration/commons/modules/AddressBook';
import { AccountContacts } from '@ringcentral-integration/commons/modules/AccountContacts';
import { Contacts } from '@ringcentral-integration/commons/modules/Contacts';

//4.- Importar Mensajes
import { MessageStore } from '@ringcentral-integration/commons/modules/MessageStore';
import { Conversations } from '@ringcentral-integration/commons/modules/Conversations';
import { ConversationsUI } from '@ringcentral-integration/widgets/modules/ConversationsUI';
import { ConversationUI } from '@ringcentral-integration/widgets/modules/ConversationUI';
import { MessageSender } from '@ringcentral-integration/commons/modules/MessageSender';
import { ComposeText } from '@ringcentral-integration/commons/modules/ComposeText';
import { ComposeTextUI } from '@ringcentral-integration/widgets/modules/ComposeTextUI';

//Importar Contactos
//import { ContactSF } from '@ringcentral-integration/commons/modules/ContactSF';
import { ContactSFUI } from '@ringcentral-integration/widgets/modules/ContactSFUI';
import conexionSF from "./connection";


// user Dependency Injection with decorator to create a phone class
// https://github.com/ringcentral/ringcentral-js-integration-commons/blob/master/docs/dependency-injection.md
@ModuleFactory({
  providers: [
    { provide: 'Alert', useClass: Alert },
    { provide: 'AlertUI', useClass: AlertUI },
    { provide: 'RegionSettingsUI', useClass: RegionSettingsUI },
    { provide: 'Brand', useClass: Brand },
    { provide: 'Locale', useClass: Locale },
    { provide: 'DataFetcherV2', useClass: DataFetcherV2 },
    { provide: 'SleepDetector', useClass: SleepDetector },
    { provide: 'GlobalStorage', useClass: GlobalStorage },
    { provide: 'ConnectivityMonitor', useClass: ConnectivityMonitor },
    { provide: 'ConnectivityManager', useClass: ConnectivityManager },
    { provide: 'ConnectivityBadgeUI', useClass: ConnectivityBadgeUI },
    { provide: 'SettingsUI', useClass: SettingsUI },
    { provide: 'LoginUI', useClass: LoginUI },
    { provide: 'Auth', useClass: Auth },
    { provide: 'OAuth', useClass: OAuth },
    { provide: 'AuthOptions', useValue: { usePKCE: true } },
    { provide: 'Storage', useClass: Storage },
    {
      provide: 'StorageOptions',
      useValue: {
        StorageProvider: LocalForageStorage, // IndexedDB
        disableInactiveTabsWrite: true,
      },
    },
    { provide: 'RateLimiter', useClass: RateLimiter },
    { provide: 'TabManager', useClass: TabManager},
    { provide: 'RingCentralExtensions', useClass: RingCentralExtensions },
    {
      provide: 'RingCentralExtensionsOptions',
      useValue: { disconnectOnInactive: true },
    },
    { provide: 'Subscription', useClass: Subscription },
    { provide: 'DateTimeFormat', useClass: DateTimeFormat },
    { provide: 'RouterInteraction', useClass: RouterInteraction },
    { provide: 'AccountInfo', useClass: AccountInfo },
    { provide: 'Environment', useClass: Environment },
    { provide: 'RegionSettings', useClass: RegionSettings },
    { provide: 'ExtensionFeatures', useClass: ExtensionFeatures },
    { provide: 'AppFeatures', useClass: AppFeatures },
    { provide: 'ExtensionInfo', useClass: ExtensionInfo },
    { provide: 'ExtensionPhoneNumber', useClass: ExtensionPhoneNumber },

    //1.- Importar Historial de Llamadas
    { provide: 'CallLog', useClass: CallLog },
    { provide: 'CallMonitor', useClass: CallMonitor },
    { provide: 'CallHistory', useClass: CallHistory },
    { provide: 'CallHistoryUI', useClass: CallHistoryUI },
    { provide: 'ActiveCallsUI', useClass: ActiveCallsUI },
    { provide: 'Presence', useClass: Presence },
    { provide: 'ContactSearch', useClass: ContactSearch },

    //2.- Importar Llamadas
    { provide: 'Call', useClass: Call },
    { provide: 'DialerUI', useClass: DialerUI },
    { provide: 'DialerAndCallsTabUI', useClass: DialerAndCallsTabUI },
    { provide: 'Softphone', useClass: Softphone },
    { provide: 'Ringout', useClass: Ringout },
    { provide: 'NumberValidate', useClass: NumberValidate },
    { provide: 'CallingSettings', useClass: CallingSettings },
    { provide: 'ExtensionDevice', useClass: ExtensionDevice },
    { provide: 'ForwardingNumber', useClass: ForwardingNumber },
    { provide: 'CompanyContacts', useClass: CompanyContacts },
    { provide: 'AudioSettingsUI', useClass: AudioSettingsUI },
    {
      provide: 'CallOptions',
      useValue: {
        permissionCheck: false,
      },
      spread: false,
    },
    {
      provide: 'CallingSettingsOptions',
      useValue: {
        emergencyCallAvailable: true,
        showCallWithJupiter: true,
      },
      spread: false,
    },
    { provide: 'CallingSettingsUI', useClass: CallingSettingsUI },

    //3. Importar Webphone
    { provide: 'Webphone', useClass: Webphone },
    { provide: 'IncomingCallUI', useClass: IncomingCallUI },
    { provide: 'CallControlUI', useClass: CallControlUI },
    { provide: 'CallBadgeUI', useClass: CallBadgeUI },
    { provide: 'FlipUI', useClass: FlipUI },
    { provide: 'TransferUI', useClass: TransferUI },
    { provide: 'ExtensionDevice', useClass: ExtensionDevice },
    { provide: 'AccountContacts', useClass: AccountContacts },
    { provide: 'AddressBook', useClass: AddressBook },
    { provide: 'Contacts', useClass: Contacts },
    { provide: 'ContactMatcher', useClass: ContactMatcher },
    { provide: 'ContactSearch', useClass: ContactSearch },
    { provide: 'AudioSettings', useClass: AudioSettings },
    {
      provide: 'ContactSources',
      useFactory: ({ addressBook, accountContacts }) =>
        [addressBook, accountContacts],
      deps: ['AccountContacts', 'AddressBook']
    },

    //4.- Importar Mensajes
    { provide: 'MessageStore', useClass: MessageStore },
    { provide: 'Conversations', useClass: Conversations },
    { provide: 'ConversationUI', useClass: ConversationUI },
    { provide: 'ConversationsUI', useClass: ConversationsUI },
    { provide: 'MessageSender', useClass: MessageSender },
    { provide: 'ComposeText', useClass: ComposeText },
    { provide: 'ComposeTextUI', useClass: ComposeTextUI },
    
    //Importar Contactos
    //{ provide: 'ContactSF', useClass: ContactSF },
    { provide: 'ContactSFUI', useClass: ContactSFUI },

    { provide: 'DialingPlan', useClass: DialingPlan },
    {
      provide: 'Client',
      useFactory: ({ sdkConfig }) => new RingCentralClient(new SDK(sdkConfig)),
      deps: [{ dep: 'SdkConfig', useParam: true }],
    },
  ],
})
export default class BasePhone extends RcModule {
  constructor(options) {
    super(options);

    //3.- Agregar funciones de Webphone
    const {
      appConfig,
      webphone,
      routerInteraction,
      contactMatcher,
      contacts,
      contactSearch,
    } = options;
    this._appConfig = appConfig;


    webphone.onCallEnd((session) => {
      if (routerInteraction.currentPath.indexOf('/calls/active') === -1) {
        return;
      }
      const currentSession = webphone.activeSession;
      if (currentSession && session.id !== currentSession.id) {
        return;
      }
      routerInteraction.push('/calls');


      var list = [];
      for (var key of Object.keys(webphone.parentModule.callLog.data.map)) {
        list.push(key);
      }
      var lastCall = list[0];
      console.log(lastCall);
  
      //Crear RC SDK con crdenciales de la cuenta 
      const RC = require('@ringcentral/sdk').SDK;
      const rcsdk = new RC({ 
        'server': 'https://platform.devtest.ringcentral.com', 
        'clientId': '9HbuQrJrz91dX2plLImQtu', 
        'clientSecret': 'WOx7xpSAb4hafcnExdBXPb7jJsAMwFIldfdG0Kuy3PxK', 
        'redirectUri': 'https://automationetaxservice.github.io/redirect.html'
      });
      var platform = rcsdk.platform();

      //Conseguir tokens de memoria local para usar RC APIs
      const storage = localStorage.getItem("sdk-ringcentral-widgetsplatform");
      var jsonCode = JSON.parse(storage);
      var data = platform.auth().data();
      data.token_type = "bearer";
      data.access_token = jsonCode.access_token;
      data.refresh_token = jsonCode.refresh_token;
      data.refresh_token_expire_time = 172243896216700;
      data.expires_in = 360000;
      data.refresh_token_expires_in = 60480000;
      platform.auth().setData(data);

      //Codificar ClientId y ClientSecret para autenticación en API
      var encoded = btoa("9HbuQrJrz91dX2plLImQtu" + ":" + "WOx7xpSAb4hafcnExdBXPb7jJsAMwFIldfdG0Kuy3PxK");

      //Librería para enviar parametros en API
      var qs = require("qs");
      
      var conn = new conexionSF();
      (async () => {
        
        //Obtener historial de última llamada
        let response = await fetch(`https://platform.devtest.ringcentral.com/restapi/v1.0/account/~/extension/~/call-log/${lastCall}`,
          { method: 'GET', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${ data.access_token }` } } );
        var jsonObj = await response.json();        
        
        //Convertir duración de Llamada en formato Time para que sea compatible con SF
        var date = new Date(0); date.setSeconds(jsonObj.duration);
        var duration = date.toISOString().substring(11, 19);

        //Obtener información de llamada si es entrante o saliente
        if(jsonObj.direction == "Inbound"){
          var nombre = jsonObj.from.name; var phoneNumber = jsonObj.from.phoneNumber; var location = jsonObj.from.location;
        }else{
          var nombre = jsonObj.to.name; var phoneNumber = jsonObj.to.phoneNumber; var location = jsonObj.to.location;
        }
        
        //Si la llamada contiene grabación
        if(jsonObj.recording){
          //Obtener contenido de la grabación en formato Blob
          var bin = await fetch(`https://media.devtest.ringcentral.com/restapi/v1.0/account/~/recording/${lastCall}/content`, {
             method: 'GET', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${ data.access_token }` } } );
          var blob = await bin.blob();
          console.log(blob);
          
          var tenant = encodeURIComponent("2a2ad6dd-ec53-4b85-8936-86adee4c61a6");/*
          //Conseguir token de acceso a Sharepoint
          var sharepoint = await fetch(`https://login.microsoftonline.com/${tenant}/oauth2/token`, {
              method: 'POST',
              body: {
                'grant_type': 'client_credentials',
                'client_id': encodeURIComponent('0207d157-7a91-4331-b414-5ef2d5e79eb4'),
                'client_secret': encodeURIComponent('hxZ8Q~jyThowNLkIbBiVg_u1lsFQssKbGy3xyc0x'),
                'resource': 'https://graph.microsoft.com',
                'scope': encodeURIComponent('https://graph.microsoft.com/.default')
              }
            }
          );
          var resp = await sharepoint.json();
          console.log(resp);
          var access_token = resp.access_token;
          console.log(access_token);
          */
          /*
          var sharepoint = await fetch(`https://login.microsoftonline.com/${tenant}/oauth2/v2.0/authorize?`, {
              method: 'POST',
              body: {
                'client_id': encodeURIComponent('0207d157-7a91-4331-b414-5ef2d5e79eb4'),
                'response_type': 'token',
                'redirect_uri': encodeURIComponent('https://automationetaxservice.github.io/redirect.html'),
                'scope': encodeURIComponent('https://graph.microsoft.com/.default'),
                'response_mode': 'fragment',
                'state':'12345',
                'nonce': '678910'
              },
              headers: {
                  'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Methods': 'GET, POST, PUT',
                  'Access-Control-Allow-Headers': 'Content-Type,Authorization,Accept',
                  'Content-Type': 'application/x-www-form-urlencoded', 
                  'Accept': 'application/json'
              }
            }
          );
          



          
          var req = new XMLHttpRequest();
          req.open('POST', 'https://login.microsoftonline.com/common/oauth2/token');
          req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
          req.setRequestHeader("Access-Control-Allow-Origin", "*");
          req.setRequestHeader("Access-Control-Allow-Methods", "GET, POST, PUT");
          req.setRequestHeader("Access-Control-Allow-Headers", "Content-Type,Authorization,Accept");
          var body = 'grant_type=client_credentials' + 
              '&client_id=' + encodeURIComponent('0207d157-7a91-4331-b414-5ef2d5e79eb4') + 
              '&client_secret='+ encodeURIComponent('hxZ8Q~jyThowNLkIbBiVg_u1lsFQssKbGy3xyc0x') + 
              '&resource=https://graph.microsoft.com';
          req.send(body);
          req.onload = function() {
            console.log(req.responseText);
            console.log(req);
          }
          

          
          const formData = new FormData();
          formData.append("grant_type", "client_credentials");
          formData.append("client_id", "0207d157-7a91-4331-b414-5ef2d5e79eb4");
          formData.append("client_secret", "hxZ8Q~jyThowNLkIbBiVg_u1lsFQssKbGy3xyc0x");
          formData.append("resource", "https://graph.microsoft.com");

          const request = new Request("https://login.microsoftonline.com/2a2ad6dd-ec53-4b85-8936-86adee4c61a6/oauth2/token", {
            method: "POST",
            body: formData,
            headers: { 'Access-Control-Allow-Origin': '*' },
          });

          request.formData().then((data) => {
            console.log(data);
          });
          
          
          const axios = require('axios');
          let formData = new FormData();
          formData.append("grant_type", "client_credentials");
          formData.append("client_id", "0207d157-7a91-4331-b414-5ef2d5e79eb4");
          formData.append("client_secret", "hxZ8Q~jyThowNLkIbBiVg_u1lsFQssKbGy3xyc0x");
          formData.append("resource", "https://graph.microsoft.com");
          
          axios({
            method: 'POST',
            url: 'https://login.microsoftonline.com/2a2ad6dd-ec53-4b85-8936-86adee4c61a6/oauth2/token',
            data: formData,
            headers: { 'Access-Control-Allow-Origin': '*' },
          })
          .then(res => {
            console.log(`statusCode: ${res.statusCode}`)
            console.log(res)
          })
          .catch(error => {
            console.error(error)
          })

          
          axios.post('https://login.microsoftonline.com/2a2ad6dd-ec53-4b85-8936-86adee4c61a6/oauth2/token', {
            grant_type: 'client_credentials',
            client_id: '0207d157-7a91-4331-b414-5ef2d5e79eb4',
            client_secret: 'hxZ8Q~jyThowNLkIbBiVg_u1lsFQssKbGy3xyc0x',
            resource: 'https://graph.microsoft.com',
          }, {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          */


          /*
          var siteId = "1125bbca-ec37-45a8-b4f4-5a9a0c26deb0";
          var folder = encodeURIComponent(nombre);
          //Crear carpetas y archivo en obtenido de RC API
          var file = await fetch(`https://graph.microsoft.com/v1.0/sites/${siteId}/drive/items/root:/${folder}/${call.id}:/content`,
            {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${access_token}`
              },
              body: blob
            }
          );*/


          const msal = require('@azure/msal-node');
          const config = {
              auth: {
                  clientId: "0207d157-7a91-4331-b414-5ef2d5e79eb4",
                  clientSecret: "hxZ8Q~jyThowNLkIbBiVg_u1lsFQssKbGy3xyc0x",
                  authority: "https://login.microsoftonline.com/2a2ad6dd-ec53-4b85-8936-86adee4c61a6"
              },
              system: {
                  loggerOptions: {
                      loggerCallback(loglevel, message, containsPii) {
                          console.log(message);
                      },
                      piiLoggingEnabled: false,
                      logLevel: msal.LogLevel.Verbose,
                  }
              }
          };
          const REDIRECT_URI = "https://automationetaxservice.github.io/redirect.html";
          const cca = new msal.ConfidentialClientApplication(config);
          
          const tokenRequest = {
              scopes: ["https://graph.microsoft.com/User.Read"],
              redirectUri: REDIRECT_URI,
          };

          cca.acquireTokenByClientCredential(tokenRequest).then((response) => {
              console.log(response);
          }).catch((error) => {
              console.log(error);
          });






          //var url = `https://francistaxservicecom.sharepoint.com/sites/calls/Shared%20Documents/${folder}/${call.id}`;

          //var callLog = { Result__c: jsonObj.result, Action__c: jsonObj.action, CallId__c: jsonObj.id, Direction__c: jsonObj.direction, Duration__c: duration, Name: nombre, Phone__c: phoneNumber, Location__c: location, StartTime__c: jsonObj.startTime, Recording_Id__c: jsonObj.recording.id, Recording__c: url };
        }else{
          var callLog = { Result__c: jsonObj.result, Action__c: jsonObj.action, CallId__c: jsonObj.id, Direction__c: jsonObj.direction, Duration__c: duration, Name: nombre, Phone__c: phoneNumber, Location__c: location, StartTime__c: jsonObj.startTime };
        }
        
        conn.login('eautomationdep@francistaxservice.com', 'DashFLTowe16.').then(async (res) => {
          const ret = await conn.sobject("CallLog__c").create(callLog);
        });

        //Obtener nuevos tokens con más tiempo de sesión
        var body2 = {grant_type: "refresh_token", client_id: "9HbuQrJrz91dX2plLImQtu" , refresh_token: data.refresh_token};
        let newtokens2 = await fetch('https://platform.devtest.ringcentral.com/restapi/oauth/token', { method: 'POST', headers:{ 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': `Basic ${encoded}` }, body: qs.stringify(body2) });
        let token2 = await newtokens2.json();
        token2.refresh_token_expire_time = 172243896216700;
        token2.refresh_token_expire_time = 172243896216700;
        token2.expires_in = 360000;
        token2.refresh_token_expires_in = 60480000;
        
        //Volver a asignar tokens a memoria local
        localStorage.setItem('sdk-ringcentral-widgetsplatform', JSON.stringify(token2));
      })();
      
    });
    
    webphone.onCallStart(() => {
      if (routerInteraction.currentPath.indexOf('/calls/active') > -1) {
        return;
      }
      routerInteraction.push('/calls/active');
    });
    webphone.onCallRing(() => {
      if (
        webphone.ringSessions.length > 1
      ) {
        if (routerInteraction.currentPath !== '/calls') {
          routerInteraction.push('/calls');
        }
        webphone.ringSessions.forEach((session) => {
          webphone.toggleMinimized(session.id);
        });
      }
    });
    contactSearch.addSearchSource({
      sourceName: 'contacts',
      async searchFn({ searchString }) {
        const items = await contacts.searchForPhoneNumbers(searchString);
        return items;
      },
      formatFn(entities) {
        return entities;
      },
      readyCheckFn() {
        return contacts.ready;
      },
    });
    // ContactMatcher configuration
    contactMatcher.addSearchProvider({
      name: 'contacts',
      async searchFn({ queries }) {
        const items = await contacts.matchContacts({ phoneNumbers: queries });
        return items;
      },
      readyCheckFn() {
        return contacts.ready;
      },
    });
  }

  initialize() {
    const appFeatures = this;
    this.store.subscribe(() => {
      if (this.auth.ready) {
        if (this.routerInteraction.currentPath !== '/' && !this.auth.loggedIn) {
          this.routerInteraction.push('/');
        } else if (
          this.routerInteraction.currentPath === '/' &&
          this.auth.loggedIn
        ) {
          this.routerInteraction.push('/settings');
          const showContact = appFeatures.isCallingEnabled;
          if (showContact) {
            this.routerInteraction.push('/contacts');
          }
        }
      }
    });
  }

  get name() {
    return this._appConfig.name;
  }

  get version() {
    return this._appConfig.version;
  }

  get _actionTypes() {
    return null;
  }
}

export function createPhone({
  prefix,
  apiConfig,
  brandConfig,
  appVersion,
  redirectUri,
}) {
  @ModuleFactory({
    providers: [
      {
        provide: 'Prefix',
        useValue: prefix,
      },
      {
        provide: 'SdkConfig',
        useValue: {
          ...apiConfig,
          cachePrefix: `sdk-${prefix}`,
          clearCacheOnRefreshError: false,
        },
      },
      {
        provide: 'AppConfig',
        useValue: { name: brandConfig.appName, version: appVersion },
      },
      { provide: 'BrandConfig', useValue: brandConfig },
      { provide: 'OAuthOptions', useValue: { redirectUri } },
    ],
  })
  class Phone extends BasePhone {}
  return Phone.create();
}
