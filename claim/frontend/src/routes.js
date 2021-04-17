import LoginPage from "views/Pages/LoginPage.jsx";
import LogoutPage from "views/Pages/LogoutPage.jsx";
import RepairOrderListAdmin from "views/RepairOrders/RepairOrderListAdmin";
import RepairOrderList from "views/RepairOrders/RepairOrderList";
import AddRepairOrder from "views/RepairOrders/AddRepairOrder";
import { loadFromLocalStorage } from 'redux/reducers/auth'

var routes = [
  {
    path: "/dashboard",
    layout: "/frontend/admin",
    name: "Dashboard",
    icon: "pe-7s-graph",
    category: ["admin",],
    component: RepairOrderListAdmin
  },  
  {
    path: "/dashboard",
    layout: "/frontend/dealership",
    name: "Dashboard",
    icon: "pe-7s-graph",
    category: ["dealership",],
    component: RepairOrderList
  },
  {
    path: "/upload_pdf",
    layout: "/frontend/dealership",
    name: "Upload Repair Order",
    icon: "pe-7s-note2",
    category: [],
    component: AddRepairOrder
  },
  {
    path: "/login-page",
    layout: "/frontend/auth",
    name: "Login",
    icon: "pe-7s-users",
    category: [],
    component: LoginPage
  },
  {
    path: "/logout-page",
    layout: "/frontend/auth",
    name: "Log out",
    icon: "pe-7s-next-2",
    category: ["admin", "dealership",],
    component: LogoutPage
  },
];

const routes_head = loadFromLocalStorage('dealerships').map(d => ({
  path: "/dashboard/?dealership=" + d.name,
  layout: "/frontend/admin",
  name: d.name,
  icon: "pe-7s-graph",
  category: ["admin",],
  component: RepairOrderListAdmin
}))
routes = routes_head.concat(routes);
export default routes;
