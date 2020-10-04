import React, {useEffect, useState} from "react";
import axios from 'axios';
import listeService from '../services/listeService';

const Home = ()=> {
    const [value, setValue] = useState("");
    const [listeBd, setListeBd] = useState([])

    useEffect(() => {
        fetchListes()
    }, []);

    const fetchListes = async () => {
        setListeBd(await listeService.getAllListes())
    }

    const handleSubmit  =  (event) => {
        setListeBd([...listeBd, {description : value}])
        axios.post( "http://localhost:8800/", {description: value})
        event.preventDefault();
    };

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleDelete = async (item)=>{
        setListeBd(listeBd.filter(i => i._id !== item._id))
        await listeService.deleteListe(item._id)
    };


    return(
        <>
            <h1>Ma liste</h1>
            <form onSubmit={handleSubmit}>
                Description : <input type={"text"} value={value} onChange={handleChange}/>
                <input type={"submit"} value={"Envoyer"}/>
            </form>

            {listeBd && listeBd.map(i =>
                <div>
                    {i.description}
                    <button onClick={() => {handleDelete(i)}}>x</button>
                </div>
            )}

        </>
    )
};

export default Home;