'use client';

import { observer } from 'mobx-react-lite';
import colorMap from '@/lib/colorMap';
import SkillIcon from '@/components/SkillIcon';
import { ISkill } from '@/interfaces/ISkill';
import skillStore from '@/stores/skillStore';

interface ISkillButtonsProps {
  skills?: ISkill[];
  hideIcons?: boolean;
}

const SkillButtons = observer((props: ISkillButtonsProps) => {
  return (
    <>
      {props.skills?.map((skill) => (
        <div
          key={skill.id}
          className={`
            ${colorMap[skill.skill_type.color as string]}
            ${!!skillStore.selectedSkillTypes.size && !skillStore.selectedSkillTypes.has(skill.skill_type.id) ? 'grayscale' : 'shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.5)]'}
            group relative inline-flex items-center overflow-hidden rounded-full px-4 py-2 transition duration-300 cursor-pointer
            `}
        >
          <div className="absolute inset-0 flex items-center [container-type:inline-size]">
            <div className="absolute h-[100cqw] w-[100cqw] animate-spin bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)] opacity-0 transition duration-300 group-hover:opacity-100"></div>
          </div>
          <div className="absolute inset-0.5 rounded-full bg-[#1a1a1a]/90"></div>
          <div className="absolute bottom-0 left-1/2 h-1/3 w-4/5 -translate-x-1/2 rounded-full bg-white/10 opacity-50 blur-md transition-all duration-500 group-hover:h-2/3 group-hover:opacity-100"></div>
          <div className="relative inline-flex items-center gap-2">
            <span className="mt-px bg-gradient-to-b from-white/25 to-white bg-clip-text font-medium text-sm text-transparent transition-all duration-200">
              {!props.hideIcons && <SkillIcon {...skill} />}
              {skill.name}
            </span>
          </div>
        </div>
      ))}
    </>
  );
});

export default SkillButtons;
