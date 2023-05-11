import React from "react";

const ProfilePicture = ({ imageUrl, altText, size }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img
        style={{
          paddingTop: "5px",
          maxWidth: "150px",
          maxHeight: "150px",
          borderRadius: "5px",
        }}
        src={
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        }
        alt={altText}
      />
    </div>
  );
};

export default ProfilePicture;
