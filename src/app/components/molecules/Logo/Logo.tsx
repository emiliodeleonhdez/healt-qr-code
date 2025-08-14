import { Heart } from "lucide-react";
import React from "react";

const Logo = () => {
  return (
    <div className="flex p-2 gap-2 items-center">
      <Heart className="h-8 w-8 text-red-500" /> <h1 className="text-2xl font-bold text-gray-900">MediScanId</h1>
    </div>
  );
};

export default Logo;
