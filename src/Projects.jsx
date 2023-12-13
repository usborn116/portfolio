/* eslint-disable react/prop-types */
export const Project = ({name, link, lang, description}) => {

    return (
        <div className="entry">
            <h3><a href={link} target='_blank' rel='noreferrer'>{name}</a></h3>
            <h4>Language: {lang}</h4>
            <p>About: {description}</p>
        </div>
    )
}