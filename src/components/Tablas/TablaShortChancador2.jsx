import React from "react";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import {Table} from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

function TablaShortConfluencia(){
    let tableData = new Array();
    for (let i = 0; i< 8; i++){
      tableData[i] = [];
      for (let j = 0; j< 32; j++){
        tableData[i].push (
          <td>
            <form>
                <div class ="row p-2">
                    <input type ="text" placeholder= '0' />
                </div>
            </form>
          </td>
            );
      }
    }
    let TableColumn  = new Array();
  
    for (let i = 0; i<31 ; i++){
      TableColumn.push(
        <th scope="col" width = "50">{i+1}</th>
      )
    }
    return(
        <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
            <Card>
            <CardHeader color="primary">
                <h4 className="cardTitleWhite">Chancador Primario n°2</h4>
                <p className="cardCategoryWhite">
                ENERO
                </p>
            </CardHeader>
            <CardBody>
                <div class ="table-responsive-sm">
                <Table class= "table" tableHeaderColor="primary">
                <thead >
                    <tr>
                    <th scope="col" width = "200">  </th>
                    {TableColumn}
                    <th scope="col" width = "60">TOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td className="text-dark table-primary">Hrs posibles Molienda CF</td>
                      {tableData[0]}
                    </tr>
                    <tr>
                      <td className="text-dark table-primary">DETENCIONES</td>
                    </tr>
                    <tr>
                      <td className="text-dark table-primary">Imprevistos</td>
                      {tableData[1]}
                    </tr>
                    <tr>
                      <td className="text-dark table-primary">EfectoBajo stock/invierno</td>
                      {tableData[2]}
                    </tr>
                    <tr>
                      <td className="text-dark table-primary">Mantenimiento Programado</td>
                      {tableData[2]}
                    </tr>
                    <tr>
                      <td className="text-dark table-primary">Control de procesos</td>
                      {tableData[3]}
                    </tr>
                    <tr>
                    <td className="text-dark table-primary">Estrategia Operacional de Agua</td>
                        {tableData[4]}
                    </tr>
                    <tr>
                      <td className="text-dark table-primary">Horas reales</td>
                    </tr>
                    <tr>
                      <td className="text-dark table-primary">Correa Overland</td>
                    </tr>
                    <tr>
                      <td className="text-dark table-primary">Mantenimiento Programado</td>
                      {tableData[2]}
                    </tr>
                </tbody>
                </Table>
                </div>
            </CardBody>
            </Card>
        </GridItem>
        </GridContainer>
    );
}

export default TablaShortConfluencia;