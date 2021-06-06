import React, { FC } from 'react'
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap'

interface VaovaoMisongadinaProps {
  id: number
  title: string
  description: string
  handleClickOpen: (title: string, description: string) => void
}

const VaovaoMisongadina: FC<VaovaoMisongadinaProps> = ({
  id,
  title,
  description,
  handleClickOpen,
}) => {
  return (
    <>
      <div className="itemSlick">
        <div className="context">
          <div className="counter">{id}</div>
          <div
            style={{
              position: 'absolute',
              color: '#F4C247',
              backgroundColor: 'rgb(255 255 255 % 80)',
            }}
            onClick={() => {
              handleClickOpen(title, description)
            }}
          >
            <ZoomOutMapIcon />
          </div>
          <h3>{title}</h3>
          <div style={{ overflow: 'hidden', height: '90px' }}>
            {description}
          </div>
        </div>
      </div>
    </>
  )
}

export default VaovaoMisongadina
