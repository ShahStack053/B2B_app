import { SearchOutlined } from "@ant-design/icons";
import Line from "../../Assets/Images/Line.png";
import { Input } from "antd";
import { DatePicker, Space } from "antd";
import StatusDropDown from "../Dropdown/StatusDropDown";
import "./SearchRange.css";

const SearchRange = ({
  setSearchValues,
  searchValues,
  onChangeRange,
  onChangeStatus,
}) => {
  const { RangePicker } = DatePicker;

  return (
    <div className="orders-search-main-div">
      <div className="orders-search-div">
        <Input
          style={{
            borderRadius: 12,
            width: "95%",
            borderStyle: "none",
            border: "1px solid #EFEEEB",
            height: 40,
          }}
          placeholder="Search Order, Customer..."
          prefix={<SearchOutlined style={{ color: "#7E7E7E" }} />}
          onChange={
            (e) => setSearchValues({ ...searchValues, search: e.target.value })
            // setSearchData({ ...searchData, search: e.target.value })
          }
        />
      </div>
      <img
        src={Line}
        alt="Line"
        style={{
          height: 30,
          opacity: 0.9,
          marginRight: 20,
        }}
      />
      <div className="orders-dropdown-div">
        <Space>
          <RangePicker
            style={{
              fontFamily: "Poppins",
              fontSize: "14px",
              color: "#000000",
              background: "#FFFFFF",
              height: 40,
              width: "100%",
              borderRadius: 12,
              border: "1px solid #EFEEEB",
            }}
            onChange={onChangeRange}
          />
        </Space>
        <StatusDropDown
          setSearchValues={setSearchValues}
          searchValues={searchValues}
          onChange={onChangeStatus}
        />
      </div>
    </div>
  );
};

export default SearchRange;
