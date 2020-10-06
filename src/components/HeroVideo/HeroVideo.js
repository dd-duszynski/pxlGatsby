import React, { Component } from "react"
import styles from "./HeroVideo.module.scss"
import movie from "../../assets/videos/XL.mp4"
import { GeneralPL } from "../../content/GeneralPL"
import { GeneralEN } from "../../content/GeneralEN"
import { GeneralDE } from "../../content/GeneralDE"
import { GeneralFR } from "../../content/GeneralFR"

//-------------------------------------------------------------------

class HeroVideo extends Component {
   state = {
      counter: 0,
      videoDidMount: false,
   }

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
      let lang
      switch (this.props.language) {
         case "PL":
            lang = GeneralPL
            break
         case "EN":
            lang = GeneralEN
            break
         case "DE":
            lang = GeneralDE
            break
         case "FR":
            lang = GeneralFR
            break
         default:
            lang = GeneralEN
      }

      const heroMovie = this.state.videoDidMount ? (
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
               <article
                  className={
                     this.state.counter === 0
                        ? styles.slider_slide_active
                        : styles.slider_slide
                  }
               >
                  <h2 className={styles.element_title}>
                     {lang.HeroVideo[0][0]}
                  </h2>
                  <div className={styles.element_text}>
                     {lang.HeroVideo[0][1]}
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
                     {lang.HeroVideo[1][0]}
                  </h2>
                  <div className={styles.element_text}>
                     {lang.HeroVideo[1][0]}
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
                     {lang.HeroVideo[2][0]}
                  </h2>
                  <div className={styles.element_text}>
                     {lang.HeroVideo[2][0]}
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
                     {lang.HeroVideo[3][0]}
                  </h2>
                  <div className={styles.element_text}>
                     {lang.HeroVideo[3][0]}
                  </div>
               </article>

               {heroMovie}
            </div>
         </section>
      )
   }
}

export default HeroVideo
