

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Header from './components/Header';
import Feedbacklist from "./components/Feedbacklist";
import FeedbackStats from "./components/FeedbackStats";
import FeedBackForm from "./components/FeedBackForm";
import AboutPage from "./pages/aboutPage";
import AboutIconLink from "./components/AboutIconLink";
import {FeedbackProvider} from "./context/FeedbackContext"; //  curly braces because FeedbackProvideris not the default export


function App() {



    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route exact  path='/' element={
                            <>
                                <FeedBackForm />
                                <FeedbackStats />
                                <Feedbacklist  />
                                <AboutIconLink/>
                            </>
                        }>

                        </Route>
                        <Route path='/about' element={<AboutPage/>}/>
                    </Routes>


                </div>
            </Router>
        </FeedbackProvider>

    )
}

export default App;
