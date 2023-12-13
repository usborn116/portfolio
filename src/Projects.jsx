/* eslint-disable react/prop-types */
export const Project = ({name, link, lang, description}) => {

    return (
        <div className="entry">
            <h2><a href={link} target='_blank' rel='noreferrer'>{name}</a></h2>
            <h4>Language: {lang}</h4>
            <p>{description}</p>
        </div>
    )
}