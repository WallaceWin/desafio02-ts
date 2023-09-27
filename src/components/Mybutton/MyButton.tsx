import './MyButton.css'

interface IButton {
    titulo: string
    event: () => {}
}

export const MyButton = ({ titulo, event }: IButton) => {
    return(
        <div className='botao'>
            <button onClick={event} className='botueira'>{titulo}</button>
        </div>
    )
}