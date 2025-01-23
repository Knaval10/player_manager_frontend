import ProfileImage from "../../../assets/defaultProfile.png";

const PlayerCard = () => {
  return (
    <div className="h-[300px]4 w-fit border border-black flex flex-col justify-center items-center rounded-[50px] p-[20px]">
      <div className="border-[3px] border-black rounded-full overflow-hidden">
        <img src={ProfileImage} alt="" className="size-[100px]" />
      </div>
      <h1>Name: Eden Hazard</h1>
      <h2>Age:25</h2>
      <h2>Position: Forward</h2>
      {/* <h2>Socials: Facebook,<br/> Instagram,<br/> X</h2> */}
    </div>
  )
};

export default PlayerCard;
