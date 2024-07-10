import React from 'react';
import { connect } from 'react-redux';

import { withPhone } from '@ringcentral-integration/widgets/lib/phoneContext';

import TabNavigationView from '@ringcentral-integration/widgets/components/TabNavigationView';


import SettingsIcon from '@ringcentral-integration/widgets/assets/images/Settings.svg';

//1. Importar Historial de Llamadas
import HistoryIcon from '@ringcentral-integration/widgets/assets/images/CallHistory.svg';
import HistoryHoverIcon from '@ringcentral-integration/widgets/assets/images/CallHistoryHover.svg';


//2. Importar Llamadas
import DialPadIcon from '@ringcentral-integration/widgets/assets/images/DialPadNav.svg';
import DialPadHoverIcon from '@ringcentral-integration/widgets/assets/images/DialPadHover.svg';

//4.- Importar Mensajes
import MessageIcon from '@ringcentral-integration/widgets/assets/images/Messages.svg';
import MessageHoverIcon from '@ringcentral-integration/widgets/assets/images/MessagesHover.svg';

import SettingsHoverIcon from '@ringcentral-integration/widgets/assets/images/SettingsHover.svg';

import ContactIcon from '@ringcentral-integration/widgets/assets/images/Contact.svg';
import ContactHoverIcon from '@ringcentral-integration/widgets/assets/images/ContactHover.svg';

const TABS = [
  //2. Agregar tab de Llamadas
  {
    icon: DialPadIcon,
    activeIcon: DialPadHoverIcon,
    label: 'Dial Pad',
    path: '/dialer',
  },
  //1. Agregar tab de Historial de Llamadas
  {
    icon: HistoryIcon,
    activeIcon: HistoryHoverIcon,
    label: 'History',
    path: '/history',
  },
  //3. Agregar tab de Mensajes
  {
    icon: MessageIcon,
    activeIcon: MessageHoverIcon,
    label: 'Messages',
    path: '/messages',
    noticeCounts: 0,
    isActive: currentPath => (
      currentPath === '/messages' || currentPath.indexOf('/conversations/') !== -1
    ),
  },
  //Tab Contactos SF
  {
    icon: ContactIcon,
    activeIcon: ContactHoverIcon,
    label: 'Contact',
    path: '/contactos',
    isActive: (currentPath) => currentPath.substr(0, 9) === '/contactos',
  },
  {
    icon: SettingsIcon,
    activeIcon: SettingsHoverIcon,
    label: 'Settings',
    path: '/settings',
    isActive: (currentPath) => currentPath.substr(0, 9) === '/settings',
  },
];

function mapToProps(_, { phone: { routerInteraction } }) {
  return {
    tabs: TABS,
    currentPath: routerInteraction.currentPath,
  };
}
function mapToFunctions(_, { phone: { routerInteraction } }) {
  return {
    goTo: (path) => {
      if (path) {
        routerInteraction.push(path);
      }
    },
  };
}

const MainView = withPhone(
  connect(mapToProps, mapToFunctions)(TabNavigationView),
);

export default MainView;
