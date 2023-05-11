import React from "react";

const pics = ({ imageUrl, altText, size }) => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <img
            style={{
              paddingTop: "5px",
              maxWidth: "100px",
              maxHeight: "100px",
            }}
            src={
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
          />
        </div>
        <div>
          <img
            style={{
              paddingTop: "5px",
              maxWidth: "100px",
              maxHeight: "100px",
            }}
            src={
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
          />
        </div>

        <div>
          <img
            style={{
              paddingTop: "5px",
              maxWidth: "100px",
              maxHeight: "100px",
            }}
            src={
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
          />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <img
            style={{
              paddingTop: "5px",
              maxWidth: "100px",
              maxHeight: "100px",
            }}
            src={
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
          />
        </div>
        <div>
          <img
            style={{
              paddingTop: "5px",
              maxWidth: "100px",
              maxHeight: "100px",
            }}
            src={
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
          />
        </div>

        <div>
          <img
            style={{
              paddingTop: "5px",
              maxWidth: "100px",
              maxHeight: "100px",
            }}
            src={
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
          />
        </div>
      </div>
    </>
  );
};

export default pics;
