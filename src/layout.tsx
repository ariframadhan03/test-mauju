import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navgate = useNavigate();

  const goToProfile = () => {
    navgate("/profile");
  };

  const goToDashboard = () => {
    navgate("/dashboard");
  };

  return (
    <div>
      <div className="h-16 bg-[#0571E1] flex justify-between  px-[2rem] sm:px-[3rem] md:px-[5rem] lg:px-[7rem]">
        <p
          className="text-white my-auto cursor-pointer"
          onClick={goToDashboard}
        >
          Dashboard
        </p>

        <div
          className="flex gap-1 cursor-pointer sm:border-l-[1px] sm:border-gray-100 pl-1 sm:pl-2 md:pl-4 lg:pl-6"
          onClick={goToProfile}
        >
          <img
            src="/src/assets/profile-icon.svg"
            alt="profile"
            width={48}
            height={48}
          />

          <div className="text-white m-auto hidden sm:block">
            <p className="text-sm font-bold">JASON LEE L.W</p>
            <p className="text-xs font-medium">Sales Lead</p>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
