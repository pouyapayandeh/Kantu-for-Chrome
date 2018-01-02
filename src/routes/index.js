import DashboardPage from '../containers/dashboard'
import AuthPage from '../containers/auth'
import MainPage from '../containers/main'
import PartitionPage from '../containers/partition'

const routes = [
  { path: '/dashboard', component: DashboardPage, exact: true },
  { path: '/auth', component: AuthPage, exact: true },
  { path: '/main', component: MainPage, exact: true },
  { path: '/partition', component: PartitionPage, exact: true }
];

export default routes;
