import React, { useState } from "react";

function ImageUploader() {
  const [profileImg, setProfileImg] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );

  const imageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const MAX_WIDTH = "150px";
        const MAX_HEIGHT = "150px";
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL(file.type);
        setProfileImg(dataUrl);
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div style={{ textAlign: "center", alignItems: "center" }}>
      <div className="container">
        <div className="img-holder">
          <img
            style={{
              maxWidth: "150px",
              maxHeight: "150px",
              borderRadius: "8px",
            }}
            src={profileImg}
            alt=""
            id="img"
            className="img"
          />
        </div>
        <input
          type="file"
          accept="image/*"
          name="image-upload"
          id="input"
          onChange={imageHandler}
        />
      </div>
    </div>
  );
}

export default ImageUploader;
