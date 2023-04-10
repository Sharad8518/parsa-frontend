import { useQuery } from '@apollo/client';
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import { FaBars, FaBookMedical, FaChartBar, FaChevronDown, FaCog, FaHome, FaMailBulk, FaPenSquare, FaProductHunt, FaRegComments, FaShoppingCart, FaUserAlt,FaQuestionCircle } from 'react-icons/fa';
import { Link, Navigate, Outlet } from 'react-router-dom';
import '../../Component.css/AdminDashboard.css'


export default function AdminDashboard() {
    {
        window.scrollTo(0, 0)
    }

    const admintoken = localStorage.getItem('adminToken')

    function handleDown() {
        const listItems = document.querySelectorAll(".adminsidebar-list li");

        listItems.forEach((item) => {
            item.addEventListener("click", () => {
                let isActive = item.classList.contains("active");

                listItems.forEach((el) => {
                    el.classList.remove("active");
                });

                if (isActive) item.classList.remove("active");
                else item.classList.add("active");
            });
        });

    }



    function handleClick() {
        const toggleSidebar = document.querySelector(".toggle-adminsidebar");
        const adminlogo = document.querySelector(".adminlogo-box");
        const adminsidebar = document.querySelector(".adminsidebar");
        toggleSidebar.addEventListener("click", () => {
            adminsidebar.classList.toggle("close");
        });

        adminlogo.addEventListener("click", () => {
            adminsidebar.classList.toggle("close");
        });
    }
    if (!admintoken) {
        return <Navigate to="/adminlogin" />
    }
    


  return (
    <>
        <div className="adminsidebar close" >
                {/* <!-- ========== Logo ============  --> */}
                <Link to="/" className="adminlogo-box">
                    <i className='bx bxl-xing'><Image src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg" style={{ height: '70%', width: '50%' }} /></i>
                    <div className="adminlogo-name">Education</div>
                </Link>

                {/* <!-- ========== List ============  --> */}
                <ul className="adminsidebar-list">
                    {/* <!-- -------- Non Dropdown List Item ------- --> */}
                    <li>
                        <div className="title">
                            <Link to="/" className="link">
                                <i className='bx bx-grid-alt'><FaHome /></i>
                                <span className="name">Home</span>
                            </Link>
                            {/* <!-- <i class='bx bxs-chevron-down'></i> --> */}
                        </div>
                        <div className="submenu">
                            <Link to="/" className="link submenu-title">Home</Link>
                            {/* <!-- submenu links here  --> */}
                        </div>
                    </li>

                    {/* <li>
                        <div className="title">
                            <Link to="/admindashboard/allusers" className="link">
                                <i className='bx bx-line-chart'><FaUserAlt /></i>
                                <span className="name">Users</span>
                            </Link> */}
                            {/* <!-- <i class='bx bxs-chevron-down'></i> --> */}
                        {/* </div>
                        <div className="submenu">
                            <Link to="/admindashboard/allusers" className="link submenu-title">Users</Link> */}
                            {/* <!-- submenu links here  --> */}
                        {/* </div>
                    </li> */}
                    {/* <!-- -------- Dropdown List Item ------- --> */}
                    {/* <li className="dropdown">
                        <div className="title">
                        <Link to="/admindashboard/allusers" className="link">
                                <i className='bx bx-line-chart'><FaUserAlt /></i>
                                <span className="name">Users</span>
                            </Link>
                            <i className='bx bxs-chevron-down' onClick={() => handleDown()}><FaChevronDown /></i>
                        </div>
                        <div className="submenu">
                            <Link href="#" className="link submenu-title">Category</Link>
                            <Link to="/admindashboard/allusers" className="link">All Users</Link>
                          
                        </div>
                    </li> */}

                    {/* <!-- -------- Dropdown List Item ------- --> */}
                    <li className="dropdown">
                        <div className="title">
                            <Link to="/admindashboard/allbookings" className="link">
                                <i className='bx bx-book-alt'><FaChartBar /></i>
                                <span className="name">Dashboard</span>
                            </Link>
                            <i className='bx bxs-chevron-down' onClick={() => handleDown()}><FaChevronDown /></i>
                        </div>
                        <div className="submenu">
                            <Link to="/admindashboard/allbookings" className="link submenu-title">Dashboard</Link>
                            {/* <Link to="/" className="link">Pending Booking</Link>
                            <Link to="/admindashboard/completedorders" className="link">Complete Booking</Link>
                            <Link to="/admindashboard/cancelledorders" className="link">Cancelled Booking</Link> */}
                        </div>
                    </li>

                    {/* <!-- -------- Non Dropdown List Item ------- --> */}
                    <li>
                        <div className="title">
                            <Link to="/admindashboard/addcourse" className="link">
                                <i className='bx bx-line-chart'><FaBookMedical /></i>
                                <span className="name">Add Courses</span>
                            </Link>
                           
                        </div>
                        <div className="submenu">
                            <Link to="/admindashboard/addcourse" className="link submenu-title">Add Courses</Link>
                      
                        </div>
                    </li>

                    <li>
                        <div className="title">
                            <Link to="/admindashboard/AddQuestion" className="link">
                                <i className='bx bx-line-chart'><FaQuestionCircle /></i>
                                <span className="name">Add Question</span>
                            </Link>
                           
                        </div>
                        <div className="submenu">
                            <Link to="/admindashboard/AddQuestion" className="link submenu-title">Topic</Link>
                      
                        </div>
                    </li>

               
                    <li>
                        <div className="title">
                            <Link to="/admindashboard/Diagram" className="link">
                                <i className='bx bx-pie-chart-alt-2'><FaPenSquare /></i>
                                <span className="name">Add Diagrams</span>
                            </Link>
                       
                        </div>
                        <div className="submenu">
                            <Link to="/admindashboard/Diagram" className="link submenu-title">Add Diagrams</Link>
                          
                        </div>
                    </li>


                    {/* <li>
                        <div className="title">
                            <Link to="/admindashboard/usercontact" className="link">
                                <i className='bx bx-pie-chart-alt-2'><FaOdnoklassniki /></i>
                                <span className="name">Contacts</span>
                            </Link>
                           
                        </div>
                        <div className="submenu">
                            <Link to="/admindashboard/usercontact" className="link submenu-title">Contacts</Link>
                           
                        </div>
                    </li> */}

                    {/* <!-- -------- Dropdown List Item ------- --> */}
                    {/* <li className="dropdown">
                        <div className="title">
                            <Link to="/admindashboard/contactsuser" className="link">
                                <i className='bx bx-extension'><FaPlug /></i>
                                <span className="name">Contacts</span>
                            </Link>
                            <i className='bx bxs-chevron-down' onClick={() => handleDown()}><FaChevronDown /></i>
                        </div>
                        <div className="submenu">
                            <Link to="/admindashboard/contactsuser" className="link submenu-title">Contacts</Link> */}
                    {/* <Link href="#" className="link">UI Face</Link>
                            <Link href="#" className="link">Pigments</Link>
                            <Link href="#" className="link">Box Icons</Link> */}
                    {/* </div>
                    </li> */}

                    {/* <!-- -------- Non Dropdown List Item ------- --> */}
                    {/* <li>
                        <div className="title">
                            <Link href="#" className="link">
                                <i className='bx bx-compass'><FaWpexplorer /></i>
                                <span className="name">Explore</span>
                            </Link>
                       
                        </div>
                        <div className="submenu">
                            <Link href="#" className="link submenu-title">Explore</Link>
                           
                        </div>
                    </li> */}

                    {/* <!-- -------- Non Dropdown List Item ------- --> */}
                    {/* <li>
                        <div className="title">
                            <Link to="/admindashboard/uploadproducts" className="link">
                                <i className='bx bx-history'><FaHistory /></i>
                                <span className="name">UploadProducts</span>
                            </Link>
                            
                        </div>
                        <div className="submenu">
                            <Link to="/admindashboard/uploadproducts" className="link submenu-title">UploadProducts</Link>
                            
                        </div>
                    </li> */}
                    <li className="dropdown">
                        <div className="title">
                        <Link to="/admindashboard/allusers" className="link">
                                <i className='bx bx-line-chart'><FaUserAlt /></i>
                                <span className="name">Users</span>
                            </Link>
                            <i className='bx bxs-chevron-down' onClick={() => handleDown()}><FaChevronDown /></i>
                        </div>
                        <div className="submenu">
                            {/* <Link href="#" className="link submenu-title">Category</Link> */}
                            <Link to="/admindashboard/allusers" className="link">All Users</Link>
                          
                        </div>
                    </li>

                    {/* <!-- -------- Non Dropdown List Item ------- --> */}
                    <li>
                        <div className="title">
                            <Link to="/admindashboard/adminsettings" className="link" >
                                <i className='bx bx-cog'><FaCog /></i>
                                <span className="name">Settings</span>
                            </Link>
                            {/* <!-- <i class='bx bxs-chevron-down'></i> --> */}
                        </div>
                        <div className="submenu">
                            <Link to="/admindashboard/adminsettings" className="link submenu-title">Settings</Link>
                            {/* <!-- submenu links here  --> */}
                        </div>
                    </li>
                </ul>
            </div>

            {/* <!-- ============= Home Section =============== --> */}
            <section className="adminhome">
                <div className="toggle-adminsidebar">
                    <FaBars className='bx bx-menu'  onClick={() => handleClick()} style={{ width: 30, height: 30, marginLeft: 10 }} />
                    <Image src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg" style={{ marginTop: '10px', height: '90%', width: '4%', marginLeft: '80%', backgroundColor: '#fff', borderRadius: '50%' }} >
                    </Image>
                   
                </div>

               
                <Container style={{ padding: '15px' }}>
                    <Row>
                        <Col md={12}><Outlet /></Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}