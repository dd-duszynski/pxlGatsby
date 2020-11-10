import React, { useContext, useState, useEffect } from "react"
import Context from '../../context/context'
import styles from "./HeroVideo.module.scss"
import movie from "../../assets/videos/XL.mp4"

const HeroVideo = () => {
   const [counter, setCounter] = useState(0)
   const [isVideoMount, setVideoMount] = useState(false)
   const {textContent} = useContext(Context)

   const timer = () => {
      if (counter === 3) {
         setCounter(0)
      } else {
         setCounter(counter + 1)
      }
   }
   const intervalId = setInterval(timer, 4900)
   useEffect(() => {
      setVideoMount(true)
      return(() => {
         clearInterval(intervalId)
      })
   }, [])

      const heroMovie = isVideoMount ? (
         <video
            className={styles.heroVideo_movie}
            autoPlay="autoplay"
            muted="muted"
            loop="loop"
         >
            <source
               src={movie}
               type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            />
         </video>
      ) : null

      return (
         <section className={styles.heroVideo}>
            <div className={styles.slider} id="slider1">
               {/* <article
                  className={
                     counter === 0
                        ? styles.slider_slide_active
                        : styles.slider_slide
                  }
               >
                  <h2 className={styles.element_title}>
                     {textContent.mainPage.heroVideo[0][0]}
                  </h2>
                  <div className={styles.element_text}>
                     {textContent.mainPage.heroVideo[0][1]}
                  </div>
               </article>

               <article
                  className={
                     counter === 1
                        ? styles.slider_slide_active
                        : styles.slider_slide
                  }
               >
                  <h2 className={styles.element_title}>
                     {textContent.mainPage.heroVideo[1][0]}
                  </h2>
                  <div className={styles.element_text}>
                     {textContent.mainPage.heroVideo[1][1]}
                  </div>
               </article>

               <article
                  className={
                     counter === 2
                        ? styles.slider_slide_active
                        : styles.slider_slide
                  }
               >
                  <h2 className={styles.element_title}>
                     {textContent.mainPage.heroVideo[2][0]}
                  </h2>
                  <div className={styles.element_text}>
                     {textContent.mainPage.heroVideo[2][1]}
                  </div>
               </article>

               <article
                  className={
                     counter === 3
                        ? styles.slider_slide_active
                        : styles.slider_slide
                  }
               >
                  <h2 className={styles.element_title}>
                     {textContent.mainPage.heroVideo[3][0]}
                  </h2>
                  <div className={styles.element_text}>
                     {textContent.mainPage.heroVideo[3][1]}
                  </div>
               </article> */}

               {heroMovie}
            </div>
         </section>
      )
   }

export default HeroVideo


// import React, { Component } from "react"
// import styles from "./HeroVideo.module.scss"
// import movie from "../../assets/videos/XL.mp4"
// import { contentPL } from "../../content/contentPL"
// import { contentEN } from "../../content/contentEN"
// import { contentDE } from "../../content/contentDE"
// import { contentFR } from "../../content/contentFR"

// //-------------------------------------------------------------------

// class HeroVideo extends Component {
//    state = {
//       counter: 0,
//       videoDidMount: false,
//    }

//    timer = () => {
//       if (this.state.counter === 3) {
//          this.setState({
//             counter: 0,
//          })
//       } else {
//          this.setState({
//             counter: this.state.counter + 1,
//          })
//       }
//    }

//    componentDidMount() {
//       this.setState({
//          videoDidMount: true,
//       })
//       this.intervalId = setInterval(this.timer, 4500)
//    }

//    componentWillUnmount() {
//       clearInterval(this.intervalId)
//    }

//    render() {
//       let lang
//       switch (this.props.language) {
//          case "PL":
//             lang = contentPL
//             break
//          case "EN":
//             lang = contentEN
//             break
//          case "DE":
//             lang = contentDE
//             break
//          case "FR":
//             lang = contentFR
//             break
//          default:
//             lang = contentEN
//       }

//       const heroMovie = this.state.videoDidMount ? (
//          <video
//             className={styles.heroVideo_movie}
//             autoPlay="autoplay"
//             muted="muted"
//             loop="loop"
//          >
//             <source
//                src={movie}
//                type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
//             />
//          </video>
//       ) : null

//       return (
//          <section className={styles.heroVideo}>
//             <div className={styles.slider} id="slider1">
//                <article
//                   className={
//                      this.state.counter === 0
//                         ? styles.slider_slide_active
//                         : styles.slider_slide
//                   }
//                >
//                   <h2 className={styles.element_title}>
//                      {lang.mainPage.heroVideo[0][0]}
//                   </h2>
//                   <div className={styles.element_text}>
//                      {lang.mainPage.heroVideo[0][1]}
//                   </div>
//                </article>

//                <article
//                   className={
//                      this.state.counter === 1
//                         ? styles.slider_slide_active
//                         : styles.slider_slide
//                   }
//                >
//                   <h2 className={styles.element_title}>
//                      {lang.mainPage.heroVideo[1][0]}
//                   </h2>
//                   <div className={styles.element_text}>
//                      {lang.mainPage.heroVideo[1][1]}
//                   </div>
//                </article>

//                <article
//                   className={
//                      this.state.counter === 2
//                         ? styles.slider_slide_active
//                         : styles.slider_slide
//                   }
//                >
//                   <h2 className={styles.element_title}>
//                      {lang.mainPage.heroVideo[2][0]}
//                   </h2>
//                   <div className={styles.element_text}>
//                      {lang.mainPage.heroVideo[2][1]}
//                   </div>
//                </article>

//                <article
//                   className={
//                      this.state.counter === 3
//                         ? styles.slider_slide_active
//                         : styles.slider_slide
//                   }
//                >
//                   <h2 className={styles.element_title}>
//                      {lang.mainPage.heroVideo[3][0]}
//                   </h2>
//                   <div className={styles.element_text}>
//                      {lang.mainPage.heroVideo[3][1]}
//                   </div>
//                </article>

//                {heroMovie}
//             </div>
//          </section>
//       )
//    }
// }

// export default HeroVideo


