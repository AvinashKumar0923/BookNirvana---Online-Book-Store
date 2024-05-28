import React from 'react'

const SliderBooks = () => {
  return (
    <>
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://img.freepik.com/free-vector/minimal-book-club-twitch-banner_23-2149758171.jpg?w=1380&t=st=1716849033~exp=1716849633~hmac=01c2d84822b7b1ba08a413c04ef49ed19f1acc7ab53550351bf34c8f8c2f5ad7" class="d-block w-full h-96 object-fill" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://img.freepik.com/free-vector/minimal-book-club-youtube-channel-art_23-2149758162.jpg?t=st=1716849024~exp=1716852624~hmac=624971f749da32266c3639b485d71756a51b00ee44734215cefddabcb1275bc8&w=1380" class="d-block w-full h-96 object-fill" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://img.freepik.com/free-vector/minimal-book-club-twitter-header_23-2149758165.jpg?t=st=1716849069~exp=1716852669~hmac=4254f5771d6051755aa10f59dabc475e882e6bd8893bbc5a5b34dc127aadf391&w=1380" class="d-block w-full h-96 object-fill" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div></>
  )
}

export default SliderBooks
