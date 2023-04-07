import React from "react";
import "./RevewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ item, handleRemoveItem }) => {
    // console.log(item);
    return (
        <div className="item-review-card">
            <img style={{ borderRadius: "8px" }} src={item.img} alt="" />
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
                        <span style={{ color: "coral" }}>${item.price}</span>
                    </p>

                    <small>
                        Shipping:{" "}
                        <span style={{ color: "coral" }}>${item.shipping}</span>
                    </small>
                </div>
                <p>
                    Quantity:{" "}
                    <span style={{ color: "coral" }}>{item.quantity}pcs</span>
                </p>
                <button
                    onClick={() => {
                        handleRemoveItem(item.id);
                    }}
                    style={{
                        backgroundColor: "#F9CDCD",
                        width: "56px",
                        height: "56px",
                        borderRadius: "50%",
                    }}
                >
                    <FontAwesomeIcon
                        style={{ color: "#EB5757" }}
                        icon={faTrashAlt}
                    />
                </button>
            </div>
        </div>
    );
};

export default ReviewItem;
