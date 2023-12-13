/* eslint-disable react/prop-types */
import reactLogo from './assets/react.svg'
import railsLogo from './assets/rails.svg'
import rubyLogo from './assets/ruby.svg'
import pythonLogo from './assets/python.svg'
import RLogo from './assets/R.svg'
import JSLogo from './assets/js.svg'
import exlink from './assets/exlink.svg'

export const Project = ({name, link, lang, description}) => {

    const lang_key = {'Ruby' : rubyLogo, 'Rails': railsLogo, 'React': reactLogo,
                    'Javascript': JSLogo, 'Python': pythonLogo, 'R': RLogo}

    return (
        <div className="entry">
            <h2 className='row'><a href={link} target='_blank' rel='noreferrer'>{name}&nbsp;<img className='list-logo' src={exlink}></img></a></h2>
            <div className='logos-row'>
                {lang.map((l, i) => <img key={i} className='list-logo' src={lang_key[l]} alt={l}></img>)}
            </div>
            <p>{description}</p>
        </div>
    )
}