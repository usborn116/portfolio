import githubLogo from './assets/github.svg'
import linkedinLogo from './assets/linkedin.png'

export const Links = () => {

    return (
        <div className='links'>
        <a href="https://github.com/usborn116" target="_blank" rel='noreferrer'>
          <img src={githubLogo} className="logo" alt="Github logo" />
        </a>
        <a href="https://www.linkedin.com/in/usbornocampo/" target="_blank" rel='noreferrer'>
          <img src={linkedinLogo} className="logo react" alt="linkedin logo" />
        </a>
        </div>
        
    )
}