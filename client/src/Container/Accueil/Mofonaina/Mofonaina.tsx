import React, { FC } from 'react'

interface MofonainaProps {
  date: string
  andininy: string
  andalana: string
}

const Mofonaina: FC<MofonainaProps> = ({ date, andininy, andalana }) => {
  return (
    <>
      <div style={{ padding: '30px', textAlign: 'center' }}>{date}</div>
      <div className="boxVerset" style={{ textAlign: 'center' }}>
        <div className="verset">{andininy}</div>
      </div>
      <div style={{ padding: '2rem 3rem', textAlign: 'justify' }}>
        {andalana}
      </div>
    </>
  )
}

export default Mofonaina
