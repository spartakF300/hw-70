import React, {useEffect, useState} from 'react';
import {axiosTV} from "../../axiosTV";
import './Pages.css'
const Pages = (props) => {
    const [info, setInfo]= useState(null);
    const getPage = async (id)=>{
        if(id){
            const res = await axiosTV(`/shows/${id}`);
            setInfo(res.d)
        }

    };
    useEffect(()=>{
        getPage(props.id)
    },[props.id]);
    return  info &&(
        <div className={'container'}>
<h1>name{info.name}</h1>
            <div className={'wrapper'}>
                <div>
                <img style={{width:'300px'}} src={info.image.original} alt=""/>
                </div>
                <div className={'right-block'}>
                    <div className="info" >
                        <p>type: { info.type}</p>
                        <p>language: { info.language}</p>
                        <p>premiered:{info.premiered}</p>

                    </div>

                    <p>{info.summary}</p>

                </div>


            </div>
        </div>
    );
};

export default Pages;