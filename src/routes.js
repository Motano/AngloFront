//vistas de las secciones
import Dashboard from "./views/Dashboard.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Short Term",
    icon: "fas fa-chart-pie",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/inventario",
    name: "Planta molienda 1",
    icon: "fas fa-box-open",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/registro-ventas",
    name: "Planta molienda 2",
    icon: "fas fa-shopping-basket",
    component: Dashboard,
    layout: "/admin",
  },
  /*{
    path: "/trabajadores",
    name: "Trabajadores",
    icon: "fas fa-users",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/importaciones",
    name: "Importaciones",
    icon: "fas fa-calculator",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/registro-gastos",
    name: "Registro de gastos",
    icon: "fas fa-clipboard-list",
    component: Dashboard,
    layout: "/admin",
  },*/
];

export default dashboardRoutes;
