import React from "react";
import Button from "react-bootstrap/Button";
import MapObject from "./MapObject";
import Card from "react-bootstrap/Card";
import GeoChart from "../charts/GeoChart";
import PieChart from "../charts/PieChart";
import LineChart from "../charts/LineChart";

const Body = () => {
  return (
    <>
      <Card className="bg-dark text-white">
        <Card.Img src="images\pexels-fauxels-3183197.png" alt="Card image" />
        <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
          <div className="text-center">
            <Card.Title style={{ fontSize: "4rem" }}>
              Artificial Intelligence.
            </Card.Title>
            <Card.Title style={{ fontSize: "2rem" }}>Real Insights.</Card.Title>
            <Card.Text style={{ fontSize: "1.5rem" }}>
              Fenix Insight is an advanced insight engine purpose built for EOD
              operations, training and risk management.
            </Card.Text>
            <Button variant="success">Get Started Now</Button>{" "}
            <Button variant="light">Login</Button>{" "}
          </div>
        </Card.ImgOverlay>
      </Card>
      <Card>
        <div className="middle">
          <div style={{ width: "30rem" }}>
            <Card.Body>
              <Card.Title
                style={{
                  fontSize: "4rem",
                  color: "#e8c547",
                  fontFamily: "Raleway",
                }}
              >
                Powered by
              </Card.Title>
              <Card.Title
                style={{
                  fontSize: "4rem",
                  color: "#e8c547",
                  fontFamily: "Raleway",
                }}
              >
                custom A.I.
              </Card.Title>
              <Card.Title
                style={{
                  fontSize: "2rem",
                  color: "white",
                  fontFamily: "Raleway",
                }}
              >
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Title>
            </Card.Body>
          </div>
          <div>
            <Card.Body>
              <Card.Title
                style={{
                  fontSize: "4rem",
                  color: "#e8c547",
                  fontFamily: "Raleway",
                }}
              >
                <a href="#" class="custom-link">
                  Who We Are ?
                </a>
              </Card.Title>
              <hr></hr>
              <Card.Title
                style={{
                  fontSize: "4rem",
                  color: "#e8c547",
                  fontFamily: "Raleway",
                }}
              >
                <a href="#" class="custom-link">
                  What We Build ?
                </a>
              </Card.Title>
              <hr></hr>
              <Card.Title
                style={{
                  fontSize: "4rem",
                  color: "#e8c547",
                  fontFamily: "Raleway",
                }}
              >
                <a href="#" class="custom-link">
                  How We Build ?
                </a>
              </Card.Title>
            </Card.Body>
          </div>
        </div>
      </Card>
      <Card>
        <Card.Title
          style={{
            fontSize: "4rem",
            textAlign: "center",
            color: "#183b66",
            fontFamily: "Raleway",
            margin: 30,
          }}
        >
          Real-time, interactive, global data
        </Card.Title>
        <Card.Body>
          <div style={{ marginLeft: 30, marginTop: 10 }}>
            <MapObject></MapObject>
          </div>
        </Card.Body>
      </Card>
      <div className="chart">
        <GeoChart></GeoChart>
        <div className="chart-div">
          <PieChart></PieChart>
          <LineChart></LineChart>
        </div>
      </div>
      <div className="end">
        <div style={{ textAlign: "center", padding: "10px", fontSize: "30px" }}>
          <select>
            <option>(£) Pounds </option>
            <option>(€) Euros</option>
            <option>(£) Pounds</option>
          </select>
        </div>
        <div
          style={{
            display: "flex",
            margin: "10px",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            padding: "10px",
          }}
        >
          <div>
            <Card style={{ width: "18rem", height: "40rem" }}>
              <Card.Body class="text-center">
                <Card.Title>Pro Free Trial</Card.Title>
                <Card.Text style={{ fontSize: "1.5rem" }}>£ 30.45</Card.Text>
                <br></br>
                <Card.Subtitle className="mb-2 text-muted">
                  /User/month
                </Card.Subtitle>
                <br></br>
                <Button variant="primary">Monthly</Button>
                <br></br>
                <br></br>
                <Button variant="success">Start 7-Day Free Trial</Button>
              </Card.Body>
              <hr></hr>
              <div>
                <ul>
                  <li>70+ countries and associated events</li>
                  <li>Access to munition data</li>
                  <li>Dynamic category munition data charts</li>
                  <li>
                    Detailed country page layout (Map layers , Markers , Heatmap
                    , Medical facilities, Infrastructure)
                  </li>
                  <li>
                    Complete munitions information (Pie charts, Line graphs)
                  </li>
                  <li>Informative date range selector</li>
                  <li>Identified munitions</li>
                  <li>Events timeline</li>
                  <li>Upgrade to Teams at any time</li>
                </ul>
              </div>
            </Card>
          </div>
          <div>
            <Card style={{ width: "18rem", height: "40rem" }}>
              <Card.Body class="text-center">
                <Card.Title>Pro</Card.Title>
                <Card.Text style={{ fontSize: "1.5rem" }}>£ 30.45</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  /User/month
                </Card.Subtitle>

                <select>
                  <option>1 User</option>
                  <option>2 User</option>
                  <option>3 User</option>
                  <option>4 User</option>
                  <option>5 User</option>
                  <option>6 User</option>
                  <option>7 User</option>
                </select>

                <br></br>
                <br></br>
                <Button variant="primary">Monthly</Button>
                <br></br>
                <br></br>
                <Button variant="success">Get Started Now</Button>
              </Card.Body>
              <hr></hr>
              <div>
                <ul>
                  <li>All Benefits of Free Trial Access</li>
                  <li>Team Management</li>
                </ul>
              </div>
            </Card>
          </div>
          <div>
            <Card style={{ width: "18rem", height: "40rem" }}>
              <Card.Body class="text-center">
                <Card.Title>Enterprise</Card.Title>
                <br></br>
                <br></br>
                <br></br>
                <Card.Text>For Larger Organisations</Card.Text>
                <br></br>
                <br></br>
                <Button variant="outline-danger" size="lg">
                  Get In Touch Now{" "}
                </Button>
              </Card.Body>
              <hr></hr>
              <ul>
                <li>All Benefits of Pro Access</li>
                <li>Team Management</li>
                <li>Dedicated Account Manager</li>
                <li>Technical Information Point of Contact</li>
                <li>Munition Documentation</li>
                <li>Advanced Munition Data</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
      <Card className="bg-dark text-white">
        <Card.Img
          src="images\6_fenix_insight_tablet_screen.jpg"
          alt="Card image"
        />
        <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
          <div>
            <Card.Title style={{ fontSize: "4rem" }}>
              There's even more to Fenix Insight...{" "}
            </Card.Title>
            <Card.Title style={{ fontSize: "2rem" }}>Real Insights.</Card.Title>
            <Card.Text style={{ fontSize: "1.5rem" }}>
              Find out about our Defense Intelligence products.
            </Card.Text>
            <Button variant="success">Learn More</Button>{" "}
          </div>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default Body;
