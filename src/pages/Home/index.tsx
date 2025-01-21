import BGimage from "../../assets/22432.jpg";
const LandingPage = () => {
  return (
    <div className="">
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${BGimage})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Manage Football Matches Like a Pro
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Streamline your football management process with our powerful
              tools
            </p>
            <button className="bg-[grey] rounded-xl px-3 py-2">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
