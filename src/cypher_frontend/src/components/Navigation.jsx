import {  Link } from "react-router-dom";
import "../style/navigation.css"
function Navigation(){
    return(
        <>
        <nav style={{display :"flex", justifyContent: "space-around", padding : "10px 0px"}}>
         
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cypher">Cypher</Link>
          </li>
          <li>
            <Link to="/check">Checksum</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          
        </ul>

        </nav>
        
        </>
    );
}

export default Navigation;