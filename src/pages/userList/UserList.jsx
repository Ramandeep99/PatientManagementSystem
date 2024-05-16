import "./userList.css";
import { DataGrid } from '@mui/x-data-grid';

export default function UserList({appointments}) {

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "doctor_name",
      headerName: "Doctor Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.doctor_name}
          </div>
        );
      },
    },
    {
      field: "amount",
      headerName: "Transaction Amount",
      width: 160,
    },
    {
      field: "payment_link",
      headerName: "Payment Link",
      width: 160,
      renderCell: (params) => {
        return (
          <a className="userListUser" href={params.row.payment_link} target="_blank">
            Payment Link
          </a>
        );
      }
    }
  ];

  return (
    <>
    <div className="userList">
    <h2 className="headerUserlist">Appointments</h2>
      <DataGrid
        rows={appointments}
        disableSelectionOnClick
        columns={columns}
        pageSize={4}
        />
    </div>
     </>
  );
}