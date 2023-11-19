import Routing from './index.vue';
import { Auth } from './Auth';
import { Registration } from './Registration';
import { WalletPage } from './WalletPage';
import { Settings } from './Settings';
import { Refill } from './Refill';

export const routes = [
  { path: '/auth', component: Auth, name: 'Auth' },
  {
    path: '/registration',
    component: Registration,
    name: 'Registration',
  },
  {
    path: '/wallet',
    component: WalletPage,
    name: 'Wallet',
  },
  {
    path: '/settings',
    component: Settings,
    name: 'Settings',
  },
  {
    path: '/refill',
    component: Refill,
    name: 'Refill',
  },
  {
    path: '/refill/:user',
    component: Refill,
    name: 'RefillUser',
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/auth',
  },
];

export { Routing };
