import React from "react";
import HeroIntro from "../../molecules/HeroIntro/HeroIntro";
import HeroCallToAction from "../../molecules/HeroCallToAction/HeroCallToAction";
import HeroFeatures from "../../molecules/HeroFeatures/HeroFeatures";

const Hero = () => {
  return (
<div className="container mx-auto px-4 py-16 text-center">
    <HeroIntro/>
    <HeroCallToAction/>
    <HeroFeatures/>
</div>
  );
};

export default Hero;
