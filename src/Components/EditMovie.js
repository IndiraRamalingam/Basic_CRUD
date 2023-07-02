import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function EditMovie({ setEditing, updateUser, currentuserdata }) {


 const[moviesEdit,setMoviesEdit]=useState(currentuserdata);

 useEffect(() =>{
  setMoviesEdit(currentuserdata)
},[currentuserdata] )

const handleChage = (event) => {
  const { name, value } = event.target;
  setMoviesEdit({ ...moviesEdit, [name]: value });
};
 
//  const updateMovie =(event) =>{
//   event.preventDefault();
//   console.log("ID "+movies.id)
//   console.log("MOVIES "+movies)
//    updateUser(movies.id,movies);
//  }

  return (
    <div>
        
      <form onSubmit={event => {
        event.preventDefault();
        updateUser(moviesEdit.id,moviesEdit);
      }}>
            <label htmlFor="movieName">Movie Name&nbsp;&nbsp;</label>
            <input type="text"
            value={moviesEdit.movieName}
            name='movieName'
            onChange={handleChage}/><br/>

            <label htmlFor="img">Image URL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text"
            value={moviesEdit.img}
            name='img'
            onChange={handleChage}/><br/>

            <label htmlFor="language">Language&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text"
            value={moviesEdit.language}
            name='language'
            onChange={handleChage}/><br/>

            <label htmlFor="duration">Duration&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text"
            value={moviesEdit.duration}
            name='duration'
            onChange={handleChage}/><br/>

        
            <button variant='primary' type='submit'>Update Movie</button>    
            <button variant='primary' onClick={(() => setEditing(true))} type='submit'>CANCEL</button>
            
            
        </form>  

    </div>
  )
}

export default EditMovie