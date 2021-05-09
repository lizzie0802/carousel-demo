import React from 'react'
import  './carousel.css'

interface CarouselProps {
  onBeforeChange: (currentIndex: number, nextIndex: number) => void
  onAfterChange: (nextIndex: number) => void
  children: React.ReactNode
}
export interface CarouselRefProps {
  prev: () => void;
  next: () => void;
}
export const CarouselDemo = React.forwardRef<CarouselRefProps, CarouselProps>(({children}, ref) => {
return <div className='carousel'>
  <div className='wrapper'>
    <div className='content'>
      {children}
    </div>
  </div>
</div>
})
