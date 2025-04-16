import { IExperience } from '@/interfaces/IExperience';
import { ISkillType } from '@/interfaces/ISkillType';

export interface ISkill {
  id: number;
  name: string;
  icon: string | null;
  skill_type: ISkillType;
  experiences: [IExperience];
}
