import React from "react";
import "./RevewItem.css";
const ReviewItem = ({ item }) => {
    console.log(item);
    return (
        <div className="item-review-card">
            <img src={item.img} alt="" />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",

                    width: "100%",
                    alignItems: "center",
                    padding: "10px",
                }}
            >
                <div className="review-item-info">
                    <p style={{ font: "18px", fontWeight: "bold" }}>
                        {item.name}
                    </p>
                    <p>
                        Price:{" "}
                        <span style={{ color: "goldenrod" }}>
                            ${item.price}
                        </span>
                    </p>
                    <p>
                        Shipping:{" "}
                        <span style={{ color: "goldenrod" }}>
                            ${item.shipping}
                        </span>
                    </p>
                </div>
                <div>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;
