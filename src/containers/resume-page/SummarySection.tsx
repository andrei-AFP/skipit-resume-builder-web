'use client';

import SkillButtons from '@/components/SkillButtons';
import { SkillFilter } from '@/components/SkillFilters';
import Summary from '@/components/Summary';
import skillStore from '@/stores/skillStore';
import userStore from '@/stores/userStore';

const SummarySection = () => {
  return (
    <div className="h-full mb-10 text-center lg:sticky lg:top-20 lg:w-[50%] lg:pe-8 lg:flex lg:flex-col lg:items-end lg:text-end">
      {userStore.user && <Summary user={userStore.user} />}
      <>
        <h2 className="text-2xl font-bold my-4">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3 w-full lg:justify-end">
          <SkillFilter />
          <div className="py-4">
            <ul className="flex flex-wrap gap-2 justify-center lg:justify-end">
              <SkillButtons skills={skillStore.skills} />
            </ul>
          </div>
        </div>
      </>
    </div>
  );
};

export default SummarySection;
