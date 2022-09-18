import axios from 'axios';

export class NetworkLayer {
    //The base url should be inside ENV file not like this
    private baseURL:string = 'https://www.omdbapi.com/?apikey=e81b2e45';

    getRequest = (endpoint:string):Promise<any> =>{
        const url = this.baseURL + endpoint;
        return new Promise(function (resolve, reject) {
          try {
            axios
              .get(url, {
                timeout: 30000,
              })
              .then((res) => {
                resolve(res.data);
              })
              .catch((err) => { reject(err) });
          } catch (err) {
            reject(err);
          }
        });
    }
}