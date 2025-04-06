import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';

const HeroSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const totalSlides = 3;

    const handleSelect = (selectedIndex: number) => {
        setActiveIndex(selectedIndex);
    };

    return (
        <Container fluid className="bg-light py-3 py-md-5 px-3 px-md-20">
            <Row className="justify-content-between align-items-center flex-column-reverse flex-md-row ">
                <Col xs={12} md={9} className="mt-3 mt-md-0 px-0 px-md-2">
                    <div className="custom-carousel-wrapper position-relative" style={{ height: 'auto' }}>
                        <Carousel
                            activeIndex={activeIndex}
                            onSelect={handleSelect}
                            controls={false}
                            indicators={false}
                            interval={null}
                            className="h-100"
                        >
                            {[1, 2, 3].map((num, i) => (
                                <Carousel.Item key={i}>
                                    <img
                                        src={`https://placehold.co/807x498?text=Slide+${num}`}
                                        alt={`Slide ${num}`}
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            maxHeight: '498px',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>

                        <div className="custom-carousel-controls position-absolute bottom-0 start-50 translate-middle-x mb-3 d-flex align-items-center justify-content-center gap-3">
                            <button
                                onClick={() => setActiveIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))}
                                className="arrow-btn"
                            >
                                <BiArrowBack />
                            </button>

                            <div className="dots d-flex gap-2">
                                {[...Array(totalSlides)].map((_, index) => (
                                    <span
                                        key={index}
                                        className={`dot ${index === activeIndex ? 'active' : ''}`}
                                        onClick={() => setActiveIndex(index)}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={() => setActiveIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))}
                                className="arrow-btn"
                            >
                                <BiArrowBack style={{ transform: 'rotate(180deg)' }} />
                            </button>
                        </div>
                    </div>
                </Col>

                <Col
                    xs={12}
                    md={3}
                    className="d-flex justify-content-center align-items-center px-0 "
                >
                    <img
                        src="https://placehold.co/232x498"
                        alt="Side Frame"
                        style={{
                            width: '100%',
                            height: '147px',
                            objectFit: 'cover',
                            maxHeight: '150px',
                        }}
                        className="d-md-none"
                    />
                    <img
                        src="https://placehold.co/232x498"
                        alt="Side Frame"
                        style={{
                            width: '100%',
                            height: 'auto',
                            maxHeight: '498px',
                            objectFit: 'cover',
                        }}
                        className="d-none d-md-block"
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default HeroSection;
