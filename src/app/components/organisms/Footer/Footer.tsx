import { Heart } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="h-6 w-6 text-red-500" />
            <span className="text-xl font-bold">MediScanId</span>
          </div>
          <p className="text-gray-400">
            Acceso inmediato a tu información médica vital para los equipos de emergencia.
          </p>
        </div>
      </footer>  )
}

export default Footer