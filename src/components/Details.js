import { useParams } from 'react-router-dom'
import { Header } from './Header'
import axios from "axios";
import { useEffect, useState } from 'react';

export const Details = () => {
    const { isbn } = useParams()
    const [data, setData] = useState([])

    const fetchAPI = async () => {
        await axios.get(`https://api.itbook.store/1.0/books/${isbn}`)
            .then(res => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    console.log(data)
    useEffect(() => {
        fetchAPI()
    }, [])

    return (
        <>
            <div className="container">
                <Header />
                <div className="d-flex justify-content-end flex-column" style={{ alignItems: "center" }}>
                    <div className="card flex-row flex-wrap" style={{ width: "50rem", marginTop: "50px" }}>
                        <div className="card-header border-0">
                            <img src={data.image} alt="Buku.jpg" width="250" height="270" className="px-4" />
                        </div>
                        <div className="card-block p-4" style={{ width: "58%" }}>
                            <h4 className="card-title">{data.title}</h4>
                            <h5 className="card-text">{data.subtitle}</h5>
                            <h6 className="card-text">Authors : {data.authors}</h6>
                            <h6 className="card-text">Language : {data.language}</h6>
                            <h6 className="card-text">isbn10 : {data.isbn10}</h6>
                            <h6 className="card-text">isbn13 : {data.isbn13}</h6>
                            <h6 className="card-text">Pages : {data.pages}</h6>
                            <h6 className="card-text">Year : {data.year}</h6>
                            <h6 className="card-text">Rating : {data.rating}</h6>
                            <p className="card-text">{data.desc}</p>
                            <h4 className='card-text'>{data.price}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}