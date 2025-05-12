'use client';

import { SiCodechef } from '@icons-pack/react-simple-icons';

const Loading = () => {
  return (
    <div className="absolute inset-0 grid place-items-center overflow-hidden">
      <div className="absolute w-75 h-75 animate-ping rounded-full bg-orange-500 delay-1000 shadow-xl"></div>
      <div className="absolute w-50 h-50 animate-ping rounded-full bg-orange-500 delay-500 shadow-xl"></div>
      <div className="absolute w-25 h-25 animate-ping rounded-full bg-orange-400 shadow-xl"></div>
      <div className="text-center">
        <SiCodechef width={100} height={100} className="mb-4" />
        LOADING
      </div>
    </div>
  );
};

export default Loading;
