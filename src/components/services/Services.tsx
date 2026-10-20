import { services } from "../../data";
import Card from "../card/Card";
import './Services.scss'
export default function Services(){
    return(
        <section className="services">
            <h2 className="services__title">{services.title}</h2>
            <ul>
                {services.list.map((item, index)=>(
                    <li key={index}>
                        <Card {...item}/>
                    </li>
                ))}
            </ul>
        </section> 
    )
}