import { Button } from "./button";

const LeftSide = () => {
  return (
    <div className="w-3/5 bg-[url(/src/assets/bg.svg)] h-screen relatives flex-col justify-center hidden md:flex">
      <div className="text-white ml-[9.813rem]">
        <h3 className="text-[2.5rem] font-bold">GoFinance</h3>
        <p className="text-lg font-medium">Lorem ipsum dolor sit amet</p>
        <Button className="bg-[#0575E6] rounded-[1.875rem] mt-2.5 cursor-pointer">
          Read More
        </Button>
      </div>

      <img
        src="/src/assets/bg-aksen.svg"
        alt="aksen"
        className="absolute bottom-0 top-auto h-[12.5rem]"
      />
    </div>
  );
};

export default LeftSide;
