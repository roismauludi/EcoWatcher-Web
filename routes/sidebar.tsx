/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 */

interface IRoute {
  path?: string;
  icon?: string;
  name: string;
  routes?: IRoute[];
  checkActive?(pathname: String, route: IRoute): boolean;
  exact?: boolean;
  notificationKey?: string; // Key untuk notifikasi
}

export function routeIsActive(pathname: String, route: IRoute): boolean {
  if (route.checkActive) {
    return route.checkActive(pathname, route);
  }

  return route?.exact
    ? pathname == route?.path
    : route?.path
    ? pathname.indexOf(route.path) === 0
    : false;
}

const routes: IRoute[] = [
  {
    path: "/example", // the url
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "Dashboard", // name that appear in Sidebar
    exact: true,
  },
  {
    path: "/example/point", // the url
    icon: "MoneyIcon", // the component being exported from icons/index.js
    name: "Point", // name that appear in Sidebar
    notificationKey: "unverifiedPoints",
  },
  {
    path: "/example/catalog", // the url
    icon: "CartIcon", // the component being exported from icons/index.js
    name: "Catalog", // name that appear in Sidebar
  },
  {
    path: "/example/listuser",
    icon: "PeopleIcon",
    name: "Daftar Pengguna",
    notificationKey: "unverifiedUsers",
  },
  // {
  //   path: "/example/cards",
  //   icon: "CardsIcon",
  //   name: "Cards",
  // },
  // {
  //   path: "/example/charts",
  //   icon: "ChartsIcon",
  //   name: "Charts",
  // },
  // {
  //   path: "/example/buttons",
  //   icon: "ButtonsIcon",
  //   name: "Buttons",
  // },
  // {
  //   path: "/example/modals",
  //   icon: "ModalsIcon",
  //   name: "Modals",
  // },
  // {
  //   path: "/example/tables",
  //   icon: "TablesIcon",
  //   name: "Tables",
  // },
  // {
  //   icon: "PagesIcon",
  //   name: "Pages",
  //   routes: [
  //     // submenu
  //     {
  //       path: "/example/login",
  //       name: "Login",
  //     },
  //     {
  //       path: "/example/create-account",
  //       name: "Create account",
  //     },
  //     {
  //       path: "/example/forgot-password",
  //       name: "Forgot password",
  //     },
  //     {
  //       path: "/example/404",
  //       name: "404",
  //     },
  //     {
  //       path: "/example/blank",
  //       name: "Blank",
  //     },
  //   ],
  // },
];

export type { IRoute };
export default routes;
