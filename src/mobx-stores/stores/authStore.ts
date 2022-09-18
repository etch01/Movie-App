
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import { makeObservable, observable, action, runInAction } from "mobx"
  import { makePersistable } from 'mobx-persist-store';

  
  class AuthStore{

    loginLoading:boolean = false;

    isLoggedIn:boolean = false;
  
    token:string = '';
    
    name:string = '';

    constructor(){
        makeObservable(this, {
            loginLoading: observable,
            isLoggedIn: observable,
            token: observable,
            name: observable,
            resetStore: action,
            login: action,
            logout: action,
        })
        makePersistable(this, { name: 'SampleStore', properties: ['name','token','isLoggedIn'], storage: AsyncStorage})
    }
  
    
    public resetStore() {
      this.token = '';
      this.name = '';
      this.isLoggedIn = false;
    }
  
    public async login(userName:string,password:string):Promise<string>{
      try {
        this.loginLoading = true;
       if (userName == 'ivaldi' && password =='testtest'){
        await AsyncStorage.setItem("accessToken", 'testToken');
        await AsyncStorage.setItem("name", userName);
        runInAction(() => {
          this.name = userName;
          this.isLoggedIn = true;
          this.token = 'testToken';
        })

        return new Promise<string>((resolve) => {
          resolve('');
      });
       }else{
        return new Promise<string>((resolve,reject) => {
          reject('Wrong Username or Password');
      });
       }
    } catch (error) {
      return new Promise<string>((resolve,reject) => {
        reject(error);
    });
      } finally {
        this.loginLoading = false;
      }
    }

    public async logout(callback:()=>void):Promise<void> {
      try {
        await AsyncStorage.multiRemove(['accessToken', 'name']);
        this.resetStore();
        callback();
      }catch (err) {
        console.log(err);
      }
    }
  }
  
  export default new AuthStore();
  