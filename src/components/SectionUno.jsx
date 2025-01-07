import '../../public/styles/styles.css'
import logo from '/Imagenes/circuloBlanco.png'
import fondo from '/Imagenes/fondo-01.jpg'
import SliderWord from './SliderWord'
import ButtonConsulta from './ButtonConsulta'
const SectionUno = () => {
    const words = ["Colombia", "México", "Uruguay", "latinoamérica", "Estados unidos" ]
    const time = 200
  return (
    <>
            <section className='section-one' >
            <div className='shadow'></div>
            <img src={fondo} alt="" style={{zIndex: "1", position: "absolute", width: "100%", height: "100%", objectFit: "cover", opacity:".65"}} className='imgbg'/>
            <div style={{zIndex: "2", position: "relative", placeItems: "center", width: "100%"}} className='container-text'>
                <div className='container-img'>
                    <img loading='lazy' src={logo} alt="velas" className='img-backgraund'/>
                </div>
                <div className='slider-hechizo' >
                    <p className='p-hechizo' style={{fontWeight: "semibold", textTransform: "uppercase"}}>Hechizos, amarres de amor y abundancia para tu vida en:</p>
                    <div className="word-slider">
                        <SliderWord words={words} interval={time}/>
                    </div>
                </div>
                <div>
                    <h1 className='p-principal'>Templo de Wicca y magia</h1>
                    <h2 className='p-secundario'> +57 320 5650 747</h2>
                    <h2 className='p-secundario'>Maestra Laura</h2>
                </div>

                <div>
                    <h3 className='p-terciario'>¿Se acabó tu relación y quieres recuperarla?</h3>
                </div>

                <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <ButtonConsulta/>
                </div>
                <div style={{position: "relative" , zIndex: "30"}}>
                    <p className='p-cuarto' style={{zIndex: "30", fontWeight: "500" , position: "relative"}}>Contactanos y te ayudaremos respondemos inmediatamente.</p>
                    <p className='p-cuarto' style={{zIndex: "30", fontWeight: "500" , position: "relative"}}>La primer consulta es gratis</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default SectionUno