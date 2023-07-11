import Footer from "./common/components/Footer";
import Header from "./common/components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./common/components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Service from "./pages/Service";
import BoardMembers from "./pages/BoardMembers";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Researches from "./pages/Researches";
import Vaccancy from "./pages/Vaccancy";
import NewsDetail from "./pages/NewsDetail";
import Vision from "./pages/Vision"
import WhoWeAre from "./pages/WhoWeAre";
import ValueObjective from "./pages/ValueObjective";
import Chairmanmessage from "./pages/ChairmanMessage";
import Events from "./pages/Events";
import Training from "./pages/Training";
import OrgStract from "./pages/OrgStruct";
import Portfolio from "./pages/MemberProfile"
import Gallery from "./pages/Gallary"
import EventNews from "./pages/NewEvents"
import Climet from "./pages/Climet"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home/>}/>
          <Route path="whoweare" element={<WhoWeAre />} />
          <Route path="vision" element={<Vision/>} />
          <Route path="valueobjective" element={<ValueObjective/>} /> 
          <Route path="chairmanmessage" element={<Chairmanmessage/>} />
          <Route path="events" element={<Events/>} />
          <Route path="training" element={<Training/>} />
          <Route path="services" element={<Service/>} />
          <Route path="utility"  element={<BoardMembers/>} />
          <Route path = "contact" element= {<Contact/>} />
          <Route path="news" element={<News/>} />
          <Route path="news/detail" element={<NewsDetail/>} />
          <Route path = "researches" element={<Researches/>} />
          <Route path="vaccancy" element={<Vaccancy/>} />
          <Route path="orgstract" element={<OrgStract/>} />
          <Route path="team" element={<Portfolio/>} />
          <Route path="gallery" element={<Gallery/>} />
          <Route path="newsandevents" element={<EventNews/>} />
          <Route path="climate" element={<Climet/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
