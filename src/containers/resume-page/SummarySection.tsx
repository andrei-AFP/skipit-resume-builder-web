'use client';

import SkillButtonList from '@/components/SkillButtonList';
import SkillFilterList from '@/components/SkillFilterList';
import Summary from '@/components/Summary';
import skillStore from '@/stores/skillStore';
import userStore from '@/stores/userStore';

const SummarySection = () => {
  const { user } = userStore;
  const { skills } = skillStore;

  return (
    <div className="h-full mb-10 text-center lg:sticky lg:top-20 lg:w-[50%] lg:mb-0 lg:pe-8 lg:flex lg:flex-col lg:items-end lg:text-end">
      {user && <Summary user={user} />}
      {skills.length > 0 && (
        <>
          <h2 className="text-2xl font-bold my-4">Skills</h2>
          <div className="flex flex-wrap justify-center gap-3 w-full lg:justify-end">
            <SkillFilterList />
            <div className="lg:pt-4">
              <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
                <SkillButtonList skills={skills} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SummarySection;
