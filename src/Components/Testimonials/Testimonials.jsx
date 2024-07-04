import React, { useRef } from 'react'
import './Testimanials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
    const slider = useRef();
    let tx =0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}
const slideBackward =()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`

}
  return (
    <div className='testimonials'>
      <img src={next_icon} alt='' className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt='' className='back-btn' onClick={slideBackward}/>
      <div className='slider'>
        <ul ref={slider} >
            <li>
                <div className='slide'>
                    <div className='user-info'>
                    <img src={user_1} alt=''/>
                    <div>
                        <h3>Grace Hawi</h3>
                        <span>Suna, Migori</span>
                    </div>
                    </div>
                    <p>Edupath transformed my learning experience! The comprehensive courses, expert instructors, and engaging content helped me master new skills and excel in my studies. The supportive community and interactive platform made learning enjoyable and effective. I highly recommend EduCity to anyone looking to advance their education and career.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                    <img src={user_2} alt=''/>
                    <div>
                        <h3>Omondi Omollo</h3>
                        <span>Katito, Kisumu</span>
                    </div>
                    </div>
                    <p>EduPath has been a game-changer for my education. The interactive lessons and real-world applications made learning so much easier. The support from the instructors and community is unparalleled. I feel more confident in my skills and ready to tackle any challenge.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                    <img src={user_3} alt=''/>
                    <div>
                        <h3>Wanjiru Mwangi</h3>
                        <span>Kagochi, Karatina</span>
                    </div>
                    </div>
                    <p>Choosing EduPath was the best decision I made for my academic growth. The platforms diverse courses and expert guidance have expanded my knowledge and opened new career opportunities. The learning experience is seamless and enjoyable. I highly recommend EduPath to anyone eager to learn and succeed</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                    <img src={user_4} alt=''/>
                    <div>
                        <h3>Hamisi Hamadi</h3>
                        <span>Nyali, Mombasa</span>
                    </div>
                    </div>
                    <p>EduPath provides an exceptional learning experience with its user-friendly interface and well-structured courses. The instructors are knowledgeable and always ready to help. I've gained valuable skills and insights that have significantly boosted my career. EduPath is the perfect platform for anyone looking to enhance their education</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
