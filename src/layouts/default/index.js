import { Link } from "react-router-dom";
import "./style.css";
import { useAppLogics } from "../../store/app.store/app.selector";
const DefaultLayout = ({ children }) => {
  const { user } = useAppLogics();
  const handleGetNavigate = () => {
    return `/profile/${user.id}`;
  };
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to={handleGetNavigate()}>Profile</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <main>{children}</main>
    </>
  );
};

export default DefaultLayout;
