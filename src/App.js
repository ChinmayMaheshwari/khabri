import Navbar from "./Components/Navbar";
import SecondaryNavbar from "./Components/SecondaryNavbar";
import Slider from "./Components/Slider";
import GridLayout from "./Components/Grid";

function App() {
  return (
    <>
      <Navbar />
      <SecondaryNavbar />
      <Slider />
      <GridLayout headline="जिला-जवार" />
      <GridLayout headline="पढ़ाई-खिलाई" />
      <GridLayout headline="खेल-सिनेमा" />
    </>
  );
}

export default App;
