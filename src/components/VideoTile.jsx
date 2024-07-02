import React from "react";

const VideoTile = ({ name, imageSrc }) => {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                margin: "10px",
                textAlign: "center",
                height: "200px",
            }}
        >
            {imageSrc ? (
                <img
                    src={imageSrc}
                    alt={name}
                    style={{ width: "100%", height: "80%" }}
                />
            ) : (
                <div style={{ height: "80%", backgroundColor: "#ccc" }} />
            )}
            <p>{name}</p>
        </div>
    );
};

export default VideoTile;
