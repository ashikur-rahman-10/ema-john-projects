import React from "react";

const Notfound = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                minHeight: "85vh",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "40px",
            }}
        >
            <h1>404</h1>
            <h1>Not found!!</h1>
        </div>
    );
};

export default Notfound;
