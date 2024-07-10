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
