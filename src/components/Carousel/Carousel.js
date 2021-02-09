import React from "react"
import Carousel from "react-elastic-carousel"
import './Carousel.css'

const CarouselPXL = ({ children, itemsToShow, itemsToScroll, noPagination }) => {
   return (
      <Carousel 
         itemsToShow={itemsToShow} 
         itemsToScroll={itemsToScroll}
         disableArrowsOnEnd={false}
         pagination={noPagination ? false : true}
      >
         {children}
      </Carousel>
   )
}

export default CarouselPXL
