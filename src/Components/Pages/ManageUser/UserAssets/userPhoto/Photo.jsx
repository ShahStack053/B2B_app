import deleteBin from "../../../../../Assets/Images/deleteBin.png";
import camera from "../../../../../Assets/Images/camera.png";
import { Modal, Upload } from "antd";
import { useEffect, useState } from "react";
import dummyImage from "../../../../../Assets/Images/dummyImage.png";
import axios from "axios";
import "./Photo.css";
const Photo = ({ label, id, bcData }) => {
  const [previewPhoto, setPreviewPhoto] = useState([]);
  const [fileList, setFileList] = useState([]);

  const userImagePath = bcData?.profileImagePath;
  //   console.log("fileList=====>", fileList);

  const handleChange = ({ fileList: newFileList }) => {
    const file = newFileList[0].originFileObj;
    const imageUrl = URL.createObjectURL(file);
    setPreviewPhoto(imageUrl);
    setFileList(newFileList);
    // setFileList(newFileList);
    const fd = new FormData();
    fd.append("userId", id);
    fd.append("profilePicture", newFileList[0].originFileObj);
    const data = fd;
    axios({
      method: "Post",
      url: "https://api-customer-dev.b2bprice.store/api/BCUser/UpdateProfileImage",
      headers: {
        Authorization: `Bearer ${localStorage.AuthToken}`,
        // "Content-Type": "application/json",
      },
      data,
    }).then(
      (res) => {
        // Swal.fire("Success", "Profile Photo Updated Successfully", "");
        Modal.success({
          title: "Success",
          content: "Profile Photo Updated Successfully",
        });
        console.log("Pic Response", res);
        //   navigate("/main/manageUser");
      },
      (err) => {
        console.log("Pic Error", err);
        // Swal.fire("Error", "Profile Photo Update Failed", "");
        Modal.error({
          title: "Failed",
          content: "User Photo Update Failed",
        });
      }
    );
  };

  useEffect(() => {
    if (label === "View" || label === "Edit") {
      if (userImagePath !== null) {
        setPreviewPhoto(
          `https://b2b-dev-bucket.s3.me-south-1.amazonaws.com/${userImagePath}`
        );
      } else {
        setPreviewPhoto(dummyImage);
      }
    }

    // setFileList([...fileList, { originFileObj: bcData?.profileImagePath }]);
  }, [bcData]);

  const removeHandler = () => {
    setPreviewPhoto("");
    setFileList([]);
    const data = JSON.stringify(id);
    axios({
      method: "Post",
      url: `https://api-customer-dev.b2bprice.store/api/BCUser/DeleteMyProfileImage?userId=${id}`,
      headers: {
        Authorization: `Bearer ${localStorage.AuthToken}`,
        "Content-Type": "application/json",
      },
      data,
    }).then(
      (res) => {
        // Swal.fire("Success", "Profile Photo deleted Successfully", "");
        Modal.success({
          title: "Success",
          content: "Profile Photo deleted Successfully",
        });
      },
      (err) => {
        // Swal.fire("Error", "Profile Photo deletion Failed", "");
        Modal.error({
          title: "Failed",
          content: "Profile Photo Not Deleted",
        });
      }
    );
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="image-Div">
          <img
            alt="userImage"
            type="picture-circle"
            style={{
              width: "60%",
              height: "90%",
              borderRadius: "50%",
            }}
            // src={fileList.length > 0 ? fileList[0].originFileObj : dummyImage}
            // src={fileList.length > 0 ? fileList : dummyImage}
            src={previewPhoto ? previewPhoto : dummyImage}
          />
        </div>
        <div style={{ display: "flex", margin: 10 }}>
          <Upload
            disabled={label === "View" || previewPhoto ? true : false}
            // listType="text"
            // fileList={fileList}
            onChange={handleChange}
          >
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
          </Upload>
          <button
            onClick={removeHandler}
            disabled={label === "View" || !previewPhoto ? true : false}
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
          {/* <button
            disabled={label === "View" || !previewPhoto ? true : false}
            onClick={removeHandler}
            style={{
              marginRight: 6,
              border: "none",
              borderRadius: "50%",
              width: 27,
              height: 27,
            }}
          >
            <DeleteFilled
              style={{
                background: "#C8C8C8",
                height: 27,
                width: 27,
                paddingTop: 6,
                borderRadius: 50,
              }}
            />
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Photo;
