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
import MDTypography from "../../components/MDTypography";
import DataTable from "../../examples/Tables/DataTable";
import data from "./components/Projects/data";
import authorsTableData from "../tables/data/authorsTableData";

function Dashboard() {
    const {sales, tasks} = reportsLineChartData;
    const {columns, rows} = authorsTableData();
    return (
        <DashboardLayout>
            <MDBox py={3}>
                <Grid container spacing={6}>
                    <Grid item xs={12} md={6} lg={4}>
                        <MDBox mb={1.5}>
                            <ComplexStatisticsCard
                                color="dark"
                                icon="weekend"
                                title="Agents de police actifs"
                                count={36}
                                percentage={{
                                    color: "success",
                                }}
                            />
                        </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <MDBox mb={1.5}>
                            <ComplexStatisticsCard
                                icon="leaderboard"
                                title="Vehicule de secours en circulation"
                                count="70"
                            />
                        </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <MDBox mb={1.5}>
                            <ComplexStatisticsCard
                                color="primary"
                                icon="person_add"
                                title="Vehicule de secours bloques"
                                count="3"
                                percentage={{
                                    color: "success",
                                    amount: "",
                                    label: "Just updated",
                                }}
                            />
                        </MDBox>
                    </Grid>
                </Grid>
                <MDBox m={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} lg={8}>
                            <Projects/>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <OrdersOverview/>
                        </Grid>
                    </Grid>
                </MDBox>
                <Grid item xs={12} mt={6}>
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
                        >
                            <MDTypography variant="h6" color="white">
                                Policiers disponible
                            </MDTypography>
                        </MDBox>
                        <MDBox pt={3}>
                            <DataTable
                                table={{ columns, rows }}
                                isSorted={false}
                                entriesPerPage={false}
                                showTotalEntries={false}
                                noEndBorder
                            />
                        </MDBox>
                    </Card>
                </Grid>
            </MDBox>
            <Footer/>
        </DashboardLayout>
    );
}

export default Dashboard;
