import BGimage from "../../assets/background.png";
import { SubmitHandler, useForm } from "react-hook-form";
import AppleLogo from "../../assets/AppleLogo.png";
import GoogleLogo from "../../assets/GoogleLogo.png";
import FacebookLogo from "../../assets/FacebookLogo.png";

const RegistrationPage = () => {
  type Inputs = {
    Name: string;
    Email: string;
    Password: string;
  };

  type SocialMedia = {
    name: string;
    logo: string;
    link: string;
  };

  const registerWithSocialMedia: SocialMedia[] = [
    {
      name: "Apple",
      logo: AppleLogo,
      link: "https://apple.com",
    },
    {
      name: "Google",
      logo: GoogleLogo,
      link: "https://google.com",
    },
    {
      name: "Facebook",
      logo: FacebookLogo,
      link: "https://facebook.com",
    },
  ];
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
          <label className="flex justify-center">
            <input
              aria-label="Name"
              {...register("Name", {
                required: "This field is required",
              })}
              placeholder="Name"
              className="rounded-[12px] h-[68px] w-full md:w-[443px] border border-[#EF8065] bg-transparent font-[500] text-[15px] px-9 text-[#EF8065]"
            />
            {errors.Name && (
              <p className="text-red-500 text-sm">{errors.Name.message}</p>
            )}
          </label>
          <label className="flex justify-center">
            <input
              aria-label="E-mail"
              {...register("Email", {
                required: "This field is required",
              })}
              placeholder="Email address"
              className="rounded-[12px] h-[68px] w-full md:w-[443px] border border-[#EF8065] bg-transparent font-[500] text-[15px] px-9 text-[#EF8065]"
            />
            {errors.Email && (
              <p className="text-red-500 text-sm">{errors.Email.message}</p>
            )}
          </label>
          <label className="flex justify-center">
            <input
              type="password"
              {...register("Password", {
                required: "This field is required",
              })}
              placeholder="Password"
              className="rounded-[12px] h-[68px] w-full md:w-[443px] border border-[#EF8065] bg-transparent font-[500] text-[15px] px-9 text-[#EF8065]"
            />
            {errors.Email && (
              <p className="text-red-500 text-sm">{errors.Email.message}</p>
            )}
          </label>
          <label className="flex justify-center">
            <input
              aria-label="Password"
              type="password"
              {...register("Password", {
                required: "This field is required",
              })}
              placeholder="Re-enter Password"
              className="rounded-[12px] h-[68px] w-full md:w-[443px] border border-[#EF8065] bg-transparent font-[500] text-[15px] px-9 text-[#EF8065]"
            />
            {errors.Email && (
              <p className="text-red-500 text-sm">{errors.Email.message}</p>
            )}
          </label>
          <div className="flex flex-col items-center justify-center gap-[34px] w-full">
            <button
              className="text-center content-center rounded-[12px] h-[68px] w-full bg-[#EF8065] font-[500] text-[16px]  text-[white]"
            >
              Create an account
            </button>
          </div>
        </div>
        <span className="text-white pt-[36px]">OR</span>
        <div className="w-full flex flex-col gap-4 pt-4">
          {registerWithSocialMedia.map((item, index) => (
            <a
              href={item.link}
              target="_blank"
              key={index}
              className="flex justify-center border border-[#F4A58A] hover:bg-[#F4A58A]  items-center py-[8px] rounded-[24px]"
            >
              <div className="flex items-center w-[225px] gap-2">
                <img
                  src={item.logo}
                  alt={`${item.name} logo`}
                  className="h-[40.26px] w-[40.26px]"
                />
                <h1 className="text-[14px] text-white font-medium">
                  Continue with {item.name}
                </h1>
              </div>
            </a>
          ))}
        </div>
        <div className="pt-[32px] text-white">
          Already a member?
          <a href="/login" className="text-[#ED6B4E]">
            Login In
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
