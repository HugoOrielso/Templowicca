import { useEffect } from 'react'
import '../../public/styles/sectionDos.css'
import videoUno from '/videos/videoUno.mp4'
import testimonioUno from '/Imagenes/Testimonios/testimonioUno.jpg'
import testimonioDos from '/Imagenes/Testimonios/testimonioDos.jpg'
import testimonioTres from '/Imagenes/Testimonios/testimonioTres.jpg'
import testimonioCuatro from '/Imagenes/Testimonios/testimonioCuatro.jpg'
import testimonioCinco from '/Imagenes/Testimonios/testimonioCinco.jpg'
import videoDos from '/videos/videoDos.mp4'
import videoTres from '/videos/videoTres.mp4'
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/autoplay';
import 'swiper/css/free-mode'
import muerteUno from '/Imagenes/santaMuerteUno.jpg'
import muerteDos from '/Imagenes/muerteDinero.jpg'

const SectionDos = () => {
    useEffect(()=>{
        let images = document.querySelectorAll(".img-slide")
        images.forEach(img => img.addEventListener("mouseover", ()=>{
            images.forEach(function(otherImg){
                if(otherImg !== img){
                    img.style.background = "black"
                }
            })
        }))
        images.forEach(img => img.addEventListener("mouseout", ()=>{
            images.forEach(otherImg =>{
                otherImg.style.opacity = 1
            })
        }))
    },[])
  return (
    <section className='section-dos ' >
        
        <div className="parent-container">
          <div className="child-circle-1"></div>
          <div className="child-circle-2"></div>
        </div>
        <div className='shadow'></div>
        <div className='shadow-up'></div>
        <div>
            <div >
                <h1 className='title-testimonio' style={{padding: ".5em", textTransform: "uppercase"}}>Testimonios</h1>
            </div>
        </div>

        <section className='container-inf'>
            <div className='container-videos'>
                <video  style={{maxHeight: "1400px", maxWidth: "350px"}} controls  className='videoUno-testimonio'>
                    <source src={videoUno} type='video/mp4' className=''/>
                </video>
                <video style={{maxWidth: "300px", maxHeight: "600px", minHeight: "400px" , minWidth: "250px"}} controls  className='videos-testimonio'>
                    <source src={videoDos} type='video/mp4' className='video'/>
                </video>
                <video style={{maxWidth: "300px", maxHeight: "600px", minHeight: "400px" , minWidth: "250px"}} controls  className='videos-testimonio'>
                    <source src={videoTres} type='video/mp4' className=''/>
                </video>
            </div>
            <div className='inf' >
                <h1 className='main-paragrahp'>Maestra Laura:</h1>
                <div style={{display: "flex", flexFlow: "column nowrap", textAlign: "start", marginRight: "1em"}}>
                    <p className='relato'>A lo largo de mi trayectoria, he cultivado un profundo conocimiento de las herramientas esotéricas, desde la astrología hasta la lectura de cartas del tarot, permitiéndome ofrecer una guía personalizada y precisa. Mi compromiso va más allá de las predicciones; es una misión de empoderamiento, una búsqueda conjunta de la verdad interna y la armonía cósmica.</p>
                </div>
                <div style={{display: "flex", flexFlow: "column nowrap", textAlign: "start",  marginRight: "1em"}}>
                    <p className='relato'>Agradezco la confianza de aquellos que han cruzado mi camino, permitiéndome ser parte de sus historias y contribuir a la tejedura de sus destinos.</p>
                    <p className='relato'>Si buscas respuestas, consuelo o simplemente deseas explorar los misterios que la vida tiene para ofrecer, estoy aquí para guiarte en este fascinante viaje espiritual. Juntos, podemos desvelar los secretos que aguardan en el universo y abrir las puertas hacia un futuro lleno de posibilidades infinitas. <span style={{fontWeight: "bold"}}>¡Que la luz guíe tu camino!</span> </p>
                </div>
            </div>
        </section>
        <div className='imgs-muerte'>
            <div>
            <img src={muerteUno} alt="Santa muerte" className='img-muerte'/>
            </div>
            <div>

            <img src={muerteDos} alt="Santa muerte" className='img-muerte'/>
            </div>
        </div>
        <div>
        <section className='testimonios' >
            <div className='slide-track' >
                <div className='slide'>
                    <img loading='lazy' src={testimonioUno} alt="testimonios" className='img-slide'/>
                </div>
                <div className='slide'>
                    <img loading='lazy' src={testimonioDos} alt="testimonios" className='img-slide'/>
                </div>
                <div className='slide'>
                    <img loading='lazy' src={testimonioTres} alt="testimonios" className='img-slide'/>
                </div>
                <div className='slide'>
                    <img loading='lazy' src={testimonioCuatro} alt="testimonios" className='img-slide'/>
                </div>
                <div className='slide'>
                    <img loading='lazy' src={testimonioCinco} alt="testimonios" className='img-slide'/>
                </div>
            </div>
        </section>
        </div>
        <div className="parent-container">
      <div className="child-circle-1"></div>
      <div className="child-circle-2"></div>
    </div>
    </section>
  )
}

export default SectionDos