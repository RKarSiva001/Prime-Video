// Write your code here

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

import './index.css'

const MoviesSlider = props => {
  const {moviesList} = props

  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {moviesList.map(eachMovie => (
            <MovieItem
              thumbnailUrl={eachMovie.thumbnailUrl}
              videoUrl={eachMovie.videoUrl}
              categoryId={eachMovie.categoryId}
              key={eachMovie.id}
            />
          ))}
        </Slider>
      </div>
    </>
  )
}

export default MoviesSlider
