import { Container } from 'react-bootstrap';
import { NavBar } from '../component/layout/NavBar';
import WelcomeHeader from '../component/WelcomeHeader';
import HeroSection from '../component/Hero';
import CardGrid from '../component/CardGrid';
import Footer from '../component/layout/Footer';

export const Home = () => {
    return (
        <Container fluid className="bg-light min-vh-100 pb-5">
            <NavBar />
            <WelcomeHeader />
            <HeroSection />
            <CardGrid />
            <Footer />
        </Container>
    )
}
