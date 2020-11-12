import React from "react"
import styles from "./Gallery.module.scss"

const ProductView_Gallery = ({
   imgArray,
   imgCurrent,
   imgPrev,
   arrowLeft,
   imgNext,
   arrowRight,
   name,
}) => {
   let imgFromArray = imgArray
   let imgFromCurrent = imgCurrent
   let imgArrayPrev = imgFromCurrent - 1
   let imgArrayNext = imgFromCurrent + 1
   let imgArrayLast = imgFromArray.length - 1
   let imgOthersToMap = []
   for (let i = 0; i < imgArray.length; i++) {
      if (imgArrayLast === 0) {
         imgOthersToMap.push(
            imgFromArray[null],
            imgFromArray[imgFromCurrent],
            imgFromArray[null]
         )
         break
      } else if (imgFromCurrent === 0 && i === 0) {
         imgOthersToMap.push(
            imgFromArray[imgArrayLast],
            imgFromArray[imgFromCurrent],
            imgFromArray[imgArrayNext]
         )
      } else if (imgFromCurrent === imgArrayLast && i === imgArrayLast) {
         imgOthersToMap.push(
            imgFromArray[imgArrayPrev],
            imgFromArray[imgFromCurrent],
            imgFromArray[0]
         )
      } else if (
         i !== 0 &&
         imgFromCurrent !== 0 &&
         i !== imgArrayLast &&
         imgFromCurrent !== imgArrayLast
      ) {
         imgOthersToMap.push(
            imgFromArray[imgArrayPrev],
            imgFromArray[imgFromCurrent],
            imgFromArray[imgArrayNext]
         )
         break
      }
   }
   return (
      <div className={styles.gallery}>
         <div className={styles.gallery_mainPhotoContainer}>
            <div
               className={styles.mainPhotoContainer_arrowLeft}
               onClick={imgPrev}
            >
               <img
                  className={styles.arrowLeft_image}
                  src={arrowLeft}
                  alt="arrowLeft"
               />
            </div>
            <img
               className={styles.mainPhotoContainer_mainImage}
               src={imgFromArray[imgFromCurrent].fluid.src}
               alt={name}
            />
            <div
               className={styles.mainPhotoContainer_arrowRight}
               onClick={imgNext}
            >
               <img
                  className={styles.arrowRight_image}
                  src={arrowRight}
                  alt="arrowRight"
               />
            </div>
         </div>
         <div className={styles.gallery_othersPhotos}>
            <div className={styles.othersPhotos_singleContainer}>
               <img
                  className={styles.singleContainer_image}
                  onClick={imgPrev}
                  alt=""
                  src={imgOthersToMap[0].fluid.src}
               />
            </div>
            <div className={styles.othersPhotos_singleContainer}>
               <img
                  className={styles.singleContainer_image}
                  src={imgOthersToMap[1].fluid.src}
                  alt={name}
               />
            </div>
            <div className={styles.othersPhotos_singleContainer}>
               <img
                  className={styles.singleContainer_image}
                  onClick={imgNext}
                  alt=""
                  src={imgOthersToMap[2].fluid.src}
               />
            </div>
         </div>
      </div>
   )
}

export default ProductView_Gallery
