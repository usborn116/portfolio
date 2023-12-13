/* eslint-disable react/prop-types */
export const Experience = ({position, time, location, description}) => {

    return (
        <div className="entry">
            <h4>{position} | {time} | {location}</h4>
            {description.map((d, i) => <p className='list-item' key={i}>{d}</p>)}
        </div>
    )
}