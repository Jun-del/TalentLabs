import Box from "@mui/material/Box";
import Sidebar from "../components/admin/sidebar/Sidebar";
import Main from "../components/admin/main/Main";
import useMediaQuery from "@mui/material/useMediaQuery";

const Admin = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box display="flex" flexDirection={isSmallScreen ? "column" : "row"}>
      <Sidebar />
      <Main />
    </Box>
  );
};

export default Admin;
