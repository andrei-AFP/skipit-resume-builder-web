'use client';

import ExperienceList from '@/components/ExperienceList';
import userStore from '@/stores/userStore';

const SkillSection = () => {
  const experiences = userStore.user?.experiences;

  return (
    <div className="text-center lg:w-[50%] lg:ms-auto lg:ps-8 lg:text-left">
      <div className="mb-6">
        <>
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <ExperienceList experiences={experiences} />
        </>
      </div>
    </div>
  );
};

export default SkillSection;
