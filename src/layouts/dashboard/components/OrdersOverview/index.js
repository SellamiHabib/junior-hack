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

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Demandes d&lsquo;intervention
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ color: ({ palette: { success  } }) => success.main }}>arrow_upward</Icon>
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="medium">
              Derniere mise a jour il y a
            </MDTypography>{" "}
            5 minutes
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <TimelineItem
          color="red"
          icon="notifications"
          title="Ambulance VSAV "
          dateTime="SFAX, Route Taniour Km 3, 22/12 7:20 PM "
        />
        <TimelineItem
            color="warning"
            icon="payment"
            title="Pompier XTQ"
            dateTime="Kef, Autoroute 20 DEC 2:20 AM"
        />
        <TimelineItem
            color="warning"
            icon="payment"
            title="Ambulance PQW"
            dateTime="Tunis, Aouina 20 DEC 2:20 AM"
        />
        <TimelineItem
          color="warning"
          icon="payment"
          title="Pompier TTY"
          dateTime="Kasserine, RT-NT 20 DEC 2:20 AM"
        />      <TimelineItem
          color="red"
          icon="notifications"
          title="Ambulance VSAV "
          dateTime="SFAX, Route Taniour Km 3, 22/12 7:20 PM "
      />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
