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

import {useState} from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React examples
import DataTable from "examples/Tables/DataTable";

// Data
import data from "layouts/dashboard/components/Projects/data";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import TrafficIcon from '@mui/icons-material/Traffic';

function Projects() {
    const {columns, rows} = data();
    const [menu, setMenu] = useState(null);

    const openMenu = ({currentTarget}) => setMenu(currentTarget);
    const closeMenu = () => setMenu(null);

    const renderMenu = (
        <Menu
            id="simple-menu"
            anchorEl={menu}
            anchorOrigin={{
                vertical: "top",
                horizontal: "left",
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={Boolean(menu)}
            onClose={closeMenu}
        >
            <MenuItem onClick={closeMenu}>Action</MenuItem>
            <MenuItem onClick={closeMenu}>Another action</MenuItem>
            <MenuItem onClick={closeMenu}>Something else</MenuItem>
        </Menu>
    );

    return (
        <Card>
            <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                <MDBox>
                    <MDTypography variant="h6" gutterBottom>
                        Cartes
                    </MDTypography>
                </MDBox>

            </MDBox>


            <MDBox>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={4}> t</Grid>
                    <Grid item xs={12} md={6} lg={4}> t </Grid>
                </Grid>
            </MDBox>
        </Card>

    );
}

export default Projects;
