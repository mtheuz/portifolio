import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className=' w-full fixed z-10'>
      <nav className='flex items-center  justify-between w-full bg-black min-h-14 border-b-yellow-primary border-b-4 px:28 md:px-20'>
        <div >
          <h1 className='text-yellow-primary text-xl font-black '>
            MATHEUSDEV
          </h1>
        </div>
        <nav className='hidden md:flex flex-row text-yellow-primary gap-8 font-semibold '>
          <Link className='p-1 rounded-sm  hover:bg-yellow-primary hover:text-black  text-sm' href={'#'}>Sobre mim</Link>
          <Link className='p-1 rounded-sm hover:bg-yellow-primary hover:text-black text-sm' href={'#'}>Skills</Link>
          <Link className='p-1 rounded-sm hover:bg-yellow-primary hover:text-black text-sm' href={'#'}>Pojetos</Link>
          <Link className='p-1 rounded-sm hover:bg-yellow-primary hover:text-black text-sm' href={'#'}>Contato</Link>
          <Link className='p-1 rounded-sm hover:bg-yellow-primary hover:text-black text-sm' href={'#'}>Serviço</Link>

        </nav>
    
      </nav>
    </header>
  )
}

export default Header