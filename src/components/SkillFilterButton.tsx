'use client';

import { observer } from 'mobx-react-lite';
import skillStore from '@/stores/skillStore';
import { ISkillType } from '@/interfaces/ISkillType';

interface SkillFilterButtonProps {
  skillType: ISkillType;
}

const SkillFilterButton = observer(({ skillType }: SkillFilterButtonProps) => {
  const isSelected = skillStore.selectedSkillTypes.has(skillType.id);

  return (
    <button
      onClick={() => skillStore.toggleSkillTypeFilter(skillType.id)}
      className={`px-3 py-1 border cursor-pointer transition duration-300 ${
        isSelected ? 'border-white text-white' : 'border-transparent'
      }`}
    >
      {skillType.name}
    </button>
  );
});

export default SkillFilterButton;
