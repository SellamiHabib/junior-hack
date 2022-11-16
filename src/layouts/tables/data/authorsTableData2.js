/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team3 from "assets/images/team-3.jpg";
import image2 from "assets/images/ambulanceTrajectory.png"

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns2: [
      { Header: "author", accessor: "author", width: "15%", align: "left" },
      { Header: "Temps restant pour arriver au hopital",width: "25%", accessor: "function", align: "left" },
      { Header: "Vitesse moyenne", accessor: "status", align: "center" },
      { Header: "Trajectoire", accessor: "lieu", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows2: [

      {
        author: <Author image={team3} name="Ahmed Rjibaa" />,
        function: <MDBox display="flex" gap="50px" width="100%" justifyContent="center" alignItems="center" mx={3}>
            <Job title="Estimation " description="15 minutes" />
            <Job title="Écoulé " description="9 minutes" />
        </MDBox> ,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="70 km/h" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        lieu: (
            <MDBox
                component="img"
                src={image2}
                borderRadius="lg"
                shadow="md"
                width="100%"
                height="100%"
                position="relative"
                zIndex={1}
            />
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Appeler
          </MDTypography>
        ),
      },
    ],
  };
}
