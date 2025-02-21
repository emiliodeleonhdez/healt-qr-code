import Image from "next/image";
import Profile from "./pages/profile";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-4 h-screen w-full">
      <Profile />
    </div>
  );
}
