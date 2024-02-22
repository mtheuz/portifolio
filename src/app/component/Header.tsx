import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='flex items-center  justify-between w-screen bg-black min-h-20 border-b-yellow-primary border-b-4 fixed px-40'>
      <div >
        <h1 className='text-yellow-primary text-xl font-black '>
          MATHEUSDEV
        </h1>
      </div>
      <nav className='flex flex-row text-yellow-primary gap-8 font-semibold text-lg'>
        <Link className='p-1 rounded-sm hover:bg-yellow-primary hover:text-black ' href={'#'}>Sobre mim</Link>
        <Link className='p-1 rounded-sm hover:bg-yellow-primary hover:text-black' href={'#'}>Skills</Link>
        <Link className='p-1 rounded-sm hover:bg-yellow-primary hover:text-black' href={'#'}>Pojetos</Link>
        <Link className='p-1 rounded-sm hover:bg-yellow-primary hover:text-black' href={'#'}>Contato</Link>
        <Link className='p-1 rounded-sm hover:bg-yellow-primary hover:text-black' href={'#'}>Serviço</Link>
      </nav>
    </header>
  )
}

export default Header