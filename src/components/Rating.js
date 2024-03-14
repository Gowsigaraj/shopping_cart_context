import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, onClick, style }) => {
    return (
        <div className='rating'>
            {
                [...Array(7)].map((_, i) => (
                    <span key={i} onClick={() => onClick(i)} style={style}>
                        {rating > i ?
                            (<AiFillStar style={{ fontSize: "15px" }} />) : (<AiOutlineStar style={{ fontSize: "15px" }} />)
                        }
                    </span>
                ))
            }
        </div>
    )
}

export default Rating