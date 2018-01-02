import DashboardPage from '../containers/dashboard'
import AuthPage from '../containers/auth'
import MainPage from '../containers/main'
import ResultPage from '../containers/result'
import ConstraintPage from '../containers/constraint'

const routes = [
  { path: '/dashboard', component: DashboardPage, exact: true },
  { path: '/result', component: ResultPage, exact: true },
  { path: '/constraint', component: ConstraintPage, exact: true },
  { path: '/auth', component: AuthPage, exact: true },
  { path: '/main', component: MainPage, exact: true }
];

export default routes;
