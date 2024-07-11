import React, { useEffect, useState } from 'react'

const Posts = () => {
    const [data, setData] = useState([])
    const [err, setErr] = useState()

    const fetchData = async () => {

        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const result = await response.json()
            setData(result)
        } catch (error) {
            setErr(error);
        }
    }

    // useEffect
    useEffect(() => {
        fetchData();
    }, [])

    return (
            <>
                {err ? (
                    <div>
                        <h3>{err}</h3>
                    </div>
                ) : (
                    data.map((d) => (
                        <div key={d.id}>
                            <h4>{d.id}</h4>
                            <h2>{d.title}</h2>
                            <h4>Rs: {d.price}</h4>
                        </div>
                    ))
                )}
            </>
    )
}

export default Posts;