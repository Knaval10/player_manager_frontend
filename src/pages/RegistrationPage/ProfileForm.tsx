import Select from "react-select";
import BGimage from "../../assets/background.png";
import { SubmitHandler, useForm } from "react-hook-form";

const ProfileForm = () => {
  type Inputs = {
    profile_picture: any;
    DOB: string;
    position: string;
    team: string;
  };

  const {
    register,
    formState: { errors },
  } = useForm<Inputs>();
  return (
    <div
      className="h-[100vh] w-full flex items-center justify-center"
      style={{
        backgroundImage: `url(${BGimage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col justify-center items-center ">
        <h1 className=" bg-gradient-to-r from-[#EF8065] via-[#FFC266] to-[#F7D403] bg-clip-text text-transparent font-bold text-4xl leading-[1.5]">
          Create an account
        </h1>

        <h2 className="py-5 font-bold text-[16px] leading-[20.8px] text-[#FFC266]">
          FILL THE FOLLOWING TO CREATE AN ACCOUNT
        </h2>
        <div className="flex flex-col items-center justify-center gap-[34px]">
          <div className="space-y-2">
            <label htmlFor="" className="text-white">
              Upload your profile picture
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-[#EF8065] border-dashed rounded-lg cursor-pointer bg-gray-50 bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 p-3">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <p className="mb-2 text-sm text-white">
                    <span className="font-semibold">
                      Click to upload Profile Picture
                    </span>
                    or drag and drop
                  </p>
                </div>
                <input
                  id="profile_picture"
                  type="file"
                  className="hidden"
                  {...register("profile_picture", {
                    required: "Profile picture is required",
                  })}
                />
              </label>
            </div>
            {errors.profile_picture && (
              <p className="text-red-400 text-xs italic">
                {errors.profile_picture.message}
              </p>
            )}
          </div>

          <div className="space-y-2 w-full">
            <label htmlFor="" className="text-white">Date Of Birth</label>
            <div className="w-full">
              <input
                id="DOB"
                type="date"
                {...register("DOB", { required: "Date of Birth is required" })}
                className="w-full pl-10 pr-3 py-2 rounded-lg border border-[#EF8065] bg-transparent text-white placeholder-white focus:outline-none focus:border-[#EF8065] transition-colors"
              />
            </div>
            {errors.DOB && (
              <p className="text-red-400 text-xs italic">
                {errors.DOB.message}
              </p>
            )}
          </div>
          <div className="w-full">
          <label htmlFor="" className="text-white">Player Position</label>

            <Select
              {...register("position", { required: "Position is required" })}
              options={[
                { value: "forward", label: "Forward" },
                { value: "goalkeeper", label: "Goalkeeper" },
                { value: "midfielder", label: "Midfielder" },
                { value: "defender", label: "Defender" },
                { value: "winger", label: "Winger" },
              ]}
              placeholder="Select your position"
              className="w-full"
              styles={{
                control: (provided) => ({
                  ...provided,
                  backgroundColor: "transparent",
                  borderColor: "#EF8065",
                  borderWidth: "1px",
                  borderRadius: "0.5rem",
                  paddingLeft: "2.5rem",
                  "&:hover": {
                    borderColor: "#F59E0B",
                  },
                }),
                menu: (provided) => ({
                  ...provided,
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                }),
                option: (provided, state) => ({
                  ...provided,
                  backgroundColor: state.isSelected ? "#F59E0B" : "transparent",
                  color: state.isSelected ? "black" : "white",
                  "&:hover": {
                    backgroundColor: "#F59E0B",
                    color: "black",
                  },
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: "white",
                }),
                input: (provided) => ({
                  ...provided,
                  color: "#EF8065",
                }),
              }}
            />
          </div>
          {errors.position && (
            <p className="text-red-400 text-xs italic">
              {errors.position.message}
            </p>
          )}
          <div className=" w-full">
          <label htmlFor="" className="text-white">Select Team</label>

            <Select
              {...register("team", { required: "Team is required" })}
              options={[
                { value: "techco_lab", label: "Techco Lab Team" },
                { value: "youth_innovation", label: "Youth Innovation Team" },
              ]}
              placeholder="Select your team"
              className="w-full"
              styles={{
                control: (provided) => ({
                  ...provided,
                  backgroundColor: "transparent",
                  borderColor: "#EF8065",
                  borderWidth: "1px",
                  borderRadius: "0.5rem",
                  paddingLeft: "2.5rem",
                  "&:hover": {
                    borderColor: "#F59E0B",
                  },
                }),
                menu: (provided) => ({
                  ...provided,
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                }),
                option: (provided, state) => ({
                  ...provided,
                  backgroundColor: state.isSelected ? "#F59E0B" : "transparent",
                  color: state.isSelected ? "black" : "white",
                  "&:hover": {
                    backgroundColor: "#F59E0B",
                    color: "black",
                  },
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: "white",
                }),
                input: (provided) => ({
                  ...provided,
                  color: "#EF8065",
                }),
              }}
            />
          </div>
          {errors.team && (
            <p className="text-red-400 text-xs italic">{errors.team.message}</p>
          )}
          <div className="flex flex-col items-center justify-center gap-[34px] w-full">
            <button className="text-center content-center rounded-[12px] h-[56px] w-full bg-[#EF8065] font-[500] text-[16px]  text-[white]">
              Create an account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
