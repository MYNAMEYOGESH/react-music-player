import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import config from "../tocken/confg"
function Tracks() {
    //to read router params data -> useParams()
    const params = useParams()

    const [music,setmMusic] =useState([])

    const searchHandler = async () => {
       
        await fetch(`${config.access_url}/v1/artist${params.aID}/top-tracks?market=IN`,{
            method: "GET",
            headers: {
                Authorization: `${config.access_type} ${config.access_tocken}`
            }
        }).then(res => res.json())
        .then(res => {
            console.log(`tracks =` , res)
            setmMusic(res.tracks)
        }).catch(err => console.log(err))
    }

    useEffect(()=> {
        searchHandler()
    },[])
    return(
       <div className="container mt-5">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-4 text-success">Music Tracks</h3>
                <p className="text-seccess">{ params.aID} </p>
            </div>
        </div>

        <div className="row">
            {
                music?.map((item,index) => {
                    const {name,album, preview_url} = item
                    return (
                        <div className="col-md-4 col-lg-3 col-sm-6 col-sm-6 mt-2 md-2" key={index}>
                            <div className="card music-card">
                                <img src={album ? album.images[0].url : ''} alt="" className="card-img-top" />
                                <div className="card-hover">
                                    <h6 className="text-success text-center">{name}</h6>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
       </div>
    )
}

export default Tracks