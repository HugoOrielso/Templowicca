import '../../public/styles/mediosdePago.css'

const MediosDePago = () => {
    const metodosDePago = [
        {
            nombre: "Western Union",
            url: "/Imagenes/pagos/western.png"
        },
        {
            nombre: "Bancolombia",
            url: "/Imagenes/pagos/bancolombia.png"
        },

        {
            nombre: "Ria monet",
            url: "/Imagenes/pagos/ria.svg",
            class: "ria"
        },
        {
            nombre: "Visa & Mastercard",
            url: "/Imagenes/pagos/visaMastercard.png"
        },
        
    ]

  return (
    <section className='grid-medios-de-pago'>
        {metodosDePago.map((item,i)=>{
            return(
                <article key={i} id={item.class}>
                    <img src={item.url} alt={item.nombre} />
                </article>
            )
        })}

    </section>
  )
}

export default MediosDePago