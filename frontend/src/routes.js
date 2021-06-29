import Dashboard from "views/Dashboard.js";
import Graph1 from "views/Graph1.js";
import Graph2 from "views/Graph2.js";
import Graph3 from "views/Graph3.js";
import Graph4 from "views/Graph4.js";
import envGraph from "views/envGraph.js";
import SNGraph from "views/SNGraph.js";

import TableList from "views/TableList.js";
import Help from "views/Help.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user1",
    name: "Graph1",
    component: Graph1,
    layout: "/admin",
  },
  {
    path: "/user2",
    name: "Graph2",
    component: Graph2,
    layout: "/admin",
  },
  {
    path: "/user3",
    name: "Graph3",
    component: Graph3,
    layout: "/admin",
  },
  {
    path: "/user4",
    name: "Graph4",
    component: Graph4,
    layout: "/admin",
  },
  {
    path: "/user5",
    name: "Graph5",
    component: envGraph,
    layout: "/admin",
  },
  {
    path: "/user6",
    name: "Graph6",
    component: SNGraph,
    layout: "/admin",
  },
  {
    path: "/tablelist",
    name: "TableList",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/help",
    name: "Help",
    component: Help,
    layout: "/admin",
  },
];

export default dashboardRoutes;
