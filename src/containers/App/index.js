import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';

import { PhoneProvider } from '@ringcentral-integration/widgets/lib/phoneContext';

import { RegionSettingsPage } from '@ringcentral-integration/widgets/containers/RegionSettingsPage';

import SettingsPage from '@ringcentral-integration/widgets/containers/SettingsPage';
import { LoginPage } from '@ringcentral-integration/widgets/containers/LoginPage';

//1.- Importar Historial de Llamadas
import CallHistoryPage from '@ringcentral-integration/widgets/containers/CallHistoryPage';

//2.- Importar Llamadas
import CallingSettingsPage from '@ringcentral-integration/widgets/containers/CallingSettingsPage';
import { DialerAndCallsTabContainer } from '@ringcentral-integration/widgets/containers/DialerAndCallsTabContainer';
import ActiveCallsPage from '@ringcentral-integration/widgets/containers/ActiveCallsPage';
import DialerPage from '@ringcentral-integration/widgets/containers/DialerPage';

//3.- Importar Webphone
import { IncomingCallContainer } from '@ringcentral-integration/widgets/containers/IncomingCallContainer';
import CallCtrlPage from '@ringcentral-integration/widgets/containers/CallCtrlPage';
import TransferPage from '@ringcentral-integration/widgets/containers/TransferPage';
import FlipPage from '@ringcentral-integration/widgets/containers/FlipPage';
import CallBadgeContainer from '@ringcentral-integration/widgets/containers/CallBadgeContainer';
import AudioSettingsPage from '@ringcentral-integration/widgets/containers/AudioSettingsPage';

//4.- Importar Mensajes
import ComposeTextPage from '@ringcentral-integration/widgets/containers/ComposeTextPage';
import { ConversationsPage } from '@ringcentral-integration/widgets/containers/ConversationsPage';
import { ConversationPage } from '@ringcentral-integration/widgets/containers/ConversationPage';

//Agregar contactos SF
import {ContactosView} from '@ringcentral-integration/widgets/components/ContactosView';

import AlertContainer from '@ringcentral-integration/widgets/containers/AlertContainer';
import { ConnectivityBadgeContainer } from '@ringcentral-integration/widgets/containers/ConnectivityBadgeContainer';

import MainView from '../MainView';
import AppView from '../AppView';

const App = ({ phone, hostingUrl }) => {
  return (
    <PhoneProvider phone={phone}>
      <Provider store={phone.store}>
        <Router history={phone.routerInteraction.history}>
          <Route
            component={(routerProps) => (
              <AppView hostingUrl={hostingUrl}>
                {routerProps.children}
                <ConnectivityBadgeContainer />

                <CallBadgeContainer
                  defaultOffsetX={0}
                  defaultOffsetY={45}
                  hidden={routerProps.location.pathname.indexOf('/calls/active') > -1}
                  goToCallCtrl={(sessionId) => {
                    phone.routerInteraction.push(`/calls/active/${sessionId}`);
                  }}
                />
                <IncomingCallContainer
                  showContactDisplayPlaceholder={false}
                  getAvatarUrl={
                    async (contact) => {
                      const avatarUrl = await phone.contacts.getProfileImage(contact);
                      return avatarUrl;
                    }
                  }
                >
                  <AlertContainer
                    callingSettingsUrl="/settings/calling"
                    regionSettingsUrl="/settings/region"
                  />
                </IncomingCallContainer>

              </AppView>
            )}
          >
            <Route
              path="/"
              component={() => (
                <LoginPage>
                  <AlertContainer />
                </LoginPage>
              )}
            />
            <Route
              path="/"
              component={(routerProps) => (
                <MainView>
                  {routerProps.children}
                  <AlertContainer />
                </MainView>
              )}
            >
              <Route
                path="/settings"
                component={(routerProps) => (
                  <SettingsPage
                    params={routerProps.location.query}
                    regionSettingsUrl="/settings/region"
                    callingSettingsUrl="/settings/calling"
                    showAudio={false}
                    showUserGuide={false}
                    showFeedback={false}
                  />
                )}
              />
              <Route
                path="/history"
                component={() => (
                  <CallHistoryPage
                    showContactDisplayPlaceholder={false}
                  />
                )}
              />
              <Route
                path="/calls"
                component={() => (
                  <DialerAndCallsTabContainer>
                    <ActiveCallsPage
                      onCallsEmpty={() => {
                        phone.routerInteraction.push('/dialer');
                      }}
                      useV2
                      getAvatarUrl={async (contact) => {
                        const avatarUrl = await phone.contacts.getProfileImage(contact);
                        return avatarUrl;
                      }}
                    />
                  </DialerAndCallsTabContainer>
                )}
              />
              <Route
                path="/settings/calling"
                component={CallingSettingsPage}
              />
              <Route
                path="/dialer"
                component={() => (
                  <DialerAndCallsTabContainer>
                    {
                      ({ showTabs }) => (
                        <DialerPage
                          withTabs={showTabs}
                        />
                      )
                    }
                  </DialerAndCallsTabContainer>
                )}
              />
              <Route
                path="/settings/audio"
                component={AudioSettingsPage}
              />
              <Route
                path="/calls/active(/:sessionId)"
                component={routerProps => (
                  <CallCtrlPage
                    params={routerProps.params}
                    showContactDisplayPlaceholder={false}
                    onAdd={() => {
                      phone.routerInteraction.push('/dialer');
                    }}
                    onBackButtonClick={() => {
                      phone.routerInteraction.push('/calls');
                    }}
                    getAvatarUrl={
                      async (contact) => {
                        const avatarUrl = await phone.contacts.getProfileImage(contact);
                        return avatarUrl;
                      }
                    }
                  />
                )}
              />
              <Route path="/transfer/:sessionId(/:type)" component={routerProps => ( <TransferPage params={routerProps.params} /> )} />
              <Route path="/flip/:sessionId" component={(routerProps) => ( <FlipPage params={routerProps.params} /> )} />

              <Route
                path="/composeText"
                component={ComposeTextPage}
              />
              <Route
                path="/conversations/:conversationId"
                component={routerProps => (
                  <ConversationPage
                    params={routerProps.params}
                    showContactDisplayPlaceholder={false}
                    showGroupNumberName
                  />
                )}
              />
              <Route
                path="/messages"
                component={() => (
                  <ConversationsPage
                    showContactDisplayPlaceholder={false}
                    showGroupNumberName
                  />
                )} />
              <Route
                path="/contactos"
                component={() => (
                  <ContactosView/>
                )}
              />
              <Route path="/settings/region" component={RegionSettingsPage} />
            </Route>
          </Route>
        </Router>
      </Provider>
    </PhoneProvider>
  );
};

App.propTypes = {
  phone: PropTypes.object.isRequired,
  hostingUrl: PropTypes.string.isRequired,
};

export default App;
