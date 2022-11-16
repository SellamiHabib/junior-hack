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
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import TrafficIcon from "@mui/icons-material/Traffic";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import CircleIcon from '@mui/icons-material/Circle';
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import Card from "@mui/material/Card";
import logo from "assets/images/flashRescue.png";
import MDTypography from "../../components/MDTypography";
import DataTable from "../../examples/Tables/DataTable";
import data from "./components/Projects/data";
import authorsTableData from "../tables/data/authorsTableData";
import authorsTableData2 from "../tables/data/authorsTableData2";

import MDButton from "../../components/MDButton";

function Dashboard2() {
    const {sales, tasks} = reportsLineChartData;
    const {columns, rows} = authorsTableData();
    const {columns2, rows2} = authorsTableData2();

    return (
        <DashboardLayout>
            <MDBox py={3}>
                <MDBox component="img" src={logo} width="15%" mb={6} mt={0} ml={70} borderRadius="30%"/>
                <Grid container spacing={6} mt={1}>
                    <Grid item xs={12} mt={1}>
                        <Card>
                            <MDBox
                                mx={2}
                                mt={-3}
                                py={3}
                                px={2}
                                variant="gradient"
                                bgColor="info"
                                borderRadius="lg"
                                coloredShadow="info"
                                display="flex"
                                justifyContent="space-between"
                            >
                                <MDTypography variant="h6" color="white">
                                    Ambulance / Vehicule de secours inscrites
                                </MDTypography>
                                <MDTypography variant="h6" color="white">
                                    4/5
                                </MDTypography>
                            </MDBox>

                            <MDBox pt={3}>
                                <DataTable
                                    table={{columns, rows}}
                                    isSorted={false}
                                    entriesPerPage={false}
                                    showTotalEntries={false}
                                    noEndBorder
                                />
                            </MDBox>
                            <MDBox lg={2} display="flex" justifyContent="flex-end" p={3}>
                                <MDButton variant="gradient" color="dark">
                                    <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                                    &nbsp;Ajouter une ambulance
                                </MDButton>
                            </MDBox>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={6} mt={1} mb={6}>
                    <Grid item xs={12} mt={1}>
                        <Card>
                            <MDBox
                                mx={2}
                                mt={-3}
                                py={3}
                                px={2}
                                variant="gradient"
                                bgColor="info"
                                borderRadius="lg"
                                coloredShadow="info"
                                display="flex"
                                justifyContent="space-between"
                            >
                                <MDTypography variant="h6" color="white">
                                    Ambulances en mission
                                </MDTypography>
                                <MDTypography variant="h6" color="white">
                                    1/5
                                </MDTypography>
                            </MDBox>

                            <MDBox pt={3}>
                                <DataTable
                                    table={{columns : columns2, rows : rows2}}
                                    isSorted={false}
                                    entriesPerPage={false}
                                    showTotalEntries={false}
                                    noEndBorder
                                />
                            </MDBox>
                            <MDBox lg={2} display="flex" justifyContent="flex-end" p={3}>
                                <MDButton variant="gradient" color="error">
                                    <Icon sx={{ fontWeight: "bold" }}>call</Icon>
                                    &nbsp;Appeler les autorités
                                </MDButton>
                            </MDBox>
                        </Card>
                    </Grid>
                </Grid>

            </MDBox>
            
        </DashboardLayout>
    );
}

export default Dashboard2;
