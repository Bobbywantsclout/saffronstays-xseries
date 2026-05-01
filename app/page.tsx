import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import BookingCard from '@/components/BookingCard/BookingCard';
import PropertyInfo from '@/components/PropertyInfo/PropertyInfo';
import About from '@/components/About/About';
import Amenities from '@/components/Amenities/Amenities';
import Meals from '@/components/Meals/Meals';
import RealMoments from '@/components/RealMoments/RealMoments';
import Location from '@/components/Location/Location';
import RoomsAndBeds from '@/components/RoomsAndBeds/RoomsAndBeds';
import Footer from '@/components/Footer/Footer';
import MobileBookingBar from '@/components/MobileBookingBar/MobileBookingBar';
import styles from './page.module.css';

export default function VillaPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className={`container ${styles.pageLayout}`}>
          <div className={styles.content}>
            <PropertyInfo />
            <About />
            <Amenities />
            <Meals />
            <RealMoments />
            <Location />
            <RoomsAndBeds />
          </div>
          <aside className={styles.sidebarWrap} aria-label="Booking sidebar">
            <div className={styles.stickyCard}>
              <BookingCard />
            </div>
          </aside>
        </div>
      </main>
      <Footer />
      <MobileBookingBar />
    </>
  );
}