
import React from "react";
import PropTypes from "prop-types";
import {
  Row,
  Col,
  FormSelect,
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from "shards-react";

import Chart from "../../utils/chart";

class AssignedProductvsSalesMade extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {typer: "bar"};
    this.updateState = this.updateState.bind(this);

    this.canvasRef = React.createRef();
    
  };
 updateState(e) {
  this.setState({
    ...this.state,
    typer: e.target.value,
    
  });
  console.log(this.state.typer);
  console.log(e.target.value);
};
  componentDidMount() {
    const chartConfig = {
      type: this.state.typer,
      data: this.props.chartData,
      options: {
        ...{
          legend: {
            position: "bottom",
            labels: {
              padding: 25,
              boxWidth: 20
            }
          },
          cutoutPercentage: 0,
          tooltips: {
            custom: false,
            mode: "index",
            position: "nearest"
          }
        },
        ...this.props.chartOptions
      }
    };

    new Chart(this.canvasRef.current, chartConfig);
  }
  componentDidUpdate(prevState){
    if(this.state.typer !== prevState.typer){
      console.log(this.state.typer);
      const chartConfig = {
        type: this.state.typer,
        data: this.props.chartData,
        options: {
          ...{
            legend: {
              position: "bottom",
              labels: {
                padding: 25,
                boxWidth: 20
              }
            },
            cutoutPercentage: 0,
            tooltips: {
              custom: false,
              mode: "index",
              position: "nearest"
            }
          },
          ...this.props.chartOptions
        }
      };
        new Chart(this.canvasRef.current, chartConfig);
    };
    
  }
  render() {

    const { title } = this.props;

    return (
      <Card small className="h-100">
        <CardHeader className="border-bottom">
          
          <Row>
            <h6 className="m-0">{title}</h6>
            <Col>
              <FormSelect
                size="sm"
                style={{ maxWidth: "130px" }}
                onChange = {this.updateState}
              >
                <option value="bar">Bar</option>
                <option value="pie">Pie</option>
                <option value="line">Line</option>
                
              </FormSelect>
            </Col></Row>
        </CardHeader>
        <CardBody className="d-flex py-0">
          <canvas
            height="220"
            ref={this.canvasRef}
            className="blog-users-by-device m-auto"
          />
        </CardBody>
        <CardFooter className="border-top">
          <Row>
            <Col>
              <FormSelect
                size="sm"
                value="last-week"
                style={{ maxWidth: "130px" }}
                onChange={() => {}}
              >
                <option value="last-week">Last Week</option>
                <option value="today">Today</option>
                <option value="last-month">Last Month</option>
                <option value="last-year">Last Year</option>
              </FormSelect>
            </Col>
            <Col>
              <FormSelect
                size="sm"
                value="Team A"
                style={{ maxWidth: "130px" }}
                onChange={() => {}}
              >
                <option value="last-week">Team A</option>
                <option value="today">Team B</option>
                <option value="last-month">Team C</option>
                <option value="last-year">Team D</option>
              </FormSelect>
            </Col>
            <Col>
              <FormSelect
                size="sm"
                value="Zone A"
                style={{ maxWidth: "130px" }}
                onChange={() => {}}
              >
                <option value="last-week">Zone A</option>
                <option value="today">Zone B</option>
                <option value="last-month">Zone C</option>
                <option value="last-year">Zone D</option>
              </FormSelect>
            </Col>
            <Col>
              <FormSelect
                size="sm"
                value="1"
                style={{ maxWidth: "130px" }}
                onChange={() => {}}
              >
                <option value="1">Vegetalbes</option>
                <option value="2">Electronics</option>
                <option value="3">Furniture</option>
                <option value="4">Cereals</option>
              </FormSelect>
            </Col>
            <Col>
              <FormSelect
                size="sm"
                value="1"
                style={{ maxWidth: "130px" }}
                onChange={() => {}}
              >
                <option value="1">Person 1</option>
                <option value="2">Person 2</option>
                <option value="3">Person 3</option>
                <option value="4">Person4</option>
              </FormSelect>
            </Col>
            
            
            <Col className="text-right view-report">
              {/* eslint-disable-next-line */}
              <a href="#">View full report &rarr;</a>
            </Col>
          </Row>
        </CardFooter>
      </Card>
    );
  }
}

AssignedProductvsSalesMade.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The chart config object.
   */
  chartConfig: PropTypes.object,
  /**
   * The Chart.js options.
   */
  chartOptions: PropTypes.object,
  /**
   * The chart data.
   */
  chartData: PropTypes.object
};

AssignedProductvsSalesMade.defaultProps = {
  title: "Assigned Products vs Sales Made",
  chartData: {
    datasets: [
      {
        hoverBorderColor: "#ffffff",
        data: [68.3, 24.2, 7.5],
        backgroundColor: [
          "rgba(0,123,255,0.9)",
          "rgba(0,123,255,0.5)"
        ]
      }
    ],
    labels: ["Assigned Products", "Sales Made"]
  }
};

export default AssignedProductvsSalesMade;
