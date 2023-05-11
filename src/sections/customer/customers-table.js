import PropTypes from "prop-types";
import { format } from "date-fns";
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import { getInitials } from "src/utils/get-initials";
import { PaymentTable } from "src/sections/customer/payment-table";
import EditUser from "src/pages/EditRestaurant";
import UserProfile from "src/pages/ViewProfile";

import { useState } from "react";

export const CustomersTable = (props) => {
  const [edit, setEdit] = useState(false);
  const [view, setView] = useState(false);

  const handleClick1 = () => {
    setEdit(true);
  };
  const handleClick2 = () => {
    setView(true);
  };

  const {
    count = 0,
    items = [],
    onDeselectAll,
    onDeselectOne,
    onPageChange = () => {},
    onRowsPerPageChange,
    onSelectAll,
    onSelectOne,
    page = 0,
    rowsPerPage = 0,
    selected = [],
  } = props;

  const selectedSome = selected.length > 0 && selected.length < items.length;
  const selectedAll = items.length > 0 && selected.length === items.length;

  return (
    <>
      <Card>
        {edit ? (
          <EditUser />
        ) : view ? (
          <UserProfile />
        ) : (
          <>
            <Scrollbar>
              <Box sx={{ minWidth: 80 }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Location</TableCell>
                      <TableCell>Phone</TableCell>
                      <TableCell>Edit</TableCell>
                      <TableCell>View</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {items.map((customer) => {
                      const isSelected = selected.includes(customer.id);
                      {
                        /* const createdAt = format(customer.createdAt, 'dd/MM/yyyy'); */
                      }

                      return (
                        <>
                          <TableRow hover key={customer.id} selected={isSelected}>
                            {
                              <>
                                <TableCell>
                                  <Stack alignItems="center" direction="row" spacing={2}>
                                    <Avatar src={customer.avatar}>
                                      {getInitials(customer.name)}
                                    </Avatar>
                                    <Typography variant="subtitle2">{customer.name}</Typography>
                                  </Stack>
                                </TableCell>
                                <TableCell>{customer.email}</TableCell>
                                <TableCell>
                                  {customer.address.city}, {customer.address.state},{" "}
                                  {customer.address.country}
                                </TableCell>
                                <TableCell>{customer.phone}</TableCell>
                                <TableCell onClick={handleClick1}>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 svg-small"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                    />
                                  </svg>
                                </TableCell>
                                <TableCell onClick={handleClick2}>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                    />
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                  </svg>
                                </TableCell>
                              </>
                            }
                          </TableRow>
                        </>
                      );
                    })}
                  </TableBody>
                </Table>
              </Box>
            </Scrollbar>
            <TablePagination
              component="div"
              count={count}
              onPageChange={onPageChange}
              onRowsPerPageChange={onRowsPerPageChange}
              page={page}
              rowsPerPage={rowsPerPage}
              rowsPerPageOptions={[5, 10, 25]}
            />
          </>
        )}
      </Card>
    </>
  );
};

CustomersTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onDeselectAll: PropTypes.func,
  onDeselectOne: PropTypes.func,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectOne: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array,
};
