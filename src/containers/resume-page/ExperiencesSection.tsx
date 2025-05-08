'use client';

import Experiences from '@/components/Experiences';
import userStore from '@/stores/userStore';

const ExperiencesSection = () => {
  return (
    <div className="text-center lg:w-[50%] lg:ms-auto lg:ps-8 lg:text-left">
      <div className="mb-6">
        <>
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <Experiences experiences={userStore.user?.experiences} />
        </>
      </div>
    </div>
  );
};

export default ExperiencesSection;
