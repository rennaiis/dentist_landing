import type CardProps from "../../types";
import Button from "../button/Button";
import Picture from "../Picture";
import './Card.scss'

export default function Card(cardProps: CardProps){
    return(
        <a className="card" href={cardProps.href} >
            <div className="card__picture">
                <Picture {...cardProps.picture}/>
                <div className="card__gradient"></div>
            </div>
            <h3 className="card__title">{cardProps.title}</h3>
            <div className="card__buttons">
                <Button {...cardProps.button}/>
                <Button {...cardProps.arrow}/>
            </div>
        </a> 
    )
}