import { ISkill } from '@/interfaces/ISkill';

export interface IExperience {
  id: number;
  company: string;
  logo?: string;
  position?: string;
  location?: string;
  start_date?: Date;
  end_date?: Date;
  description?: string;
  skills?: [ISkill];
}
