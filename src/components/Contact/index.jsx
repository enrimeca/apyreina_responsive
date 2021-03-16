import React from 'react'

const Contact = () => {
  return (
    <section className="mx-6 md:mx-16 lg:mx-auto py-3 bg-white max-w-4xl">
      <h1 className="section-title mt-12">Contacto</h1>
      <form action="">
        <label htmlFor="name">
          <span className="font-bold">NOMBRES</span>
          <input className="form-control" type="text" placeholder="Nombres" id="name" />
        </label>
        <label htmlFor="email">
          <span className="font-bold">EMAIL</span>
          <input className="form-control" type="email" placeholder="Correo electrónico" id="email" />
        </label>
        <label htmlFor="comment">
          <span className="font-bold">COMENTARIOS</span>
          <textarea className="form-control" name="" cols="30" rows="10" id="comment"></textarea>
        </label>
        <button className="block bg-red-500 hover:bg-red-700 text-white uppercase text-lg mx-auto py-2 px-4 rounded my-4" type="submit">Enviar</button>
      </form>
    </section>
  )
}

export default Contact
