import { IUser } from './IUser';

export interface IEducation {
  id: number;
  user_id: IUser;
  institution: string;
  specialization?: string;
  degree?: string;
  logo?: string;
  location?: string;
  description?: string;
  start_date?: Date;
  end_date?: Date;
}
