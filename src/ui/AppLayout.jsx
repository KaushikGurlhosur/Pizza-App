import Header from "./Header";
import CratOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  //   {state: 'idle', location: undefined, formMethod: undefined, formAction: undefined, formEncType: undefined}

  // {state: 'loading', location: {…}, formMethod: undefined, formAction: undefined, formEncType: undefined}

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-scroll">
        <main className="overflow-scroll max-w-3xl mx-auto ">
          <Outlet />
        </main>
      </div>
      <CratOverview />
    </div>
  );
}

export default AppLayout;
