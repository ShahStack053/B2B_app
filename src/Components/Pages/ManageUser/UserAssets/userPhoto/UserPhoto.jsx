import React from "react";
import { Upload } from "antd";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Modal } from "antd";
// import axios from "axios";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const App = ({ id }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({ fileList: newFileList }) => {
    if (newFileList.length > 1) {
      newFileList.splice(0, newFileList.length - 1);
    }
    setFileList(newFileList);
  };
  const handleClick = () => {
    console.log("upload image is clicked");
  };

  const uploadButton =
    fileList.length === 0 ? (
      <button
        onClick={handleClick}
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          border: "none",
          backgroundColor: "white",
        }}
      >
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload Image</div>
      </button>
    ) : null;

  return (
    <>
      <Upload
        action="https://api-customer-dev.b2bprice.store/api/BCUser/UpdateProfileImage"
        // headers={localStorage.AuthToken}
        listType="picture-circle"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        accept="image/*"
      >
        {uploadButton}
      </Upload>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </>
  );
};

export default App;
