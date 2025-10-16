import Image from "next/image";

import S1 from "../assets/s1.png";
import S2 from "../assets/s2.png";

export default function Com() {
  return (
    <div className="flex h-screen">
      {/* Left Side */}
      <div className="w-1/2 p-6 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Sign A</h2>
        <div className="relative w-full h-full rounded overflow-hidden">
          <Image
            src={S1}
            alt="Left Side Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="w-1/2 p-6 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Sign B</h2>
        <div className="relative w-full h-full rounded overflow-hidden">
          <Image
            src={S2}
            alt="Right Side Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}
