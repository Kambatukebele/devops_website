import React from 'react'

const Logo = ({extraClass}) => {
  return (
    <a className={`text-2xl font-bold  ${extraClass}`} href="/">
        qubitz
    </a>
  )
}

export default Logo