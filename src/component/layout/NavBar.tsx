import { useEffect, useState } from "react";
import { Container, Nav,  Offcanvas } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { RootState } from "../../store";
import { filterByContinent } from "../../store/action";
import { GiHamburgerMenu } from "react-icons/gi";

export const NavBar = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { selectedContinent } = useSelector((state: RootState) => state.countries);
    const [activeKey, setActiveKey] = useState<string>(selectedContinent || 'All');
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        setActiveKey(selectedContinent);
    }, [selectedContinent]);

    const handleSelect = (selectedKey: string | null) => {
        if (selectedKey) {
            setActiveKey(selectedKey);
            dispatch(filterByContinent(selectedKey));
            setShowMenu(false);
        }
    };

    const handleClose = () => setShowMenu(false);
    const handleShow = () => setShowMenu(true);

    return (
        <Container fluid className="py-3 py-md-5 px-3 px-md-20">
            <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0 fw-bold">Countries</h5>
                <Nav
                    variant="underline"
                    activeKey={activeKey}
                    onSelect={handleSelect}
                    className="fw-medium d-none d-md-flex"
                >
                    <Nav.Item>
                        <Nav.Link eventKey="All">All</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="Asia">Asia</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="Europe">Europe</Nav.Link>
                    </Nav.Item>
                </Nav>

                <button
                    className="btn d-md-none"
                    onClick={handleShow}
                    aria-label="Toggle navigation menu"
                >
                    <GiHamburgerMenu size={24} className="text-primary" />
                </button>

                {/* Mobile Menu */}
                <Offcanvas
                    show={showMenu}
                    onHide={handleClose}
                    placement="end"
                    className="d-md-none"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Countries</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav
                            className="flex-column w-auto"
                            activeKey={activeKey}
                            onSelect={handleSelect}
                            variant="pills"
                        >
                            <Nav.Item>
                                <Nav.Link eventKey="All">All</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Asia">Asia</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Europe">Europe</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </Container>
    );
};
