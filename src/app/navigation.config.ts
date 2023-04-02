import { NavigationItem } from "./shared/models/navigation-item";

export const navigationConfig: NavigationItem[] = [
  {
    id: 'auth',
    title: 'Authentication',
    icon: 'user',
    type: 'collapsable', // MatMenu
    children: [
      {
        id: 'login',
        title: 'Login',
        icon: 'login',
        type: 'basic', // MatButton
        link: 'login',
      }
    ],
  }
];
