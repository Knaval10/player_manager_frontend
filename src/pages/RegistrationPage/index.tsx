import BGimage from "../../assets/background.png";
import { SubmitHandler, useForm } from "react-hook-form";
import AppleLogo from "../../assets/AppleLogo.png";
import GoogleLogo from "../../assets/GoogleLogo.png";
import FacebookLogo from "../../assets/FacebookLogo.png";
import { registerFormMutation } from "../../utils/api/api";

const RegistrationPage = () => {
  type Inputs = {
    name: string;
    email: string;
    password: string;
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

  const { mutate }: any = registerFormMutation();

  const handleFormSubmit = (data: Inputs) => {
    // try {
    //   const formData = new FormData();
    //   formData.append("name", data.name);
    //   formData.append("email", data.email);
    //   formData.append("password", data.password);
    // } catch {
    //   (err: any) => {
    //     console.log("Error", err);
    //   };
    // }
    const registrationData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    mutate(registrationData);
  };

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
        <form className="flex flex-col items-center justify-center gap-[34px]">
          <div className="flex justify-center flex-col">
            <label htmlFor="" className="text-white">
              Full Name
            </label>

            <input
              aria-label="Name"
              {...register("name", {
                required: "This field is required",
              })}
              placeholder="Name"
              className="rounded-[12px] h-[56px] w-full md:w-[443px] border border-[#EF8065] bg-transparent font-[500] text-[15px] px-9 text-[#EF8065]"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="flex justify-center flex-col">
            <label htmlFor="" className="text-white">
              E-Mail
            </label>
            <input
              aria-label="E-mail"
              {...register("email", {
                required: "This field is required",
              })}
              placeholder="Email address"
              className="rounded-[12px] h-[56px] w-full md:w-[443px] border border-[#EF8065] bg-transparent font-[500] text-[15px] px-9 text-[#EF8065]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="flex justify-center flex-col">
            <label htmlFor="" className="text-white">
              Password
            </label>

            <input
              type="password"
              {...register("password", {
                required: "This field is required",
              })}
              placeholder="Password"
              className="rounded-[12px] h-[56px] w-full md:w-[443px] border border-[#EF8065] bg-transparent font-[500] text-[15px] px-9 text-[#EF8065]"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <div className="flex justify-center flex-col">
            <label htmlFor="" className="text-white">
              Re-Enter Password
            </label>

            <input
              aria-label="Password"
              type="password"
              {...register("password", {
                required: "This field is required",
              })}
              placeholder="Re-enter Password"
              className="rounded-[12px] h-[56px] w-full md:w-[443px] border border-[#EF8065] bg-transparent font-[500] text-[15px] px-9 text-[#EF8065]"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <div className="flex flex-col items-center justify-center gap-[34px] w-full">
            <button
              type="button"
              className="text-center content-center rounded-[12px] h-[56px] w-full bg-[#EF8065] font-[500] text-[16px]  text-[white]"
            >
              Create an account
            </button>
          </div>
        </form>
        <span className="text-white pt-[20px]">OR</span>
        <div className="w-full flex flex-col gap-4 pt-4">
          <span className="text-[14px] text-white font-medium text-center">
            Continue with
          </span>
          <div className="flex gap-2 justify-center">
            {registerWithSocialMedia.map((item, index) => (
              <a
                href={item.link}
                target="_blank"
                key={index}
                className="flex justify-center  hover:bg-[#F4A58A]  items-center py-[8px] rounded-[24px]"
              >
                <img
                  src={item.logo}
                  alt={`${item.name} logo`}
                  className="h-[40.26px] w-[40.26px]"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="pt-[20px] text-white">
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
