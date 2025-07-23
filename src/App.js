import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="text-center p-8">
        <h1 className="text-4xl font-bold text-blue-700">Find your dream job</h1>
        <p className="mt-4 text-gray-600">Let's build this portal together!</p>
      </main>
    </div>
  );
}

export default App;
