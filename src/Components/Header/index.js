import React from 'react';

export default function Header()
{
    return(
        <div className="jumbotron">
            <h1 className="display-4">DBN Compiler</h1>
            <p className="lead">This is a simple compiler that compiles DBN language to generate corrosponding SVGs</p>
        </div>
    );
}