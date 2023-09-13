import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
const NotePage = ({match}) => {
    const { id } = useParams();
    let [note, setNote]=useState(null)
    useEffect(() => {
      getNote()
    }, [id])
    
    let getNote = async()=>{
        let response = await fetch(`/api/tasks/${id}`)
        let data = await response.json()
        setNote(data)
    }

    let updateNote = async()=>{
        fetch(`/api/tasks/${id}/update`, {
            method:"PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(note)
        })
    }

    let deleteNote = async()=>{
        fetch(`/api/tasks/${id}/delete`, {
            method:"DELETE",
            headers:{
                'Content-Type':'application/json'
            },
        })
    }

    return (
        <div className='note'>
            <div className='note-header'>

                <Link to={'/'}>
                <p onClick={updateNote}>Back</p>
                </Link>
                <button onClick={deleteNote}>Delete</button>
            </div>
            <textarea onChange={(e)=>{setNote({...note, 'body':e.target.value})}} defaultValue={note?.body}></textarea>
        </div>
    )
}

export default NotePage
