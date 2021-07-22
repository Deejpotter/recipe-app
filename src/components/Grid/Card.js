import React from "react"
import { Link } from "react-router-dom"

function Card(props) {
    return (
        <div className="card shadow">
            <img src={props.image} alt={props.alt} />
            <div className="container-card-text">
                <Link to={props.viewLink}>View</Link>
                <Link to={props.editLink}>Edit</Link>
                <Link to={props.deleteLink}>Delete</Link>
            </div>
        </div>
    )
}

export default Card