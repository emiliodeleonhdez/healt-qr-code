import React from "react";
import User from "../../molecules/Profile/User";
import Banner from "../../molecules/Profile/Banner";
import Alerts from "../../molecules/Profile/Alerts";
import Meds from "../../molecules/Profile/Meds";
import Conditions from "../../molecules/Profile/Conditions";
import Contacts from "../../molecules/Profile/Contacts";

const Demo = () => {
  return (
    <>
      <Banner />
      <div className="flex flex-col items-center p-4 gap-2">
        <User />
        <Alerts />
        <Meds />
        <Conditions />
        <Contacts />
      </div>
    </>
  );
};

export default Demo;
