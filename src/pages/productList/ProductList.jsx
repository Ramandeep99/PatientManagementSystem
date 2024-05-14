import "./productList.css";
import { DeleteOutline} from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';

import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api";

export default function ProductList() {
  const [data, setData] = useState([]);

  const fetchPatientsData = async () =>{
    const response = await api.get("/patients/");
    setData(response.data);
  }

  useEffect(()=>{
    fetchPatientsData();
  }, [])

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Patient Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {/* <img className="productListImg" src={params.row.img} alt="" /> */}
            {params.row.name}
          </div>
        );
      },
    },
    { field: "age", headerName: "Age", width: 200 },
    {
      field: "contact_num",
      headerName: "Contact Number",
      width: 160,
    },

    { field: "dob", headerName: "Date Birth", width: 200,
      renderCell: (params) => {
        return (
          <div className="date">
            {params.row.date_of_birth}
          </div>
        );
      },
    },
    
    { field: "date", headerName: "Added Date", width: 200,
      renderCell: (params) => {
        return (
          <div className="date">
            {params.row.date}
          </div>
        );
      },
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}

// 8168599706