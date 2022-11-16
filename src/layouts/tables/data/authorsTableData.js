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
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

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
    columns: [
      { Header: "author", accessor: "author", width: "45%", align: "left" },
      { Header: "function", accessor: "function", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "lieu", accessor: "lieu", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        author: <Author image={team2} name="Slimen Labyedh" />,
        function: <Job title="Infirmière " description="Lieutenant" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="libre" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        lieu: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Tunis, Bardo
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Appeler
          </MDTypography>
        ),
      },
      {
        author: <Author image={team3} name="Ahmed Rjiba" />,
        function: <Job title="Infirmière " description="Brigdaier" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="EN MISSION" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        lieu: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Tunis, Aouina
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Appeler
          </MDTypography>
        ),
      },
      {
        author: <Author image={team4} name="Saul Goodman" />,
        function: <Job title="infirmière auxiliaire" description="Sous-lieutenant" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="libre" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        lieu: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Parking de l'hopital
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Appeler
          </MDTypography>
        ),
      },
      {
        author: <Author image={team3} name="Aymen Reteii" />,
        function: <Job title="Infirmier" description="Brigdaier" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="libre" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        lieu: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Parking de l'hopital
          </MDTypography>
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
