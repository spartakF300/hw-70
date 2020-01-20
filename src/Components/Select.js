import React from 'react';

const Select = (props) => {

    return (
       <div className={'list'} style={props.value.length !==0 ? {display:'block'} : {display:'none'} }>
           {props.children}
       </div>
    );
};

export default Select;