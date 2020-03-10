import React, { useState, useEffect } from 'react';

// type LoginProps = {
//     username: string;
//     submitHandler: () => void;
//     onChangeHandler: (e: any) => void;
// }

export default function Login(props: any) {

    return (
        <div>
            <h2>Create a username!</h2>
            <h1>{props.username}</h1>
            <form onSubmit={props.submitHandler}>
                <div>
                    <input type="text" value={props.username} onChange={props.changeHandler} />
                    <button type="submit">Enter Recipe App!</button>
                </div>
            </form>
        </div>
    )
}
