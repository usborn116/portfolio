import './styles/Contact.css'
import phoneLogo from './assets/phone.svg'
import emailLogo from './assets/email.svg'
import locationLogo from './assets/location.svg'

export const Contact = () => {

    return (
        <div className="contact">
            <div className="email icon">
                <img src={emailLogo} className="logo" alt="email logo" />
                <div className="email">usborn116@gmail.com</div>
            </div>
            <div className="phone icon">
            <img src={phoneLogo} className="logo" alt="phone logo" />
            <div className="phone">503.798.7833</div>
            </div>
            <div className="city icon">
                <img src={locationLogo} className="logo" alt="location logo" />
                <div className="city">Portland, OR</div>
            </div>
        </div>
    )
}