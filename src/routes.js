import Home from './components/Home/Home';
import PageShow from './components/PageShow/PageShow';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    exact: true,
    Icon: 'HomeIcon'
  },
  {
    path: '/page-show',
    name: 'PageShow',
    component: PageShow,
    exact: false,
    Icon: 'HomeIcon'
  }
];

export default routes;
