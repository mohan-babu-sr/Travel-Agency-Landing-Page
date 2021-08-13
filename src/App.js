import BookATripPage from './components/BookATrip/BookATripPage';
import DestinationsPage from './components/Destinations/DestinationsPage';
import FooterPage from './components/Footer/FooterPage';
import HeroPage from './components/Hero/HeroPage';
import LogosPage from './components/Logos/LogosPage';
import ServicesPage from './components/Services/ServicesPage';
import SubscribePage from './components/Subscribe/SubscribePage';
import TestimonialsPage from './components/Testimonials/TestimonialsPage';

function App() {
  
  return (
    <div>
      <HeroPage />
      <ServicesPage />
      <DestinationsPage />
      <BookATripPage />
      <TestimonialsPage />
      <LogosPage />
      <SubscribePage />
      <FooterPage />
    </div>
  );
}

export default App;