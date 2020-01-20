import React, {useEffect} from 'react';
import Select from "./Select";
import { NavLink} from "react-router-dom";


const Input = (props) => {
useEffect(()=>{

},[props.value])
    return (
        <div className='input-wrap'>
            <label htmlFor="csl">Search for TV show:</label>
            <input
                id="csl"
                type="text"
                onChange={props.change}
            />
            <Select  value={props.value}>
                <div className="option">
                    { props.auto.map((i,index)=>{
                        return (
                            <NavLink  to={"/show/"+i.show.id} className="list" onClick={()=>props.click(i.show.id)} key={index}>{i.show.name}</NavLink>
                        )

                    })}
                </div>

            </Select>
        </div>
    );
};

export default Input;