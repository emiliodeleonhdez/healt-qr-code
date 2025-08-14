import React from 'react'

const HeroIntro = () => {
  return (
    <div className='max-w-3xl mx-auto'>
      <h2 className="p-4 text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Tu perfil Médico
        <span className="text-red-500"> Siempre contigo</span>
      </h2>
      <p className='text-xl text-gray-600 mb-8'>Genera un código QR para que los equipos de emergencia accedan al instante a tu información médica vital cuando cada segundo importa.</p>
    </div>  )
}

export default HeroIntro