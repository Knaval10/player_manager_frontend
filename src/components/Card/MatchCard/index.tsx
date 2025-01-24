import TeamA from "../../../assets/TeamA.png";
import TeamB from "../../../assets/TeamB.png";

const MatchCard = () => {
  return (
    <div>
      <div className="h-[193px] w-[256px] bg-[#CECECE] flex flex-col items-center pt-[25px] rounded-[9px]">
        <div className="bg-[#081232] rounded-[65.93px] w-[83.08px] h-[24.64px] flex items-center justify-center text-[#FFFFFF] text-[10.55px] font-[400] leading-[21.1px]">
          Grand Final
        </div>
        <div className="w-full pt-[8px] flex justify-center items-center  gap-[16px] ">
          <div className="flex flex-col justify-center items-center w-[56px] h-[75.36px]">
            <img src={TeamA} alt="" className="h-[59.36px] w-[56px]" />
            <h1 className="text-[#081232] text-[10px] font-[700] text-center">
              YI Lab
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center text-[36px] text-[#081232] font-[700] pt-[6px] gap-[6px]">
              <h1 className="">10</h1>
              <span>:</span>
              <h1>12</h1>
            </div>
            <div className="pt-[10px] ">
              <span className="border border-[#081232] rounded-[32px] text-center content-center text-[#081232] text-[8px] font-[700] w-[73px] h-[20px] py-[5px] px-[10px]">
                10 April 2024
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-[56px] h-[75.36px]">
            <img src={TeamB} alt="" className="h-[59.36px] w-[56px]" />
            <h1 className="text-[#081232] text-[10px] font-[700] text-center">
              Techo Lab
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
