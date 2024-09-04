import { useState, useEffect } from 'react';

function useFetch(url, dependencies = []) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setData(null);
        setError(null);

        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(res => {
                setData(res);
                setLoading(false);  
            })
            .catch(err => {
                setError(err);
                setLoading(false); 
            });
    }, dependencies);

    return { data, loading, error };
}

export default useFetch;