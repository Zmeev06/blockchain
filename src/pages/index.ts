import Routing from "./index.vue";
import { Auth } from "./Auth";
import { Registration } from "./Registration";
import { WalletPage } from "./WalletPage";
import { Settings } from "./Settings";

export const routes = [
  { path: "/", component: Auth, name: "Auth" },
  {
    path: "/registration",
    component: Registration,
    name: "Registration",
  },
  {
    path: "/wallet",
    component: WalletPage,
    name: "Wallet",
  },
  {
    path: "/settings",
    component: Settings,
    name: "Settings",
  },
];

export { Routing };
