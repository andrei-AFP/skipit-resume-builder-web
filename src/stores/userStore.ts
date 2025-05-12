import { makeAutoObservable, runInAction } from 'mobx';
import api from '@/lib/api';
import { IUser } from '@/interfaces/IUser';
import skillStore from '@/stores/skillStore';

class UserStore {
  user: IUser | null = null;
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  async fetch(path: string) {
    this.loading = true;
    try {
      const response = await api.get<IUser>(path);

      runInAction(() => {
        this.user = response.data;
        if (this.user.skills) skillStore.setSkills(this.user.skills);
      });
    } catch (error) {
      console.error('Error fetching user:', error);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }
}

const userStore = new UserStore();
export default userStore;
