import React from 'react'
import { Button, Card, Col, Container, Form, Image, Row, ToastContainer } from 'react-bootstrap'
import { FaBars, FaChevronDown, FaCog, FaHome, FaOdnoklassniki, FaProductHunt, FaShoppingBag, FaShoppingCart, FaUserAlt } from 'react-icons/fa'
import { Link, Navigate, Outlet } from 'react-router-dom'
import '../../Component.css/UserDashboard.css'
import pandit from '../../Images/logo.png'

export default function UserDashboard() {
    {
        window.scrollTo(0, 0)
    }

    const userToken = localStorage.getItem('userToken')

    function userlogoutHandle() {
        localStorage.removeItem('userToken')
        localStorage.removeItem('userId')
        window.location.reload()
      }

    function handleDown() {
        const listItems = document.querySelectorAll(".panditsidebar-list li");

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

  if (!userToken) {
        return <Navigate to="/login" />
    }


    function handleClick() {
        const toggleSidebar = document.querySelector(".toggle-panditsidebar");
        const panditlogo = document.querySelector(".panditlogo-box");
        const panditsidebar = document.querySelector(".panditsidebar");
        toggleSidebar.addEventListener("click", () => {
            panditsidebar.classList.toggle("close");
        });

        panditlogo.addEventListener("click", () => {
            panditsidebar.classList.toggle("close");
        });
    }



  return (
    <>
        <div className="panditsidebar close" >
                {/* <!-- ========== Logo ============  --> */}
                <Link to="/" className="panditlogo-box">
                    <i className='bx bxl-xing'><Image src={pandit} style={{ height: '70%', width: '50%' }} /></i>
                    <div className="panditlogo-name">Education</div>
                </Link>

                {/* <!-- ========== List ============  --> */}
                <ul className="panditsidebar-list">
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

                    <li>
                        <div className="title">
                            <Link to="/userdashboard/profile" className="link">
                                <i className='bx bx-line-chart'><FaUserAlt /></i>
                                <span className="name">Profile</span>
                            </Link>
                            {/* <!-- <i class='bx bxs-chevron-down'></i> --> */}
                        </div>
                        <div className="submenu">
                            <Link to="/userdashboard/profile" className="link submenu-title">Profile</Link>
                            {/* <!-- submenu links here  --> */}
                        </div>
                    </li>
                    {/* <!-- -------- Dropdown List Item ------- --> */}
                    {/* <li className="dropdown">
                        <div className="title">
                            <Link href="#" className="link">
                                <i className='bx bx-collection'><FaMailBulk /></i>
                                <span className="name">Category</span>
                            </Link>
                            <i className='bx bxs-chevron-down' onClick={() => handleDown()}><FaChevronDown /></i>
                        </div>
                        <div className="submenu">
                            <Link href="#" className="link submenu-title">Category</Link>
                            <Link href="#" className="link">HTML & CSS</Link>
                            <Link href="#" className="link">JavaScript</Link>
                            <Link href="#" className="link">PHP & MySQL</Link>
                        </div>
                    </li> */}

                    {/* <!-- -------- Dropdown List Item ------- --> */}
                    <li className="dropdown">
                        <div className="title">
                            <Link to="/userdashboard/yourbookings" className="link">
                                <i className='bx bx-book-alt'><FaShoppingCart /></i>
                                <span className="name">Subscription</span>
                            </Link>
                            <i className='bx bxs-chevron-down' onClick={() => handleDown()}><FaChevronDown /></i>
                        </div>
                        <div className="submenu">
                            <Link to="/userdashboard/yourbookings" className="link submenu-title">Subscription</Link>
                            {/* <Link to="/userdashboard/yourbookings" className="link">Pending Booking</Link> */}
                            {/* <Link to="/admindashboard/completedorders" className="link">Complete Booking</Link>
                            <Link to="/admindashboard/cancelledorders" className="link">Cancelled Booking</Link> */}
                        </div>
                    </li>

                    {/* <!-- -------- Non Dropdown List Item ------- --> */}
                    <li>
                        <div className="title">
                            <Link to="/userdashboard/payments" className="link">
                                <i className='bx bx-line-chart'><FaProductHunt /></i>
                                <span className="name">Payments</span>
                            </Link>
                           
                        </div>
                        <div className="submenu">
                            <Link to="/userdashboard/payments" className="link submenu-title">Payments</Link>
                      
                        </div>
                    </li>

               
                    {/* <li>
                        <div className="title">
                            <Link to="/admindashboard/items" className="link">
                                <i className='bx bx-pie-chart-alt-2'><FaShoppingBag /></i>
                                <span className="name">Products</span>
                            </Link>
                       
                        </div>
                        <div className="submenu">
                            <Link to="/admindashboard/items" className="link submenu-title">Products</Link>
                          
                        </div>
                    </li>


                    <li>
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

                    {/* <!-- -------- Non Dropdown List Item ------- --> */}
                    {/* <li>
                        <div className="title">
                            <Link to="/" className="link" >
                                <i className='bx bx-cog'><FaCog /></i>
                                <span className="name">Settings</span>
                            </Link> */}
                            {/* <!-- <i class='bx bxs-chevron-down'></i> --> */}
                        {/* </div>
                        <div className="submenu">
                            <Link to="/" className="link submenu-title">Settings</Link> */}
                            {/* <!-- submenu links here  --> */}
                        {/* </div>
                    </li> */}
                </ul>
            </div>

            {/* <!-- ============= Home Section =============== --> */}
            <section className="pandithome">
                <div className="toggle-panditsidebar">
                    <FaBars className='bx bx-menu'  onClick={() => handleClick()} style={{ width: 30, height: 30, marginLeft: 10 }} />
                    <Button style={{marginLeft:'70%',backgroundColor:'transparent',color:'#000',fontSize:'12px'}} onClick={() => userlogoutHandle()}>logout</Button>
                    <Image src={pandit} style={{ marginTop: '10px', height: '70%', width: '4%', marginLeft: '20px', backgroundColor: '#fff', borderRadius: '50%' }} >
                    </Image>
                   
                </div>

               
                <Container style={{ padding: '10px' }}>
                    <Row>
                        <Col md={12}><Outlet /></Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}
