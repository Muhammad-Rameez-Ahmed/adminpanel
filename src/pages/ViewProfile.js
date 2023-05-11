import { useCallback, useState, useRef } from "react";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { AddAPhoto } from "@material-ui/icons";
import { Fab, Tooltip } from "@material-ui/core";
import ImageUploader from "src/components/ImagePicker";
import ProfilePicture from "src/components/userPic";
import CNIC from "src/components/CNICpic";
import Pictures from "src/components/pictures";

import {
  Alert,
  TableCell,
  Box,
  Button,
  FormHelperText,
  CircularProgress,
  Grid,
  Link,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { useAuth } from "src/hooks/use-auth";
import { Layout as AuthLayout } from "src/layouts/auth/layout";

const Page = () => {
  const router = useRouter();
  const auth = useAuth();
  const [method, setMethod] = useState("email");
  const [imageLoader, setImageLoader] = useState(false);
  const [imageError, setImageError] = useState(false);
  const image =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAACCCAMAAAADi7iSAAAAOVBMVEX///+hoaGdnZ3q6uqurq74+PjIyMiamprV1dXi4uLu7u62trb8/PzOzs7Ly8vx8fHb29vAwMCnp6erU/cCAAABoElEQVR4nO3Z7W6CMBSAYc8pUAqIwP1f7ORDhsCysi05XfI+vwxC8gqlRb3dAAAAAAAAAAAAAADAb4XsJ+5GtYVXf5kOuVVtW7lrqk4ys9ry8jEVtVGW2saFR/Qx1rWPWmSIvtGNa/NBRcTH5hrXll5GQxN3jHFtr1Otj2wwri3+Va2bRoL2J++H7hhmPSfcvaofTuaw0vvsMJqta2+u6M9mhPAcIlrvt5rXnmuGaYR0u82J1tbL3efeN6dZ282xIruhm2TtPFOczBYp1jaZrPzb0E2mdnPJe/2sFa02O6VSG+r1mndeturN50ikNnh5LQaVvsWK3wzdNGrzcXrVdnpd72pFw7pfErXNXOjHrN7LwTp0k6hdnnLl+bwQ9mdWtitwCrVO1yx3bB1PeptO7XZ6HU5rRV0ytYfb6kyeSG0XE7uswOa1Lib29bXYvDaLq51XYOvaIjJWpk7j2nCyFnx1cnvr2ur5HTLauL9pbVdc0TamtU1+kbOr1eH63w5qVVtG319bfeTve3/u4p8OM6NTCwAAAAAAAAAAAADANz4AyPET28Hf74MAAAAASUVORK5CYII=";

  const inputImage = useRef();
  const onImageChange = async (event) => {
    console.log(event.target.files[0]);
    setImageLoader(true);
    if (event.target.files && event.target.files[0]) {
      uploadMedia(event.target.files[0]).then((res) => {
        setImageLoader(false);
        setImage(res);
        setImageError(false);
      });

      // setImage(URL.createObjectURL(event.target.files[0]));
    } else {
      setImageLoader(false);
    }
  };

  return (
    <>
      <Head>
        <title>Kurdish Admin Panel</title>
      </Head>
      <Box
        sx={{
          backgroundColor: "background.paper",
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: "100px",
            width: "100%",
          }}
        >
          <div>
            <Stack style={{ textAlign: "center" }} spacing={1} sx={{ mb: 5 }}>
              <Typography variant="h4"> User Profile</Typography>
            </Stack>

            {method === "email" && (
              <form noValidate>
                {/* <div>
                                    <h1 styles={{ display: "flex", textAlign: "center", alignItem: "center" }}>image here</h1>

                                </div> */}

                <Stack>
                  <TableCell style={{ fontWeight: "bolder" }}>{<ProfilePicture />}</TableCell>
                  <TableCell style={{ fontWeight: "bolder" }}>{<Pictures />}</TableCell>
                  <TableCell
                    style={{ fontWeight: "bolder" }}
                  >{`Name: Martin Skeens Guptil `}</TableCell>
                  <TableCell style={{ fontWeight: "bolder" }}>{`Gender: Male `}</TableCell>
                  <TableCell
                    style={{ fontWeight: "bolder" }}
                  >{`Gmail: skeens@gmail.com  , martin@gmail.com `}</TableCell>
                  <TableCell
                    style={{ fontWeight: "bolder" }}
                  >{`Location: North America`}</TableCell>
                  <TableCell style={{ fontWeight: "bolder" }}>{`Phone NO: 28579247`}</TableCell>

                  <TableCell style={{ fontWeight: "bolder" }}>{`Occupation:Doctor`}</TableCell>

                  <TableCell style={{ fontWeight: "bolder" }}>CNIC{<CNIC />}</TableCell>
                </Stack>

                <Stack>
                  <Button fullWidth size="large" sx={{ mt: 4 }} type="submit" variant="contained">
                    Accepted
                  </Button>
                  <Button fullWidth size="large" sx={{ mt: 4 }} type="submit" variant="contained">
                    Rejected
                  </Button>
                </Stack>
              </form>
            )}
          </div>
        </Box>
      </Box>
    </>
  );
};

// Page.getLayout = (page) => (
//   <AuthLayout>
//     {page}
//   </AuthLayout>
// );

export default Page;
