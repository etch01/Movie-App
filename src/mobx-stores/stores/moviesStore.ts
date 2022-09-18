
  import { makeObservable, observable, action, runInAction } from "mobx"
  import { NetworkLayer } from "../../axios/axios";
  import {getMovies} from '../../axios/requests';
  import Movie from '../store-interfaces/movieStoreInterface';

  
  class MovieStore{

    loadingMovies:boolean = false;
    movies:Movie[] = []

    constructor(){
        makeObservable(this, {
            loadingMovies: observable,
            movies: observable,
            getCarMovies: action,
        })
    }
  
    public async getCarMovies():Promise<void>{
      try {
        this.loadingMovies = true;
        var network = new NetworkLayer();
        let data = await network.getRequest(getMovies());
        runInAction(()=>{
            this.movies = data?.Search
            this.loadingMovies = false;
        })        
      }catch(error){
        this.loadingMovies = false;
        console.log(error);

      }
    }

  }
  
  export default new MovieStore();
  