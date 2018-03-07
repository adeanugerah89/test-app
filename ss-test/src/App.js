import React, { Component } from 'react';
import { Panel,  Grid, Row, Col, Badge } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      listData: []
      }
    }

    componentDidMount() {
      const self = this;
      Axios.get(`http://localhost:3000/api/v1/famous-people`)
        .then(res => self.setState({ listData: res.data}))
        .catch(error => console.log(error))
    }

  render() {

    const { listData } = this.state;
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Grid>
          {listData.data && listData.data.map((data,idx) => {
            return(<Row key={idx}>
              <Col md={6} mdOffset={3}>
                <Panel bsStyle="info">
                    <Panel.Heading>
                    <Panel.Title componentClass="h3">Name: {data.name} <Badge bsClass={'custom-badge'}>{data.company}</Badge></Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>Age: {data.age}</Panel.Body>
                </Panel>
              </Col>
            </Row>)
          })}
          </Grid>
        </div>
      );
  }
}

export default App;
