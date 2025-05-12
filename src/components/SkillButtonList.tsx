'use client';

import { ISkill } from '@/interfaces/ISkill';
import SkillButton from '@/components/SkillButton';

interface ISkillButtonListProps {
  skills?: ISkill[];
  hideIcons?: boolean;
}

const SkillButtonList = ({ skills, hideIcons }: ISkillButtonListProps) => {
  return (
    <>
      {skills?.map((skill) => <SkillButton key={skill.id} skill={skill} hideIcons={hideIcons} />)}
    </>
  );
};

export default SkillButtonList;
