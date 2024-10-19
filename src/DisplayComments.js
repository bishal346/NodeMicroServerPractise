import React, {useState, useEffect} from 'react'
import axios from 'axios'; 
import {Card, Grid2} from '@mui/material'; 
export const DisplayComments = ({postId, comments}) => {
    // const [comments, setComments] = useState([]); 
    // const onSubmit = async() => {
    //     const arr = await axios.get(`http://localhost:4001/posts/${postId}/comments`); 
    //     console.log(arr); 
    //     setComments(arr.data); 
    // }
    // useEffect(() => {
    //     onSubmit(); 
    // },[]); 
    console.log('comments')
    console.log(comments)
    return (
        <div>
            <ul>
            {Object.values(comments).map(obj => {
                return (
                    <li>{obj?.content}</li>
                )
            })}
            </ul>
        </div>
    )
}

export default DisplayComments; 