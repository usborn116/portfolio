/* eslint-disable react/prop-types */
export const Education = ({school, years, degree}) => {


    return (
        <div className="entry list-item">
            <p><strong className="green">{school}</strong> | {degree} | {years}</p>
        </div>
    )
}