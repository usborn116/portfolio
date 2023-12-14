/* eslint-disable react/prop-types */
import { HashLink } from "react-router-hash-link"
import { useState, useEffect } from "react"
import top from './assets/top.svg'
import project from './assets/project.svg'
import skill from './assets/skill.svg'
import work from './assets/work.svg'
import education from './assets/education.svg'

export const Navmobile = () => {

    const [clicked, setClicked] = useState(null)

    const clickHandler = async (e) => {
        clicked ? await clicked.classList.remove('clicked') : null
        setClicked(() => e.target)
    }

    useEffect(() => {
        clicked?.classList.add('clicked')
    }, [clicked])


    return (
        <div className="nav-mobile">
            <div><HashLink onClick={clickHandler} smooth to="/#top"><img src={top}/></HashLink></div>
            <div><HashLink onClick={clickHandler} smooth to="/#projects"><img src={project}/></HashLink></div>
            <div><HashLink onClick={clickHandler} smooth to="/#skills"><img src={skill}/></HashLink></div>
            <div><HashLink onClick={clickHandler} smooth to="/#experience"><img src={work}/></HashLink></div>
            <div><HashLink onClick={clickHandler} smooth to="/#education"><img src={education}/></HashLink></div>
        </div>
    )
}