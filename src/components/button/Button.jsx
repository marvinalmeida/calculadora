import {ButtonContainer} from './style.button'


const Button = ({label, onClick}) => {
    return (
        <ButtonContainer onClick={onClick}>
            {label}    
        </ButtonContainer>
    )
}

export default Button;