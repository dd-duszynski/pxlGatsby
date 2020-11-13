import React from "react"
import Carousel from "react-elastic-carousel"
import './Carousel.css'

const CarouselPXL = ({ children, itemsToShow, itemsToScroll }) => {
   console.log(typeof (itemsToShow));   
   return (
      <Carousel 
         itemsToShow={itemsToShow} 
         itemsToScroll={itemsToScroll}
         disableArrowsOnEnd={false}
      >
         {children}
      </Carousel>
   )
}

export default CarouselPXL
