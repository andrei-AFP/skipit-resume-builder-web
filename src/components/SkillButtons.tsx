'use client';

import { observer } from 'mobx-react-lite';
import colorMap from '@/lib/colorMap';
// import * as Icons from '@icons-pack/react-simple-icons';
import SkillIcon from '@/components/SkillIcon';
import { ISkill } from '@/interfaces/ISkill';

interface ISkillButtonsProps {
  skills?: [ISkill];
  hideIcons?: boolean;
}

const SkillButtons = observer((props: ISkillButtonsProps) => {
  return (
    <>
      {props.skills?.map((skill) => (
        <span
          key={skill.id}
          className={`${colorMap[skill.skill_type.color as string]} flex justify-center items-center p-3 text-xs font-medium rounded-full border-1 hover:border-[#ededed] hover:text-[#ededed]`}
        >
          {!props.hideIcons && <SkillIcon {...skill} />}
          {skill.name}
        </span>
      ))}
    </>
  );
});

export default SkillButtons;
