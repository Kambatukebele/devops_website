import React from 'react'

const Logo = ({extraClass}) => {
  return (
    <a className={`text-xl font-semibold font-orbitron ${extraClass}`} href="/">
        qubitz
    </a>
  )
}

export default Logo