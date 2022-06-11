import React from 'react';
import {Link, useMatch} from "react-router-dom";

export const CustomLink = ({children, to, ...props} : {children: string, to: string}) => {

    const match = useMatch(to)

    return (
        <Link to={to} {...props} style={{color: match ? "gold" : "#fff"}}>
            {children}
        </Link>
    )
};

