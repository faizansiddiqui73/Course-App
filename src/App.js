import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Row, Container, Col } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './component/Home';
import AllCourse from './component/AllCourse';
import AddCourse from './component/AddCourse';
import Header from './component/Header';
import Menu from './component/Menu';
import ContactUs from './component/ContactUs';
import About from './component/About';

function App() {
  return (
    <Router>
      <div>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              {/* <h2>This is the Menu side</h2> */}
              <Menu /> 
            </Col>
            <Col md={8}>
              {/* <h2>This Content side</h2> */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-course" element={<AddCourse />} />
                <Route path="/view-course" element={<AllCourse />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactUs />} />
                {/* Add other routes as needed */}
              </Routes>
            </Col>
          </Row>
        </Container>
        {/* <Home/>
      <Course course={{title:"React",description:"This is the React Course"}}/>
      <AllCourse/>
      <AddCourse/> */}
      </div>
    </Router>
  );
}

export default App;
