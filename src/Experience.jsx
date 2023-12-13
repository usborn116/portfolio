/* eslint-disable react/prop-types */
export const Experience = ({position, time, location, description}) => {

    return (
        <div className="entry list-item">
            <h3>{position} | {time} | {location}</h3>
            {description.map((d, i) => <p key={i}>{d}</p>)}
        </div>
    )
}