import React from "react";
import { useTable } from "react-table";
import { Container, Row, Col } from "react-bootstrap";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import {Table} from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import { FormProvider } from "react-hook-form";
import { useState } from "react";
import TablaShortLB from "components/Tablas/TablaShortLB.jsx";
import TablaShortConfluencia from "components/Tablas/TablaShortConfluencia";
import TablaShortChancador1 from "components/Tablas/TablaShortChancador1";
import TablaShortChancador2 from "components/Tablas/TablaShortChancador2";

const Dashboard = () => {

  return (
    <>
      <TablaShortLB/>
      <TablaShortConfluencia/>
      <TablaShortChancador1/>
      <TablaShortChancador2/>
    </>
  );
}



export default Dashboard;

