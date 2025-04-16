'use client';

import { observer } from 'mobx-react-lite';
import * as Icons from '@icons-pack/react-simple-icons';
import { ISkill } from '@/interfaces/ISkill';
import { capitalize } from '@/lib/helpers';

const SkillIcon = observer((skill: ISkill) => {
  const skillIconName = skill.icon ? `Si${capitalize(skill.icon)}` : `Si${capitalize(skill.name)}`;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const SkillIcon = skillIconName in Icons && (Icons as any)[skillIconName];

  return (
    SkillIcon && <SkillIcon title={skill.name} color="#ededed" size={24} className="inline me-2" />
  );
});

export default SkillIcon;
