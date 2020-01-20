import React, {useState, useEffect} from 'react';
import Input from "../Components/Input";
import {axiosTV} from "../axiosTV";
import Pages from "./Pages/Pages";


const Main = () => {

    const [value, setInputValue] = useState('');
    const [tv, setTv] = useState([]);
    const [id, setId] = useState(null);

    const change = (e) => {
        setInputValue(e.target.value);
        getTvShow(value);


    };
    const getTvShow = async (name) => {
        const res = await axiosTV(`search/shows?q=${name}`);
        if (value !== '') {
            setTv(res.data)
        }

    };
    const getId = (id) => {
        setId(id);
        setTv([]);
        setInputValue('')
    };
    useEffect(() => {
        if (!value.length) {
            setTv([])
        }
    }, [value]);
    return (
        <div className={'main-pos'}>
            <Input
                settv={setTv}
                change={change}
                auto={tv}
                value={value}
                click={getId}
            />
            <Pages id={id}/>
        </div>
    );
};

export default Main;