import '../../public/styles/sectionTres.css'
import amarres from '/Imagenes/imagenesComplementarias/Amarres.jpg'
import fortuna from '/Imagenes/imagenesComplementarias/fortuna.jpg'
import amuletos from '/Imagenes/imagenesComplementarias/amuletos.jpg'
import muerteDos from '/Imagenes/santaMuerteDos.jpg'
import revelaciones from '/Imagenes/imagenesComplementarias/revelaciones.jpg'


import videoPortada from '/Imagenes/videoPortada.mp4'
import Svg from './Svg'
const SectionTres = () => {
  return (
     
    <section className='section-tres' style={{padding: "1em"}}>
      <section className='informacion-adicional' style={{position: "relative", zIndex: "40"}}>
        <div id="container-stars">
          <div id="stars"></div>
        </div>
        <div className='about'>
          <h1>Algo sobre nosotros...</h1>
          <p>Somos un templo espiritual expertos hace más de 25 años brindando servicios a las personas, trabajamos  <span style={{fontWeight: "bold"}}> EXCLUSIVAMENTE</span> con los ángeles  y la santa  de la muerte.</p>
          <p>Déjate cautivar por nuestra amplia gama de servicios que van desde lecturas personalizadas hasta trabajos de amor,</p>
          <p>abundancia y prosperidad, consejos para armonizar tu energía interior. En nuestro portal, encontrarás un refugio acogedor donde no te vamos a juzgar</p>
          <p>si no por el contrario te vamos ayudar con la situación  por la que estés pasando ya que contamos con muchos años de experiencia en este campo espiritual y esotérico..</p>
          <p>Nosotros podemos Ayudarte trabajamos siempre de la mano de los santos y de la santa de la muerte Atrévete a salir de tu zona de Confort y a cambiar tu vida para bien.</p>
        </div>

        <div className='video-about'>
          <video  muted  autoPlay controls loop className='videos-testimonio'>
            <source src={videoPortada} type='video/mp4' auto className='video'/>
          </video>
        </div>
      </section>
      <div className="parent-container">
        <div className="child-circle-1"></div>
        <div className="child-circle-2"></div>
      </div>
      <div className='shadow-up'></div> 
      {/* <div className="bg-shadow"></div> */}
      <h1 className='t-servicios'>Servicios</h1>
      <div className='servicios' style={{position: "relative", zIndex:"4"}}>
        <ul className='grid'>
          <div  className='wrapper'>
            <div className='ground'></div>
            <div id="container-stars">
              <div id="stars"></div>
            </div>
            <div className='img-grilla'>
              <img loading='lazy' src={amarres} alt="amarres"  className='img-servicio'/>
            </div>
            <h2>Amarres de amor </h2>
            
            <p style={{textAlign: "start"}}>Si tienes dudas sobre tu relación ó de tu pareja, un estudio de cartas y energías puede brindarte una nueva perspectiva.</p>
            <p style={{textAlign: "start"}}>A través de las cartas, podemos ayudarte a explorar los patrones de tu relación y a entender las razones detrás de tus sentimientos y pensamientos.</p>
            <p style={{textAlign: "start"}}>A veces, el tarot puede revelar información que te permita tomar decisiones importantes sobre tu relación y el futuro de tu vida amorosa.</p>

            <a target='_blank' rel='noreferrer' to="https://api.whatsapp.com/send?phone=14504973885&%20%20%20%20%20text=Hola%20me%20interesa%20tu%20servicio%20de%20esoterismo" className='btn-servicios' >Quiero un amarre <Svg/> </a>
          </div>

          <div  className='wrapper'  >
            <div className='ground'></div>
            <div id="container-stars">
              <div id="stars"></div>
            </div>
            <div className='img-grilla'>
              <img loading='lazy' src={amuletos} alt="amuletos"  className='img-servicio'/>
            </div>
            <h2>Amuletos</h2>
 
            <p style={{textAlign: "start"}}>Descubre el poder de la protección y la buena fortuna a través de amuletos personalizados.</p>
            <p style={{textAlign: "start"}}>En mi servicio, creo amuletos cargados de energía positiva y simbolismo especial para acompañarte en tu jornada.</p>
            <p style={{textAlign: "start"}}>Desde piedras hasta símbolos sagrados, cada amuleto se confecciona con cuidado y se carga con intenciones positivas.</p>
            <a target='_blank' rel='noreferrer' to="https://api.whatsapp.com/send?phone=14504973885&     text=Hola%20me%20interesa%20tu%20servicio%20de%20esoterismo" className='btn-servicios' >Quiero un amuleto <Svg/></a>
          </div>

          <div  className='wrapper'>
          <div className='ground'></div>
            <div id="container-stars">
              <div id="stars"></div>
            </div>
            <div className='img-grilla'>
              <img src={muerteDos} alt="salud"  className='img-servicio'/>
            </div>
            <h2>Protección</h2>
            <p style={{textAlign: "start"}}>Descubre la tranquilidad y seguridad con nuestro servicio de protección personalizada.</p>
            <p style={{textAlign: "start"}}>Enfrenta la vida con confianza, sabiendo que estás rodeado de energías positivas y resguardado por capas de protección espiritual.</p>
            <p style={{textAlign: "start"}}>Confía en nuestro enfoque ético y profesional para crear un escudo espiritual que te acompañe en tu día a día. Protege tu bienestar emocional y físico, y da un paso hacia un futuro más seguro y equilibrado.</p>
            <a target='_blank' rel='noreferrer' to="https://api.whatsapp.com/send?phone=14504973885&     text=Hola%20me%20interesa%20tu%20servicio%20de%20esoterismo" className='btn-servicios' >Quiero protegerme <Svg/></a>
          </div>

          <div  className='wrapper'>
          <div className='ground'></div>
          <div id="container-stars">
              <div id="stars"></div>
            </div>
            <div className='img-grilla'>
              <img loading='lazy' src={fortuna} alt="fortuna"  className='img-servicio'/>
            </div>
            <h2>Fortuna</h2>
            <p style={{textAlign: "start"}}>En la senda esotérica, la búsqueda de la fortuna va más allá de lo material, abarcando dimensiones energéticas y espirituales.</p>
            <p style={{textAlign: "start"}}>La creencia en la influencia de las energías cósmicas y el poder de la intención son fundamentales para quienes exploran el esoterismo como un camino hacia la abundancia.</p>
            <p style={{textAlign: "start"}}>Es importante recordar que, independientemente del camino que elijas, la ética y el respeto deben guiar tus acciones. La fortuna auténtica se encuentra no solo en la materialidad, sino también en el equilibrio espiritual y emocional de nuestras vidas.</p>
            <a target='_blank' rel='noreferrer' to="https://api.whatsapp.com/send?phone=14504973885&     text=Hola%20me%20interesa%20tu%20servicio%20de%20esoterismo" className='btn-servicios' >Quiero la fortuna <Svg/></a>
          </div>

          <div  className='wrapper'>
          <div className='ground'></div>
          <div id="container-stars">
              <div id="stars"></div>
            </div>
            <div className='img-grilla'>
              <img loading='lazy' src={revelaciones} alt="revelaciones"  className='img-servicio'/>
            </div>
            <h2>Revelaciones</h2>
             
            <p style={{textAlign: "start"}}>Sumérgete en el fascinante mundo de las revelaciones con nuestro servicio especializado.</p>
            <p style={{textAlign: "start"}}>A través de prácticas esotéricas y lecturas intuitivas, desvelaremos los misterios ocultos en tu camino y te proporcionaremos claridad sobre tu pasado, presente y futuro.</p>
            <p style={{textAlign: "start"}}>Permítenos ser tu brújula espiritual en este viaje de autoconocimiento. Conecta con las revelaciones que te aguardan y da un paso hacia una vida más consciente y plena.</p>
            <a target='_blank' rel='noreferrer' to="https://api.whatsapp.com/send?phone=14504973885&text=Hola%20me%20interesa%20tu%20servicio%20de%20esoterismo" className='btn-servicios' >Quiero una revelación <Svg/></a>

          </div>
        </ul>
      </div>

    </section>
  )
}

export default SectionTres