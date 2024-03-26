// Write your code here
import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'

class PrimeVideo extends Component {
  getComedyMovies = () => {
    const {moviesList} = this.props
    const comedyMovies = moviesList.filter(
      eachMovieDetails => eachMovieDetails.categoryId === 'COMEDY',
    )
    return comedyMovies
  }

  getActionMovies = () => {
    const {moviesList} = this.props
    const actionMovies = moviesList.filter(
      eachMovieDetails => eachMovieDetails.categoryId === 'ACTION',
    )
    return actionMovies
  }

  render() {
    const comedyMovies = this.getComedyMovies()
    const actionMovies = this.getActionMovies()
    console.log(comedyMovies, actionMovies)

    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
        />
        <h1>Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMovies} />
        <h1>Action Movies</h1>
        <MoviesSlider moviesList={actionMovies} />
      </div>
    )
  }
}

export default PrimeVideo
