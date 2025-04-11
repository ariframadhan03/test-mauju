const Profile = () => {
  return (
    <div>
      <div className="mt-[4rem] mx-auto p-6 md:p-3 w-[300px] md:w-auto rounded-xl md:mt-[7rem] md:mx-[4rem] lg:mt-[10rem] lg:mx-[7rem] bg-[#0571E1] flex flex-col md:flex-row gap-3">
        <img
          src="/src/assets/profile-icon.svg"
          alt="profile"
          className="h-28 md:h-[18.75rem]"
        />

        <div className="text-white my-auto mx-auto md:mx-0 text-center md:text-left">
          <p className="text-3xl md:text-7xl mb-2 md:mb-6">JASON LEE L.W</p>
          <p className="text-xl md:text-3xl">Sales Lead</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
