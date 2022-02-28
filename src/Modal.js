import React from 'react';
import './Modal.css';


export default function Modal(props){
    const [isOpen, setOpen] = React.useState(props.isModalClicked)
    const modalData = props.modalData.filteredId[0]
    const imagePart = "https://image.tmdb.org/t/p/w185"
    const imageUrl =imagePart +modalData.profile_path
    const knownFor = props.modalData.filteredId[0].known_for.map(el=> {
        return <div className='movie-list-div'>
            <h3>{el.title}</h3>
            <p>Release date: {el.release_date}</p>
        </div>
    })
    
    const handleClose = () => {
        setOpen(false);
    }
    
    return isOpen ? (  
         <div className="modal-wrapper">
            <div className="name-button-wrapper">
                <h2>{modalData.name}</h2>  
                <button className="close-button" onClick={handleClose}>Close</button>
            </div>
            <div className="image-movies-wrapper">
                <div className="image-wrapper"><img className="modal-image" src={imageUrl}></img></div>
                <div className='movie-list'>
                    <h4>Movies:</h4>
                    <p>{knownFor}</p>
                </div>
            </div>
        </div>
    )
    :
    <></>

}