// Write your code here
import ReactPlayer from 'react-player'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {thumbnailUrl, videoUrl} = props
  return (
    <Popup
      modal
      trigger={
        <button type="button">
          <img src={thumbnailUrl} alt="thumbnail" />
        </button>
      }
    >
      {close => (
        <>
          <div>
            <ReactPlayer url={videoUrl} controls />
          </div>
          <button
            type="button"
            data-testid="closeButton"
            onClick={() => close()}
          >
            X<IoMdClose />
          </button>
        </>
      )}
    </Popup>
  )
}

export default MovieItem
