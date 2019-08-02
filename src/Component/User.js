import React from 'react';

function User(props){
    return(
<div>
    <h2>Name: {props.data.name} </h2>
    <h2>LastName: {props.data.lastname}</h2>
</div>
    );
};

export default User;