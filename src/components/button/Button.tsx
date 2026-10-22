import type { ButtonProps } from "../../types";
import './Button.scss'

export default function Button(buttonProps: ButtonProps){
    return(
        <>
            {buttonProps.href ? 
                <a  className={`button ${buttonProps.mod ? `button_${buttonProps.mod}` : ``}`} 
                    href={buttonProps.href}>
                    {buttonProps.text}
                    {buttonProps.icon && <img className="button__icon" src={buttonProps.icon}/>}
                </a> : 
                <button type="submit" className={`button ${buttonProps.mod ? `button_${buttonProps.mod}` : ``}`}>
                    {buttonProps.text}
                    {buttonProps.icon && <img className="button__icon" src={buttonProps.icon}/>}
                </button>}
        </>
    )
}