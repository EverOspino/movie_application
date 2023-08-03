// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzdjMWE0ZGVkNjJkYjM3NDhiZDk3YjJkMDQyMjg3NyIsInN1YiI6IjY0YzUxNTY3OWI2ZTQ3MDBjNTA3MmQ0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0UTusCm3cDxfekj4OKFZitSEDqxhKHxoJifwJteOHbY'
//     }
//   };
  

// export default fetchMovies = async () => {
//     try {
//         const response = await fetch('https://api.themoviedb.org/3/discover/movie', options);
//         const json = await response.json();
//         return json;
//     } catch (error) {
//         return 'error';
//     }
    
//   };

// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzdjMWE0ZGVkNjJkYjM3NDhiZDk3YjJkMDQyMjg3NyIsInN1YiI6IjY0YzUxNTY3OWI2ZTQ3MDBjNTA3MmQ0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0UTusCm3cDxfekj4OKFZitSEDqxhKHxoJifwJteOHbY'
//     }
//   };
  
//   export const fetchMovies = () => {
//     fetch('https://api.themoviedb.org/3/discover/movie', options)
//     .then(response => response.json())
//     .then(response => {return(response)})
//     .catch(err => {return({})});
//   }
  
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/discover/movie',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzdjMWE0ZGVkNjJkYjM3NDhiZDk3YjJkMDQyMjg3NyIsInN1YiI6IjY0YzUxNTY3OWI2ZTQ3MDBjNTA3MmQ0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0UTusCm3cDxfekj4OKFZitSEDqxhKHxoJifwJteOHbY'
  }
};

export const getMovies = {
  fetchData: () => axios
  .request(options)
  .then(response => response.data)
  .catch(error => error)
}