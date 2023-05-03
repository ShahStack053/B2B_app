import React, { useState } from "react";
import "./Photo.css";
// import { CameraFilled, DeleteFilled } from "@ant-design/icons";
import { Upload } from "antd";
import deleteBin from "../../../../../Assets/Images/deleteBin.png";
import previewImg from "../../../../../Assets/Images/previewImg.png";
import camera from "../../../../../Assets/Images/camera.png";
import { useEffect } from "react";

const Photo = ({ label, id, bcData }) => {
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);
  console.log("image======>>", bcData.profileImagePath);

  const handleChange = ({ fileList: newFileList }) => {
    console.log("fileList===>>>", newFileList);
    if (newFileList.length > 0) {
      const file = newFileList[0].originFileObj;
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    } else {
      setPreviewImage(previewImg);
    }
    setFileList(newFileList);
  };
  const removeHandler = () => {
    setPreviewImage("");
    setFileList([]);
  };

  useEffect(() => {
    if (label === "View")
      // setFileList(bcData?.profileImagePath);
      setPreviewImage(
        `https://b2b-dev-bucket.s3.me-south-1.amazonaws.com/${bcData?.profileImagePath}`
      );
    setFileList([...fileList, { thumbUrl: bcData?.profileImagePath }]);
  }, []);

  return (
    <div style={{ padding: 10 }}>
      <div className="img-upper">
        <div className="image">
          <img
            alt="Userimg"
            type="picture-circle"
            style={{
              width: "53%",
              height: "90%",
              borderRadius: "50%",
            }}
            src={fileList.length > 0 ? previewImage : previewImg}
          />
        </div>
        <div className="button-div">
          <Upload
            disabled={label === "Edit" && fileList.length === 0 ? false : true}
            listType="text"
            fileList={fileList.slice(-1)}
            beforeUpload={() => false}
            onChange={handleChange}
          >
            <button
              disabled={
                label === "View" || fileList.length === 0 ? true : false
              }
              style={{
                background: "#1779B8",
                borderRadius: 50,
                marginRight: 6,
                border: "none",
                width: 30,
                height: 30,
                paddingBottom: 5,
                cursor: "pointer",
              }}
            >
              <img
                src={camera}
                alt="upload-Camera-Icon"
                style={{
                  height: 15,
                  width: 15,
                }}
              />
            </button>

            {/* <CameraFilled
              style={{
                marginRight: 6,
                background: "#1779B8",
                height: 25,
                width: 25,
                paddingTop: 5,
                borderRadius: 50,
              }}
            /> */}
          </Upload>
          <button
            onClick={removeHandler}
            style={{
              background: "#C8C8C8",
              borderRadius: 50,
              marginRight: 6,
              border: "none",
              width: 30,
              height: 30,
              paddingBottom: 5,
            }}
          >
            <img
              src={deleteBin}
              alt="delete-Bin-Icon"
              style={{
                height: 13,
                width: 13,
              }}
            />
          </button>
          {/* <DeleteFilled
            onClick={removeHandler}
            style={{
              background: "#C8C8C8",
              height: 28,
              width: 28,
              paddingTop: 6,
              borderRadius: 50,
              marginTop: 2.1,
            }}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Photo;
