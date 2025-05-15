import { ISkill } from '@/interfaces/ISkill';
import { IExperience } from '@/interfaces/IExperience';

export interface IUser {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  birthday?: string;
  location?: string;
  phone_number?: string;
  linkedin_url?: string;
  github_url?: string;
  skills?: ISkill[];
  experiences?: [IExperience];
  skills_by_type?: { string: ISkill[] };
}
