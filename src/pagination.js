import React from 'react';
import "./App.css";

const PaginationComponent = (props) => {
    console.log(props)
    return(
        <div className="page-buttons">
            <button onClick={()=>props.changePage(1)}>First</button>
            <button onClick={()=>props.changePage(props.currentpage>1 ? props.currentpage - 1 : 1)}>Prev</button>
            <button onClick={()=>props.changePage(1)}>1</button>
            <button onClick={()=>props.changePage(2)}>2</button>
            <button onClick={()=>props.changePage(3)}>3</button>
            <button onClick={()=>props.changePage(4)}>4</button>
            <button onClick={()=>props.changePage(5)}>5</button>
            <button onClick={()=>props.changePage(props.currentpage<500 ? props.currentpage + 1 : 500)}>Next</button>
            <button onClick={()=>props.changePage(500)}>Last</button>
        </div>
    );
}
export default PaginationComponent;