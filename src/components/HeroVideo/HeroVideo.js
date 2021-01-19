import React, { Component } from "react"
import styles from "./HeroVideo.module.scss"
import movie from "../../assets/videos/XL.mp4"
import Context from "../../context/context"

class HeroVideo extends Component {
   state = {
      counter: 0,
      videoDidMount: false,
   }
   static contextType = Context

   timer = () => {
      if (this.state.counter === 3) {
         this.setState({
            counter: 0,
         })
      } else {
         this.setState({
            counter: this.state.counter + 1,
         })
      }
   }

   componentDidMount() {
      this.setState({
         videoDidMount: true,
      })
      this.intervalId = setInterval(this.timer, 4500)
   }

   componentWillUnmount() {
      clearInterval(this.intervalId)
   }

   render() {
      const { textContent } = this.context

      const heroMovie = this.state.videoDidMount ? (
         <video
            className={styles.heroVideo_movie}
            autoPlay="autoplay"
            muted="muted"
            loop="loop"
         >
            <source
               src={movie}
               type='video/mp4'
            />
         </video>
      ) : null

      return (
         <section className={styles.heroVideo}>
            <div className={styles.slider} id="slider1">
               <article
                  className={
                     this.state.counter === 0
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
                     this.state.counter === 1
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
                     this.state.counter === 2
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
                     this.state.counter === 3
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
               </article>
               {heroMovie}
            </div>
         </section>
      )
   }
}

export default HeroVideo
