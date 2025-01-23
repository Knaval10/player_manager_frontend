import BGimage from "../../assets/background.png";
import AppleLogo from "../../assets/AppleLogo.png";
import GoogleLogo from "../../assets/GoogleLogo.png";
import FacebookLogo from "../../assets/FacebookLogo.png";

const Login = () => {

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
  return (
    <div
      className="h-[100vh] w-full flex items-center justify-center "
      style={{
        backgroundImage: `url(${BGimage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col justify-center items-center max-w-[467px]">
        <h1 className=" bg-gradient-to-r from-[#EF8065] via-[#FFC266] to-[#F7D403] bg-clip-text text-transparent font-bold text-4xl leading-[1.5]">
          Gamee On, Team Ready!
        </h1>

        <h2 className="py-5 font-bold text-[16px] leading-[20.8px] text-[white]">
          YOUR ULTIMATE <span className="text-[#FFC266]">FUTSAL TEAM MANAGEMENT SOLUTION</span>
        </h2>
        <p className="text-white text-[16px] text-center font-bold align-middle leading-[21px]">
          Take control of your futsal experience with our app! Whether you're a manager organizing matches and schedules or a player tracking your team's performance, we’ve got you covered. Create your team, manage game times, and stay connected—all in one place.
        </p>
        <div className="flex flex-col items-center justify-center gap-[34px] w-full pt-[34px]">
          <a href="/signIn" className="text-center content-center rounded-[12px] h-[68px] w-full bg-[#EF8065] font-[500] text-[16px]  text-[white]">
           Login
          </a>
        </div>

        <span className="text-white pt-4">OR</span>
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
          Not a member?
          <a href="/RegistrationPage" className="text-[#ED6B4E]">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
