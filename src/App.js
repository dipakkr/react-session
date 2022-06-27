import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/Content";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Todo from "./components/Todo/Todo";


function App() {
  return (
    // <div className="App">
    //   {models.data && models.data.map((item) => {
    //     return <Card data={item}/>
    //   })}
    // </div>

    <>

    <Todo/>
    

      <Footer
        title={"91wheels"}
        subTitle={"91wheels substitle "}
        description="lkfjsdlkj fsldkjflskjdflskjdflsk jd"
      />
    </>
  );
}

export default App;
