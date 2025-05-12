'use client';

import { observer } from 'mobx-react-lite';
import * as Icons from '@icons-pack/react-simple-icons';
import { ISkill } from '@/interfaces/ISkill';
import { capitalize } from '@/lib/helpers';

const SkillIcon = observer(({ name, icon }: ISkill) => {
  const skillIconName = icon ? `Si${capitalize(icon)}` : `Si${capitalize(name)}`;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const SkillIcon = skillIconName in Icons && (Icons as any)[skillIconName];

  return SkillIcon ? (
    <SkillIcon title={name} color="#ededed" size={24} className="inline me-2" />
  ) : null;
});

export default SkillIcon;
