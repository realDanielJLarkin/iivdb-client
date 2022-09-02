import React, { useEffect, useState } from 'react'
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { getVideos } from './actions/videos'
import { useDispatch, useSelector } from 'react-redux'

//Components
import Form from './components/form/Form'
import Modal from './components/modal/Modal'
import Footer from './components/footer/Footer';
import Loading from './components/loading/Loading';

//Pages
import Signup from "./pages/Signup";
import Home from './pages/Home';
import Login from './pages/Login';
import Video from './pages/Video'
import NotFound from './pages/NotFound';

import './index.css'




function App() {
  const dispatch = useDispatch()

  const loading = useSelector((state) => state.loading)
  // const [loadingStatus, setLoadingStatus] = useState(loading)

  const modalStatus = useSelector((state) => state.modal.value)
  const [modalOpen, setModalOpen] = useState(false)

  const loginOpenStatus = useSelector((state) => state.login)
  const signupOpenStatus = useSelector((state) => state.signup)

  const [loginOpen, setLoginOpen] = useState(false)
  const [signUp, setSignup] = useState(false)






  useEffect(() => {
    dispatch(getVideos())
  }, [dispatch])

  useEffect(() => {
    setModalOpen(modalStatus)
  }, [modalStatus])

  useEffect(() => {
    setLoginOpen(loginOpenStatus)
  }, [loginOpenStatus])

  useEffect(() => {
    setSignup(signupOpenStatus)
  }, [signupOpenStatus])

  return (
    <div className=''>
      <Router>
        <AuthProvider>
          {loading && <Loading />}
          {modalOpen && <Modal />}
          {signUp && <Signup />}
          {loginOpen && <Login />}
          <div className='max-w-5xl mx-auto'>
            <Form />
            <main className=''>

              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/videos/:id' element={<Video />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>
          </div>
          <Footer />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
