import React, { useState } from "react";
import Search from "../Pages/Search";
import config from "../tocken/confg"
import Artist from "../Pages/Artist"
function Home() {
    const[artistInfo,setArtistInfo] =useState(false)

    const searchHandler = async (name) => {
        console.log(`artist name =`,name)
        await fetch(`${config.access_url}/v1/search?q=${name}&type=artist&limit=1`,{
            method: "GET",
            headers: {
                Authorization: `${config.access_type} ${config.access_tocken}`
            }
        }).then(res => res.json())
        .then(res => {
            console.log(`artists =` , res)
            setArtistInfo(res.artists?res.artists.items[0]: false)
        }).catch(err => console.log(err))
    }
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-success">Music-App</h3>
                </div>
            </div>
            <Search handler={searchHandler}/>
            <Artist info={artistInfo} />
        </div>
    )
}

export default Home