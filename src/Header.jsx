import { Contact } from "./Contact"
import { Links } from "./Links"

export const Header = () => {


    return (
        <div className="header card">
            <div className='date'>
                {new Date().toLocaleDateString(undefined, {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'})}
            </div>
            <h1>Usborn Ocampo</h1>
            <Links />
            <p className="description">Hi, my name is Usborn! I am a budding developer with experience in Ruby and Javascript, 
            along with the Rails and React frameworks. I also have some experience using Python, R, and SQL from 
            personal side projects. Please feel free to reach out to me with any questions or inquiries. I would love to work with you!</p>
            <Contact />
        </div>
    )
}