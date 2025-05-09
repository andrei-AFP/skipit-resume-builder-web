import { ISkill } from '@/interfaces/ISkill';

export interface ISkillType {
  id: number;
  name: string;
  color?: string;
  skills?: ISkill[];
}
