import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import { Navigation, A11y } from 'swiper';
import { feedbacks } from './feedbacks';
import classes from "./Feedback.module.scss";
import "../../App.scss"


const result = feedbacks.map((item)=>{
  return(
    <SwiperSlide key={item.author}>

    <div className={classes.container}>
      <p>{item.text}</p>
      <span>-{item.author}</span>
    </div>
    </SwiperSlide>
  )
})

const Feedback = () => {
  return (<div id='feedback' className={classes.Feedback}>
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      autoplay={true}>
        {result}
    </Swiper>
  </div>);
}

export default Feedback;