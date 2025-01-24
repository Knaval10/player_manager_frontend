import React from "react";
import NotificationIcon from "../../../../assets/Notification.svg";
import ProfilePicture from "../../../../assets/defaultProfile.png";

const PrivateNav = () => {
  return (
    <div className="">
      <nav className="flex px-[25px] py-[22px] gap-[32px]">
        <div className="relative flex items-center justify-center">
          <div className="absolute h-[18px] w-[18px] rounded-full bg-[red] top-[6px] left-[13px] border border-[#081232]">
            <div className="flex items-center justify-center h-full w-full">
              <h1 className="text-white text-[10px] font-bold">9+</h1>
            </div>
          </div>
          <img src={NotificationIcon} alt=""  className="h-[28px]"/>
        </div>
        <img
          src={ProfilePicture}
          alt=""
          className="bg-[pink] h-[40px] w-[40px] rounded-full border"
        />
      </nav>
    </div>
  );
};

export default PrivateNav;
