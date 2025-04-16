import { makeAutoObservable, runInAction } from 'mobx';
import api from '@/lib/api';
import { IUser } from '@/interfaces/IUser';

class UserStore {
  user: IUser | null = null;
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchUser(userId: string | undefined) {
    this.loading = true;
    try {
      const response = await api.get<IUser>(`/users/${userId}`);

      runInAction(() => {
        this.user = response.data;
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
