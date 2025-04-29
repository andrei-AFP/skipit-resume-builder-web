'use client';

import SkillsTabs from "@/components/SkillTabs";
import Summary from "@/components/Summary";
import userStore from "@/stores/userStore";

const SummarySection = () => {
  return (
    <div className="h-full mb-10 text-center lg:sticky lg:top-20 lg:w-[50%] lg:pe-8 lg:flex lg:flex-col lg:items-end lg:text-end">
      {userStore.user && <Summary user={userStore.user} />}
      <>
        <h2 className="text-2xl font-bold my-4">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3 w-full lg:justify-end">
          <SkillsTabs skills={userStore.user?.skills} />
        </div>
      </>
    </div>
  );
};

export default SummarySection;
