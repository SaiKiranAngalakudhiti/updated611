import { useEffect, useState } from "react";
import { Card } from "@mui/material";
import DataTable from "./DataTable";

function TableData() {
  const [data, setData] = useState([]);
  const [clothingType, setClothingType] = useState([]);
  const [clothCategory, setClothCategory] = useState([]);
  useEffect(() => {
    fetch("http://3.82.160.30:4000/clothCatAPI/getClothCategory")
      .then((res) => res.json())
      .then((data) => {
        setClothCategory(data);
      });
  }, []);
  useEffect(() => {
    fetch("http://3.82.160.30:4000/clothAPI/getClothing")
      .then((res) => res.json())
      .then((data) => {
        setClothingType(data);
      });
  }, []);
  useEffect(() => {
    fetch("http://3.82.160.30:4000/recommendAPI/getRecommends")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  const fetchRecord = () => {
    fetch("http://3.82.160.30:4000/recommendAPI/getRecommends")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };
  useEffect(() => {
    fetchRecord();
  }, []);
  const formatData = data?.map((item) => {
    const clothing = clothingType.find(
      (c) => c.clothing_id === item?.clothing_id
    );
    const category = clothCategory.find(
      (c) => c.clothing_category_id === item?.clothing_category_id
    );
    return {
      id: item?.recommended_id,
      clothingType: clothing ? clothing?.clothing_type : "",
      appTemp_Start: item?.apparent_temp_range_start,
      appTemp_End: item?.apparent_temp_range_end,
      clothinCategory: category ? category?.category_name : "",
    };
  });

  // preference_id

  return (
    <Card>
      {clothingType?.length > 0 &&
        clothCategory?.length > 0 &&
        formatData?.length > 0 && (
          <DataTable
            tableData={formatData}
            clothCategoryData={clothCategory}
            clothingTypeData={clothingType}
            fetchRecord={fetchRecord}
          />
        )}
    </Card>
  );
}

export default TableData;
