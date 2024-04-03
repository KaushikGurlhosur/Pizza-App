import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="bg-gradient-to-r from-amber-200 to-yellow-400 uppercase px-4 py-3 sm:px-6 border-b border-violet-400 flex items-center justify-between ">
      <Link
        to="/"
        className="tracking-widest bg-gradient-to-r from-red-400 to-red-900 bg-clip-text text-transparent "
      >
        Fast React Pizza Co.
      </Link>

      <SearchOrder />

      <Username />
    </header>
  );
}

export default Header;
