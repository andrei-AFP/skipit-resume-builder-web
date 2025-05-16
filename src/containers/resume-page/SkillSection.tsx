'use client';

import ExperienceList from '@/components/ExperienceList';
import EducationList from '@/components/EducationList';
import LanguageList from '@/components/LanguageList';
import userStore from '@/stores/userStore';

const SkillSection = () => {
  const experiences = userStore.user?.experiences;
  const educations = userStore.user?.educations;
  const languages = userStore.user?.languages;

  return (
    <div className="text-center lg:w-[50%] lg:ms-auto lg:ps-8 lg:text-left">
      {experiences && (
        <div>
          <h2 className="sticky top-0 bg-[#1a1a1a] z-10 text-2xl font-bold py-4">Experience</h2>
          <ExperienceList experiences={experiences} />
        </div>
      )}
      {educations && (
        <div>
          <h2 className="sticky top-0 bg-[#1a1a1a] z-10 text-2xl font-bold py-4">Education</h2>
          <EducationList educations={educations} />
        </div>
      )}
      {languages && (
        <div>
          <h2 className="sticky top-0 bg-[#1a1a1a] z-10 text-2xl font-bold py-4">
            Language Skills
          </h2>
          <LanguageList languages={languages} />
        </div>
      )}
    </div>
  );
};

export default SkillSection;
