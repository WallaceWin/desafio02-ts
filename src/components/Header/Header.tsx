import './Header.css'

interface IHeader {
  nomeHeader: string
}

export const Header  = ({ nomeHeader }: IHeader) => {
  return(
    <div className='header'>
      <h1>{ nomeHeader }</h1>
    </div>
  )
}
