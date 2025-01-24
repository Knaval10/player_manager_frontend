import { SubmitHandler, useForm } from "react-hook-form";
import MatchCard from "../../components/Card/MatchCard";
import { useState } from "react";

const GameDetails = () => {
  const [activateSearch, setActivateSearch] = useState();
  type Inputs = {
    playerSearch: string;
  };
  const {
    register,
    formState: { errors },
  } = useForm<Inputs>();
  return (
    <div className="px-[15px]">
      <header className="flex gap-[30px]">
        <label className="flex justify-center flex-col ">
          <input
            aria-label="playerSearch"
            {...register("playerSearch", {
              required: "This field is required",
            })}
            placeholder="Search Players"
            className="rounded-[12px] h-[40px] w-full border border-[#EF8065] bg-transparent font-[500] text-[15px] px-9 text-[#EF8065]"
          />
          {errors.playerSearch && (
            <p className="text-red-500 text-sm">
              {errors.playerSearch.message}
            </p>
          )}
        </label>
        <div className="flex flex-col items-center justify-center gap-[34px] ">
          <button className="text-center content-center rounded-[12px] h-[40px]  bg-[#EF8065] font-[500] text-[12px]  text-[white] min-w-[100px]">
            Create A Match
          </button>
        </div>
      </header>
      <div className="text-white pt-[36px]">
        <div className="flex flex-col gap-[8px]">
          <h1 className="text-[24px] leading-[31.2px] font-[700]">
            Previous Match
          </h1>
          <h2 className="text-[16px] leading-[20.8px] font-[400]">
            View Your previous matches here
          </h2>
        </div>
        <div className=" flex flex-col justify-center items-center pt-[20px md:grid grid-cols-3">
          <MatchCard />
          <MatchCard />
          {/* <MatchCard /> */}
        </div>
      </div>
      <div className="text-white pt-[36px]">
        <div className="flex flex-col gap-[8px]">
          <h1 className="text-[24px] leading-[31.2px] font-[700]">
            Upcomming Match
          </h1>
          <h2 className="text-[16px] leading-[20.8px] font-[400]">
            View upcoming matches here
          </h2>
        </div>
        <div className=" flex flex-col justify-center items-center pt-[20px]">
          <MatchCard />
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
