import Sidebar from "../components/admin/Sidebar";
import Main from "../components/admin/Main";
import Box from "@mui/material/Box";

const Admin = () => {
  return (
    <Box display="flex">
      <Sidebar />
      <Main />
    </Box>
  );
};

export default Admin;
