import BGimage from "../../assets/background.png";
import { SubmitHandler, useForm } from "react-hook-form";
import AppleLogo from "../../assets/AppleLogo.png";
import GoogleLogo from "../../assets/GoogleLogo.png";
import FacebookLogo from "../../assets/FacebookLogo.png";
import { loginFormMutation } from "../../utils/api/api";

const SignIn = () => {
  type Inputs = {
    Email: string;
    Password: string;
    rememberMe: boolean;
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

  const { mutate } = loginFormMutation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();

  const handleFormSubmit: SubmitHandler<Inputs> = (data) => {
    const loginData: any = {
      email: data.Email,
      password: data.Password,
    };
    mutate(loginData);
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
      <div className="flex flex-col justify-center items-center px-[30px]">
        <h1 className=" bg-gradient-to-r from-[#EF8065] via-[#FFC266] to-[#F7D403] bg-clip-text text-transparent font-bold text-4xl leading-[1.5]">
          Sign In
        </h1>

        <h2 className="py-5 font-bold text-[16px] leading-[20.8px] text-[#FFC266] text-center">
          ENTER YOUR EMAIL ADDRESS AND PASSWORD
        </h2>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="flex flex-col items-center justify-center gap-[34px]"
        >
          <div className="flex justify-center flex-col">
            <label htmlFor="" className="text-white">
              E-mail
            </label>
            <input
              aria-label="E-mail"
              {...register("Email", {
                required: "This field is required",
              })}
              placeholder="Email address"
              className="rounded-[12px] h-[56px] w-full border border-[#EF8065] bg-transparent font-[500] text-[15px] px-9 text-[#EF8065]"
            />
            {errors.Email && (
              <p className="text-red-500 text-sm">{errors.Email.message}</p>
            )}
          </div>
          <div className="flex justify-center flex-col">
            <label htmlFor="" className="text-white">
              Password
            </label>
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
          </div>
          <div className="flex flex-col items-center justify-center gap-[34px] w-full">
            <button
              type="submit"
              className="text-center content-center rounded-[12px] h-[56px] w-full bg-[#EF8065] font-[500] text-[16px]  text-[white]"
            >
              Log In
            </button>
          </div>
        </form>
        <section className="flex w-full justify-between text-white pt-[26px]">
          <div className="flex items-center gap-[10px]">
            <input
              type="checkbox"
              {...register("rememberMe")}
              className="appearance-none border border-[#EF8065] bg-transparent h-[20px] w-[20px] rounded-md checked:bg-[green] checked:border-[#EF8065] focus:ring-2 focus:ring-[#EF8065] hover:cursor-pointer"
            />
            <span>Remember Me</span>
          </div>
          <span>Forget Password?</span>
        </section>
        <span className="text-white">OR</span>
        <section className="w-full flex flex-col gap-4 pt-4">
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
        </section>
        <section className="pt-[32px] text-white">
          Not a member?
          <a href="/register" className="text-[#ED6B4E]">
            Sign up
          </a>
        </section>
      </div>
    </div>
  );
};

export default SignIn;
