import React, {useRef} from 'react';
import './App.css';
import Carousel, {CarouselRefProps} from "./carousel";
function App() {
  const beforeChange = (current: number, next: number) => {
    console.log(current, next)
  }
  const afterChange = (current: number) => {
    console.log(current)
  }
  const carouselRef = useRef<CarouselRefProps>() as React.MutableRefObject<CarouselRefProps>
  return (
    <div className="App">
      <Carousel  width={400} beforeChange={beforeChange} afterChange={afterChange} ref={carouselRef} autoplay>
        {Array(3)
            .fill(0)
            .map((_item, index) => (
                <div key={index} className='carousel-content'>{index + 1}</div>
            ))}
      </Carousel>
    </div>
  );
}

export default App;
