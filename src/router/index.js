import { path } from "../utils/constants";
import Home from "../pages/Home";
import Generate from "../pages/Generate";
import NotFoundPage from "../pages/NotFoundPage";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import Receive from "../pages/Receive";
import DefaultLayout from "../layouts/default";
const router = [
  {
    key: 1,
    path: path.CLIENT.HOME_PAGE,
    component: Home,
    layout: DefaultLayout,
  },
  {
    key: 2,
    path: path.CLIENT.DEFAULT,
    component: Home,
    layout: DefaultLayout,
  },
  {
    key: 3,
    path: path.CLIENT.GENERATE,
    component: Generate,
    layout: DefaultLayout,
  },
  {
    key: 4,
    path: path.CLIENT.RECEIVE,
    component: Receive
  },
  {
    key: 5,
    path: path.CLIENT.LOGIN,
    component: Login,
  },
  {
    key: 6,
    path: path.CLIENT.SIGNUP,
    component: SignUp,
  },
  // 404 page
  {
    key: 404,
    path: "*",
    component: NotFoundPage,
  },
];
export default router;
