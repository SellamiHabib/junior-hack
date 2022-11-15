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
import image from '../../assets/images/logos/visa.png'
import MDButton from "../../components/MDButton";

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
                        <Grid item xs={12} md={6} lg={8}>
                            <MDBox p={2}>
                                <Card>
                                    <MDBox  display="flex" justifyContent="space-between" m ={3}>
                                        <MDTypography variant="h6" gutterBottom>
                                            Feux Modifiés
                                        </MDTypography>
                                        <MDButton variant="gradient" color="dark">
                                            <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                                            &nbsp;Modifier un feu temporairement
                                        </MDButton>
                                    </MDBox>
                                    <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                                        <Grid container spacing={3} display="flex" alignItems="center">
                                            <Grid item xs={12} md={6}>
                                                <MDBox
                                                    borderRadius="lg"
                                                    display="flex"
                                                    justifyContent="space-between"
                                                    alignItems="center"
                                                    p={3}
                                                    sx={{
                                                        border: ({borders: {borderWidth, borderColor}}) =>
                                                            `${borderWidth[1]} solid ${borderColor}`,
                                                    }}
                                                >
                                                    <MDBox width="10%" mr={2}>
                                                        <TrafficIcon/>
                                                    </MDBox>

                                                    <MDTypography variant="h6" fontWeight="medium">
                                                        668 711 336
                                                    </MDTypography>
                                                    <MDBox ml="auto" lineHeight={0} color="dark">
                                                        <Tooltip title="Edit Card" placement="top">
                                                            <Icon sx={{cursor: "pointer"}} fontSize="small">
                                                                edit
                                                            </Icon>
                                                        </Tooltip>
                                                    </MDBox>
                                                </MDBox>
                                            </Grid>
                                            <Grid item xs={12} md={6} >
                                                <MDBox
                                                    component="img"
                                                    src={image}
                                                    borderRadius="lg"
                                                    shadow="md"
                                                    width="100%"
                                                    height="100%"
                                                    position="relative"
                                                    zIndex={1}
                                                />
                                            </Grid>

                                        </Grid>
                                    </MDBox>
                                </Card>

                            </MDBox>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <OrdersOverview/>
                        </Grid>
                    </Grid>
                </MDBox>
                <Grid container spacing={6} mt={6}>
                    <Grid item xs={12} md={6} lg={4}>
                        <MDBox mb={3}>
                            <ReportsLineChart
                                color="dark"
                                title="completed tasks"
                                description="Last Campaign Performance"
                                date="just updated"
                                chart={tasks}
                            />
                        </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <MDBox mb={3}>
                            <ReportsLineChart
                                color="success"
                                title="daily sales"
                                description={
                                    <>
                                        (<strong>+15%</strong>) increase in today sales.
                                    </>
                                }
                                date="updated 4 min ago"
                                chart={sales}
                            />
                        </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <MDBox mb={3}>
                            <ReportsLineChart
                                color="success"
                                title="daily sales"
                                description={
                                    <>
                                        (<strong>+15%</strong>) increase in today sales.
                                    </>
                                }
                                date="updated 4 min ago"
                                chart={sales}
                            />
                        </MDBox>
                    </Grid>
                </Grid>
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
                                table={{columns, rows}}
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
