import {useSate, useEffect} from "react";

export default function Item()
{

    const [data, setData] = useState();
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://api.sampleapis.com/coffee/hot");
                if(!res.ok)
                {
                    throw new Error("Network Error")
                }
                const jsonData = await res.json();
                setData(jsonData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return(
        <div className="container">
            <p> wOrDs </p>
        </div>
    )
}