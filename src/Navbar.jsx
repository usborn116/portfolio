/* eslint-disable react/prop-types */
import { HashLink } from "react-router-hash-link"
import { useState, useEffect } from "react"

export const Navbar = () => {

    const [clicked, setClicked] = useState(null)

    const clickHandler = async (e) => {
        clicked ? await clicked.classList.remove('clicked') : null
        setClicked(() => e.target)
    }

    useEffect(() => {
        clicked?.classList.add('clicked')
    }, [clicked])

    return (
        <div className="nav">
            <div><HashLink onClick={clickHandler} to="/#top">→ Top</HashLink></div>
            <div><HashLink onClick={clickHandler} to="/#projects">→ Projects</HashLink></div>
            <div><HashLink onClick={clickHandler} to="/#skills">→ Skills</HashLink></div>
            <div><HashLink onClick={clickHandler} to="/#experience">→ Experience</HashLink></div>
            <div><HashLink onClick={clickHandler} to="/#education">→ Education</HashLink></div>
        </div>
    )
}