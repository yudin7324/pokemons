import { FC } from 'react'
import pokeball from '../../images/pokeboll.svg'
import { ReactSVG } from 'react-svg'
import './_loader.scss'

const Loader: FC = () => {
  return (
    <div className='loader'>
      <ReactSVG src={pokeball} />
    </div>
  )
}

export default Loader
