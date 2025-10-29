import {useState, useEffect, use} from "react";
import handleNewFive from "./subComponents/HandleNewFive";
import RandomFive from "./subComponents/RandomFive";
import js from "@eslint/js";

export default function Item()
{

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [displayed, setDisplayed] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://akabab.github.io/starwars-api/api/all.json");
                if(!res.ok)
                {
                    throw new Error("Network Error")
                }
                const jsonData = await res.json();
                setData(jsonData);
                setDisplayed(RandomFive(jsonData))
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    if(loading) return <p>loading...</p>
    if(error) return <p>Error: {error}</p>


    return(
        <main>
            <div className="new-btn-div">
                <button onClick={() => handleNewFive({data, setDisplayed})} className="new-five-btn">Show New 5</button>
            </div>
            <div className="container">
                {displayed.map((char) => (
                <div className="Characters" key={char.id}>
                    <h3>{char.name}</h3>
                    <img src={char.image} width={120} alt={char.name} />
                    <p>{char.gender}</p>
                    <p>{char.species}</p>
                    <p>{char.homeworld || char.bornLocation}</p>
                </div>
                ))}
            </div>
        </main>
    )
}