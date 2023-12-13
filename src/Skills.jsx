/* eslint-disable react/prop-types */
export const Skills = ({type = null, names}) => {

    return (
        <div className="entry">
            {type ? <h3>{type}</h3> : ''}
            <div>{names.join(', ')}</div>
        </div>
    )
}