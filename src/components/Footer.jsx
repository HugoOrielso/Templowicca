import {NavLink} from 'react-router-dom'
import { Facebook, Instagram, Whatsapp } from './Icons'
import '../../public/styles/footer.css'

const Footer = () => {
  return (
    <footer className='glass-footer'>
      <div className='container-icon-redes'>
      <NavLink to="https://www.facebook.com/AMORYProsperidad15?mibextid=ZbWKwL" target='_blank'> <Facebook/> </NavLink>
      <NavLink  to="https://www.instagram.com/templowiccaymagia/?igsh=MXhydTJ4eXAyM3lzeg%3D%3D"> <Instagram/></NavLink>
      <NavLink to="https://api.whatsapp.com/send?phone=573205650747&text=Hola%20me%20interesa%20tu%20servicio%20de%20esoterismo"> <Whatsapp/></NavLink>
      </div>
    </footer>
  )
}

export default Footer