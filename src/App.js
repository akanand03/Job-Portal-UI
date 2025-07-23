import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedJobs from './components/FeaturedJobs';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <FeaturedJobs />
      <HowItWorks />
    </div>
  );
}

export default App;
