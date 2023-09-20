import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@mui/material/IconButton";
import { useOrderedItemsContext } from "../../../store/ordered-items-context";
import React from "react";

const OrderItemTable = () => {
  const { orderedItems, removeOrderItem } = useOrderedItemsContext();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>Customer ID</TableCell>
            <TableCell align="left">Food Ordered</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Total Price</TableCell>
            <TableCell align="center">Order Served</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderedItems.map((customer) => (
            <React.Fragment key={customer.customerId}>
              {customer.orderedItems.map((orderedItem, index) => (
                <TableRow
                  key={orderedItem.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {index === 0 ? (
                    <TableCell rowSpan={customer.orderedItems.length}>
                      {customer.customerId}
                    </TableCell>
                  ) : null}
                  <TableCell>{orderedItem.name}</TableCell>
                  <TableCell align="center">{orderedItem.price}</TableCell>
                  <TableCell align="center">{orderedItem.quantity}</TableCell>
                  <TableCell align="center">
                    {orderedItem.price * orderedItem.quantity}
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      aria-label="delete"
                      // size="small"
                      onClick={() => {
                        removeOrderItem(customer.customerId, orderedItem.id);
                      }}
                    >
                      <CheckIcon fontSize="inherit" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}

              <TableRow>
                <TableCell colSpan={3}>
                  {customer.customerId.slice(0, 13)}
                </TableCell>
                <TableCell align="right" colSpan={2}>
                  Total Amount:
                </TableCell>
                <TableCell align="center" colSpan={1}>
                  {customer.totalPriceForAllItems}
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderItemTable;
