import { Contact } from "./Contact"

export const Header = () => {


    return (
        <div className="header card">
            <div className='date'>
                {new Date().toLocaleDateString(undefined, {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'})}
            </div>
            <h1>Usborn Ocampo</h1>
            <p className="description">Hi, my name is Usborn! I'm a budding developer with experience in Ruby and Javascript, 
            along with the Rails and React frameworks. I also have some experience using Python, R, and SQL from 
            personal side projects. I'd love to work with you!</p>
            <Contact />
        </div>
    )
}