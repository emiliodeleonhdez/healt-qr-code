import { IProfilePic } from "@/app/interfaces";
import React from "react";

const ProfilePic: React.FC<IProfilePic> = ({ name }) => {
  return (
    <div className="sticky top-0 bg-white z-10 w-full flex flex-col gap-3 justify-center items-center p-2">
      <div className="bg-stone-300 rounded-full w-[90px] h-[90px]"></div>
      <h2 className="font-bold">{name}</h2>
    </div>
  );
};

export default ProfilePic;
