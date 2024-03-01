

import HeroSection from '../components/homepagecom/HeroSection';
import FeaturedProducts from '../components/homepagecom/FeaturedProducts';
import Footer from '../components/homepagecom/Footer';
import Navbar from '../components/navbar';



function HomePage() {
    return (<>
        
        <div key="1" className="flex flex-col min-h-screen bg-white dark:bg-blue-900">
        <Navbar />
      <main className="flex-1 bg-white dark:bg-blue-900">
        <HeroSection />
        {/* <FeaturedProducts /> */}
      </main>
      <Footer />
      
    </div>
    </>
      
    );
  }
  
  
  export default HomePage;