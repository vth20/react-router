import { path } from "../utils/constants";
import Home from "../components/Home";
import Profile from "../components/Profile";
import NotFoundPage from "../components/NotFoundPage";
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
    path: path.CLIENT.PROFILE,
    component: Profile,
    layout: DefaultLayout,
  },
  // 404 page
  {
    key: 404,
    path: "*",
    component: NotFoundPage,
  },
];
export default router;
