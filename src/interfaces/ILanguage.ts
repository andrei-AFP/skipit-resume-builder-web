import { IUser } from './IUser';

export interface ILanguage {
  id: number;
  user_id: IUser;
  name: string;
  proficiency?: string;
}
