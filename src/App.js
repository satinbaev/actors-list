import React, {useState, useEffect} from 'react';
import PaginationComponent from './pagination';
import './App.css';
import Modal from './Modal';

const App = () => {

  const [data, setData] = useState([])
  const [currentpage, setCurrentpage] = useState(1)
  const [isloading, setLoading] = useState(false)
  const [searching, setSearching] = useState("")
  const [isModalClicked, setModalClicked] = useState(false)
  const [modalData, setModalData] = useState([])
  const imagePart = "https://image.tmdb.org/t/p/w185"


  const fetching = () => {
    setTimeout(() => {

      fetch(`https://api.themoviedb.org/3/person/popular?api_key=df8b08ecb436696fee41a00f8d87a540&language=en&page=${currentpage}`)
      .then(res => res.json())
      .then(data => {
        setData(data.results);
        setLoading(true);
      })  
    }, 500)
  }
  
  useEffect(() => {
    fetching()
  }, [currentpage, isloading])
 
  const changePage = (e) =>{
    setCurrentpage(e);
    setLoading(false);
  }

  const handleChangeForSearch = (e) => {
    setSearching(e.target.value)
  }
  const openDetails = (e) => {
    let filteredId = data.filter(item => item.id ===e);
    setModalData({filteredId})
    isModalClicked ? setModalClicked(false) : setModalClicked(true)
  }
  const filtered = data.filter(item=> item.name.toLowerCase().includes(searching.toLowerCase()));
  
  return (
    <div className='App'>
      <h1 className='header'>Welcome to the actors database!</h1>
      <div className="page-search-wrapper">
        <PaginationComponent changePage={changePage} currentpage={currentpage}/>
        <input type="text" placeholder="search..." value={searching} onChange={handleChangeForSearch}></input>
      </div>
      <h4>You are at the page {currentpage}</h4>
      <div className='actors'>
        {
          isloading ?  filtered.map(item => {
            const imageUrl =imagePart +item.profile_path
            
            return (
              <div className='actor'>
              <img className='actor-image' src={imageUrl} alt=''></img>
              <h3>{item.name}</h3>
              <button onClick={()=>openDetails(item.id)} className='details-button'>More details</button>
            </div>
            )
          })
          : 
          <div className="loader">
            <img className="loader-image" src="https://homebakers.co.in/wp-content/themes/foodbakery-child/images/demo_wait.gif" alt=""></img>
          </div>
        }
        </div>
        {isModalClicked && <Modal modalData={modalData} isModalClicked={isModalClicked}/>}
    </div>
  )
}

export default App;