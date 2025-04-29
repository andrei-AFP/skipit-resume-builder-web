'use client';

import { SiCodechef } from '@icons-pack/react-simple-icons';

const Loading = () => {
  return (
    <div className="absolute inset-0 place-items-center grid overflow-hidden">
      <div className="bg-orange-500 w-75 h-75 absolute animate-ping rounded-full delay-10s shadow-xl"></div>
      <div className="bg-orange-500 w-50 h-50 absolute animate-ping rounded-full delay-5s shadow-xl"></div>
      <div className="bg-orange-400 w-25 h-25 absolute animate-ping rounded-full shadow-xl"></div>
      <div className="text-center">
        <SiCodechef width={100} height={100} className="mb-4" />
        LOADING
      </div>
    </div>
  );
};

export default Loading;
