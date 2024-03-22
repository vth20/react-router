import { Link } from "react-router-dom";
import { LogoutIcon } from "../../assets/icons";
import localStorageUtil from "../../utils/localStorage";
import { useCallback } from "react";
const DefaultLayout = ({ children }) => {
  const handleLogout = useCallback(() => {
    localStorageUtil.removeItem("access_token");
  }, []);
  return (
    <>
      <nav className="flex justify-between items-center bg-slate-500">
        <ul className="flex m-0 p-0 list-none">
          <li className="mr-5 p-4 hover:bg-violet-600">
            <Link className="text-[white] font-[bold] transition-[color] duration-[0.3s] ease-[ease]" to="/home">Trang chủ</Link>
          </li>
          <li className="mr-5 p-4 hover:bg-violet-600">
            <Link className="text-[white] font-[bold] transition-[color] duration-[0.3s] ease-[ease]" to="/generate">Tạo lì xì</Link>
          </li>
        </ul>
        <Link className="text-[white] p-4 hover:bg-violet-600 font-[bold] transition-[color] duration-[0.3s] ease-[ease]" to="/login" onClick={handleLogout}>
          Logout
        </Link>
        {/* <LogoutIcon /> */}
      </nav>

      <main>{children}</main>
    </>
  );
};

export default DefaultLayout;
