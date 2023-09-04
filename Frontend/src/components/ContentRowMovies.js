import React from "react";
import CardMovies from "./CardMovies";

let a = {
    title: 'Movies in Data Base',
    color: 'primary',
    total: 21,
    icon: 'film'
}
let b = {
    title: 'Total awards',
    color: 'success',
    total: 79,
    icon: 'award'
}
let c = {
    title: 'Actors quantity',
    color: 'warning',
    total: 49,
    icon: 'user'
}

let arr = [a, b, c]

function ContentRowMovies() {
    return (
        <>

            {arr.map((el, i) => {
                return <CardMovies {...el} key={el + i} />
            })}


        </>
    )
};

export default ContentRowMovies;