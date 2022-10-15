import './button.styles.scss';

//There are 3 button types: default, inverted, and Google sign in. This variable allows us to specify which button type it is and applies the styling for that button type
const BUTTON_TYPES_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({children, buttonType, ...otherProps}) => {
    return (
        <button
            className={
                `button-container 
                ${BUTTON_TYPES_CLASSES[buttonType]}`
            }
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default Button;