import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Sidebar = () => {
  return (
    <Box
      bgcolor="lightcoral"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ flex: 1 }}
    >
      <Typography variant="h4" noWrap>
        <Box sx={{ textAlign: "center", m: 1 }}>Dashboard</Box>
      </Typography>
    </Box>
  );
};

export default Sidebar;
