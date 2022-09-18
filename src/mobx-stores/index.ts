import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  create,
} from 'mobx-persist';
import AuthStore from './stores/authStore';
import MoviesStore from './stores/moviesStore';
import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

const hydrate = create({
  storage: AsyncStorage,
  jsonify: true,
})

export class RootStore {
loading: boolean = false;
  Stores = {
    authStore: AuthStore,
    movieStore: MoviesStore
  }

  constructor() {
    makeAutoObservable(this);
  }

  hydratePersistedStores = async () => {
    this.loading = true;
    const hydrationResult = await Promise.all<any>([
      hydrate('authStore',AuthStore),
    ]);
      this.loading = false;
      return hydrationResult;
  };
}
export default new RootStore();

export {
  default as AuthStore,
} from './stores/authStore';