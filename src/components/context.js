import React,{useState,createContext, useEffect} from "react";


export const MovieContext = createContext("");

const ThemeProvider = (props) => {
    const [datarequete, setdatarequete] = useState();
    const [titreData, setTitreData] = useState("")
    useEffect(() => {
      fetch(`http://www.omdbapi.com/?apikey=90c93d84&s=${titreData}&nbpp=15`)
      .then(response => response.json())
      .then(data => setdatarequete(data))
      .catch((error) => console.log(error));
      },[titreData]);
   /* const handelChange = () => {

        fetch(' http://www.omdbapi.com/movies/search?title=${titreData}&key=90c93d84&nbpp=15')
                .then(response => response.json())
                .then(data => {setdatarequete(data);console.log(data)})
                .catch((error) => console.log(error));


        }
    */    


console.log(datarequete);
return(

<MovieContext.Provider value= {{datarequete, setTitreData}}>
                    {props.children}
                    
                </MovieContext.Provider>


)
}
export default ThemeProvider;