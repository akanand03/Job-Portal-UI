import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedJobs from './components/FeaturedJobs';
import HowItWorks from './components/HowItWorks';
import TopCompanies from './components/TopCompanies';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <FeaturedJobs />
      <HowItWorks />
      <TopCompanies />
      <Footer />

    </div>
  );
}

export default App;
