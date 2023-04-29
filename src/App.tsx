import React from 'react';
import './App.css';
import {Col, Row} from "antd";
import MyTable from "./Components/MyTable/MyTable";
import {Navigate, Route, Routes} from "react-router-dom";
import OneAccountTable from "./Components/OwnerAccountTable/OneAccountTable";

function App() {



  return (
    <div className="App">
        <Row>
            <Col xs={24} md={{ span: 12, offset: 6}}>
                <Routes>
                    <Route path={'/accounts'} element={<MyTable />}/>
                    <Route path={'/accounts/:id'} element={<OneAccountTable />}/>
                    <Route
                        path="*"
                        element={<Navigate to="/accounts" replace={true} />}
                    />
                </Routes>
            </Col>
        </Row>

    </div>
  );
}

export default App;
