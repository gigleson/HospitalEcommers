
import Body from '../components/productpagecom/Body';
import Footer from '../components/productpagecom/Footer';
import Navbar from '../components/navbar';




function ProductPage() {
        return (<>
         <div key="1" className="flex flex-col min-h-screen bg-gray-200 dark:bg-gray-900">
        <Navbar />
      <main className="flex-1 py-8 px-6 md:px-12 bg-blue-200">
      <Body />
      </main>
      <Footer />
    </div>
          
        </>
          
        );
      }
export default ProductPage;



