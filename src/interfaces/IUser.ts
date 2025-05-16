import { ISkill } from '@/interfaces/ISkill';
import { IExperience } from '@/interfaces/IExperience';
import { IEducation } from './IEducation';
import { ILanguage } from './ILanguage';

export interface IUser {
  id: number;
  username: string;
  name: string;
  email: string;
  avatar?: string;
  birthday?: string;
  location?: string;
  phone_number?: string;
  linkedin_url?: string;
  github_url?: string;
  skills?: ISkill[];
  experiences?: IExperience[];
  educations?: IEducation[];
  languages?: ILanguage[];
  skills_by_type?: { string: ISkill[] };
}
