import React from "react";
import VideoTile from "./VideoTile";

const VideoGrid = () => {
    const participants = [
        {
            name: "Manuel Fahrenholz",
            imageSrc: process.env.PUBLIC_URL + "/Manuel.png",
        },
        { name: "K Gnd", imageSrc: process.env.PUBLIC_URL + "./klaudia.png" },
        {
            name: "Paul Schilling",
            imageSrc: process.env.PUBLIC_URL + "./paul.png",
        },
        {
            name: "Philipp Sauerlaender",
            imageSrc: process.env.PUBLIC_URL + "./philipp.png",
        },
        {
            name: "Ralf Schmitz",
            imageSrc: process.env.PUBLIC_URL + "/ralf.png",
        },
        {
            name: "Julijana Uneva",
            imageSrc: process.env.PUBLIC_URL + "./juliana.png",
        },
        {
            name: "Kevin Thomas Lampe",
            imageSrc: process.env.PUBLIC_URL + "./kevin.png",
        },
        {
            name: "Oscar van Velsen",
            imageSrc: process.env.PUBLIC_URL + "./oscar.png",
        },
    ];

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "10px",
            }}
        >
            {participants.map((participant, index) => (
                <VideoTile
                    key={index}
                    name={participant.name}
                    imageSrc={participant.imageSrc}
                />
            ))}
        </div>
    );
};

export default VideoGrid;
