import React from 'react'

const Contact = () => {
  return (
    <section className="mx-6 md:mx-16 lg:mx-auto py-3 bg-white max-w-7xl">
      <h1 className="section-title mt-12">Contacto</h1>
      <form action="">
        <label htmlFor="name">
          <span>Nombres</span>
          <input className="form-control" type="text" placeholder="Nombres" id="name" />
        </label>
        <label htmlFor="email">
          <span>Email</span>
          <input className="form-control" type="email" placeholder="Correo electrónico" id="email" />
        </label>
        <label htmlFor="comment">
          <span>Consulta</span>
          <textarea className="form-control" name="" cols="30" rows="10" id="comment"></textarea>
        </label>      
      </form>
    </section>
  )
}

export default Contact
