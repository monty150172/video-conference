import React from "react";
import VideoTile from "./VideoTile";

const VideoGrid = () => {
    const participants = [
        {
            name: "Manuel Fahrenholz",
            imageSrc: process.env.PUBLIC_URL + "/Manuel.png",
        },
        { name: "K Gnd", imageSrc: "" },
        { name: "Paul Schilling", imageSrc: "" },
        { name: "Philipp Sauerlaender", imageSrc: "" },
        {
            name: "Ralf Schmitz",
            imageSrc: process.env.PUBLIC_URL + "/ralf.png",
        },
        { name: "Julijana Uneva", imageSrc: "" },
        { name: "Kevin Thomas Lampe", imageSrc: "" },
        { name: "Oscar van Velsen", imageSrc: "" },
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
