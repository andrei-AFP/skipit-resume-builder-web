'use client';

import { observer } from 'mobx-react-lite';
import skillStore from '@/stores/skillStore';
import SkillButtonList from '@/components/SkillButtonList';
import DraggableScroll from '@/components/DraggableScroll';
import SkillFilterButton from '@/components/SkillFilterButton';

interface ISkillFilterListProps {
  showFilteredSkills?: boolean;
}

const SkillFilterList = observer(({ showFilteredSkills }: ISkillFilterListProps) => {
  const skillsToShow = skillStore.selectedSkillTypes.size
    ? skillStore.filteredSkills
    : skillStore.skills;

  return (
    <>
      <div className="fixed bottom-0 w-full py-4 bg-[#1a1a1a] z-1 flex overflow-x-auto no-scrollbar shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.5)] lg:relative lg:justify-end lg:py-0 lg:shadow-none">
        <DraggableScroll>
          <div className="flex px-5 space-x-2 lg:px-0 lg:space-x-0 lg:gap-2">
            {skillStore.skillTypes.map((skillType) => (
              <SkillFilterButton key={skillType.id} skillType={skillType} />
            ))}
          </div>
        </DraggableScroll>
      </div>

      {showFilteredSkills && (
        <div className="py-4">
          <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
            <SkillButtonList skills={skillsToShow} />
          </div>
        </div>
      )}
    </>
  );
});

export default SkillFilterList;
