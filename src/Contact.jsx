import './styles/Contact.css'
import phoneLogo from './assets/phone.svg'
import emailLogo from './assets/email.svg'
import locationLogo from './assets/location.svg'

export const Contact = () => {

    return (
        <div className="contact">
            <div className="email icon">
                <img src={emailLogo} className="logo" alt="email logo" />
                <div className="email"><a href="mailto:usborn116@gmail.com">usbornocampo@proton.me</a></div>
            </div>
            <div className="phone icon">
            <img src={phoneLogo} className="logo" alt="phone logo" />
            <div className="phone"><a href="tel:503-798-7833">503.798.7833</a></div>
            </div>
            <div className="city icon">
                <img src={locationLogo} className="logo" alt="location logo" />
                <div className="city"><a href="https://maps.app.goo.gl/1QZB3RhB3Cy5pmgS8" target="_blank" rel="noreferrer">
                    Portland, OR
                </a></div>
            </div>
        </div>
    )
}