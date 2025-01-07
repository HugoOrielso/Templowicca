import  { useRef } from 'react'
import '../../public/styles/contacto.css'
import emailjs from '@emailjs/browser';
import { toast } from 'sonner'

const Contacto = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();
    let $nombre = document.querySelector("#nombre-input").value
    let $email = document.querySelector("#email-input").value
    let $telefono = document.querySelector("#telefono-input").value
    let $motivo = document.querySelector("#motivo-input").value
    
    if(!$nombre || !$email || !$telefono || !$motivo){
      toast.error("Por favor completa todos los campos del formulario")
      return
    }

    emailjs
      .sendForm('service_3pqi5mn', 'template_jb19ecz', form.current, {
        publicKey: 'CfqjhuNuHR617RUM7',
      })
      .then(
        () => {
          toast.success("Hemos recibido tu consulta, te contactaremos lo más pronto posible.")
        },
        (error) => {
          toast.error("Ocurrió un error al enviar la consulta, intenta de nuevo.")
        },
      );
  };

  return (
    <section className='container-contacto'>
      <form className='form-contacto' ref={form} onSubmit={sendEmail}>
        <h1>Contáctanos</h1>
        <input type="text" name="nombre" placeholder='Nombre'  className='input-field' id='nombre-input'/>
        <input type="text" name="email" placeholder='Email' className='input-field' id='email-input'/>
        <input type="text" name="telefono" placeholder='Teléfono' className='input-field' id='telefono-input'/>
        <input type="text" name="motivo" placeholder='Motivo de consulta' className='input-field' id='motivo-input'/>
        <button type='submit'>Enviar</button>
      </form>
    </section>
  )
}

export default Contacto