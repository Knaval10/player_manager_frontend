import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BGimage from "../../assets/background.png";
import futsal from "../../assets/football.png";
import goatImg from "../../assets/goat.png";
import chevronRight from "../../assets/chevron_right.svg";
const LandingPage = () => {
  const navigate = useNavigate();
  const [startX, setStartX] = useState(null);
  const [distance, setDistance] = useState(0);
  const [isGoal, setIsGoal] = useState(false);
  const swipeThreshold = 250;
  const navigationDelay = 2000;

  const handleTouchStart = (e: any) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: any) => {
    if (!startX || isGoal) return;

    const currentDistance = e.touches[0].clientX;
    let distanceSwiped = currentDistance - startX;
    if (distanceSwiped < 0) distanceSwiped = 0;
    if (distanceSwiped === swipeThreshold) {
      distanceSwiped = swipeThreshold;
      setIsGoal(true);
      setTimeout(() => {
        navigate("/login");
      }, navigationDelay);
    }

    setDistance(distanceSwiped);
  };

  const handleTouchEnd = () => {
    if (!isGoal) {
      setDistance(0);
    }
    setStartX(null);
  };

  const opacity = Math.min((distance / swipeThreshold) * 100, 100);

  return (
    <main className="relative h-screen bg-cover bg-center">
      <img
        src={BGimage}
        alt="Background"
        className="h-full w-full object-cover"
      />

      <section className="absolute inset-0 flex flex-col items-center justify-center">
        <article className="flex flex-col gap-2 text-center text-white px-4">
          <h1 className="bg-gradient-to-r from-[#EF8065] via-[#FFC266] to-[#F7D403] bg-clip-text text-transparent text-[30px] leading-[50px] md:text-5xl font-bold">
            "Game On, Team Ready!"
          </h1>
          <p className="text-xl md:text-xl ">
            Your Ultimate{" "}
            <span className="text-[#FFC266]">
              Futsal Team Management Solution
            </span>
          </p>
          <p className="text-sm font-medium">
            Create your team, manage game times, and stay connected—all in one
            place.
          </p>
        </article>
        <div className="pt-20s">
          <img src={goatImg} alt="" />
        </div>
        <div className="absolute bottom-10">
          {isGoal ? (
            <p className="border border-[#D4634A] rounded-[12px] w-[320px] bg-[#F4A58A] text-white text-center text-sm px-4 py-2">
              <div className="animate-bounce text-2xl">Goal</div>
            </p>
          ) : (
            <div
              className={`flex items-center text-center gap-2 px-4 py-2 border border-[#D4634A] rounded-[12px] w-[320px]`}
              style={{
                backgroundColor: `rgba(244, 165, 138, ${opacity / 100})`,
              }}
            >
              <img
                src={futsal}
                alt="Swipe Me"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{
                  transform: `translateX(${distance}px)`,
                  transition: distance === 0 ? "transform 0.3s ease" : "none",
                }}
              />
              <p
                className="text-white text-center text-sm transition-opacity"
                style={{ opacity: 1 - distance / swipeThreshold }}
              >
                Swipe to get started
              </p>
              <div
                className="flex gap-2 transition-opacity"
                style={{ opacity: 1 - distance / swipeThreshold }}
              >
                <img src={chevronRight} alt="" />
                <img src={chevronRight} alt="" />
                <img src={chevronRight} alt="" />
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
