'use client';

import { observer } from 'mobx-react-lite';
import skillStore from '@/stores/skillStore';
import SkillButtons from './SkillButtons';
import DraggableScroll from './DraggableScroll';

interface ISkillFilterProps {
  showFilteredSkills?: boolean;
}

export const SkillFilter = observer((props: ISkillFilterProps) => {
  return (
    <>
      <div className="fixed bottom-0 w-full py-4 bg-[#1a1a1a] z-1 flex overflow-x-auto no-scrollbar shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.5)] lg:relative lg:justify-end lg:py-0 lg:shadow-none">
        <DraggableScroll>
          <div className="flex lg:gap-2">
            {skillStore.skillTypes.map((skillType) => (
              <button
                key={skillType.id}
                onClick={() => skillStore.toggleSkillTypeFilter(skillType.id)}
                className={`mx-1 px-3 py-1 border-1 cursor-pointer transition duration-300 lg:mx-0 ${
                  skillStore.selectedSkillTypes.has(skillType.id)
                    ? 'border-white text-white'
                    : 'border-transparent'
                }`}
              >
                {skillType.name}
              </button>
            ))}
          </div>
        </DraggableScroll>
      </div>
      {props.showFilteredSkills && (
        <div className="py-4">
          <ul className="flex flex-wrap gap-2 justify-center lg:justify-end">
            {!!skillStore.selectedSkillTypes.size ? (
              <SkillButtons skills={skillStore.filteredSkills} />
            ) : (
              <SkillButtons skills={skillStore.skills} />
            )}
          </ul>
        </div>
      )}
    </>
  );
});
