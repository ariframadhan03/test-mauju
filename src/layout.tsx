import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="h-16 bg-[#0571E1] flex justify-end">
        <div className="flex gap-1 pl-1 pr-[2rem] sm:pl-2 sm:pr-[3rem] md:pl-4 md:pr-[5rem] lg:pl-6 lg:pr-[7rem] cursor-pointer sm:border-l-[1px] sm:border-gray-100">
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
