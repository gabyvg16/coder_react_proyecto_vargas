import React from "react";
// import { css } from "@emotion/react";
import './Loading.css';
import PacmanLoader from "react-spinners/PacmanLoader";


const Loading = () => {
    return (
        <div className="LoadingContainer">
            <PacmanLoader 
                color="#13a118"
            />
        </div>
    );
}

export default Loading;