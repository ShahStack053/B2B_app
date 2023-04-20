import "./AddProduct.css";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import ProCategoryDdown from "../../Dropdown/ProCategoryDdown";
import ProSortDropDown from "../../Dropdown/ProSortDropDown";
import AddProductTable from "../../featureTable/AddProductTable";

const AddProduct = () => {
  // const location = useLocation();
  // const selectedProduct = location.state.selectedRowKeys;
  return (
    <div className="add-product-container">
      <div className="add-product-div">
        <div className="add-product-title-div">
          <Link to="/main/orders">
            <ArrowLeftOutlined className="add-product-arrow" />
          </Link>
          <span className="add-product-span">Add Products</span>
        </div>
        <p className="selected-product">
          Selected Products: 08{/*{selectedProduct}*/}
          <span className="clear-selection-span">Clear Selection</span>
        </p>
      </div>
      <div className="product-search-div">
        <div className="total-product-div">
          <p className="total-product">
            Total Products:
            <span className="total-product-value-span">&nbsp;&nbsp;10,856</span>
          </p>
        </div>
        <div className="product-search-dropdown-div">
          <Input
            style={{
              borderRadius: 12,
              width: "55%",
              borderStyle: "none",
              border: "1px solid #EFEEEB",
              height: 40,
            }}
            placeholder="Search by Product ID, Product Name, SKU, Barcode"
            prefix={<SearchOutlined style={{ color: "#7E7E7E" }} />}
          />
          <ProCategoryDdown />
          <ProSortDropDown />
        </div>
      </div>
      <>
        <AddProductTable />
      </>
    </div>
  );
};

export default AddProduct;
