import Image from "next/image";

import S1 from "../assets/s1.png";
import S2 from "../assets/s2.png";

export default function Com() {
  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Left Side */}
      <div className="w-1/2 p-6 flex flex-col items-center">
        <div className="bg-white rounded-2xl shadow-xl p-14 w-full h-full flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Sign A</h2>
          <div className="relative w-full h-full rounded-lg overflow-hidden border-8 border-blue-600">
            <Image
              src={S1}
              alt="Left Side Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-1/2 p-6 flex flex-col items-center">
        <div className="bg-white rounded-2xl shadow-xl p-14 w-full h-full flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4 text-green-700">Sign B</h2>
          <div className="relative w-full h-full rounded-lg overflow-hidden border-8 border-green-600">
            <Image
              src={S2}
              alt="Right Side Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
