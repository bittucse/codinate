import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Login from "./sections/Login";
import Modal from "./sections/Modal";
import RoomShower from "./sections/RoomShower";
import CreateRoom from "./components/CreateRoom";
import JoinRoom from "./components/JoinRoom";
import CodeEditor from "./components/CodeEditor";
import Chat from "./sections/Chat";

export default function App() {

  const[showModalLogin,setshowModalLogin]=useState(false);
  const[showModalCreate,setshowModalCreate]=useState(false);
  const[showModalJoin,setshowModalJoin]=useState(false);
  // pass login as child to buttons
  // at present the moda has only sign  up inputs and

  return (



    <>

        <Routes>

          
        <Route exact path='/' element={
        <>
          <Nav setshowModalLogin={setshowModalLogin}></Nav>

          <section>
          <Hero setshowModalC={setshowModalCreate} setshowModalJ={setshowModalJoin}></Hero>
          </section>      
          <section>
              <RoomShower setshowModalJ={setshowModalJoin}></RoomShower>
          </section>
        </>}/>

        <Route exact path='/code' element={
          <CodeEditor />
        }/>

        <Route exact path='/chat' element={
          <Chat />
        }/>

        </Routes>

        <section>
        <Modal isVisible={showModalLogin} setshowModal={setshowModalLogin}><Login></Login></Modal>
        <Modal id="create-room" isVisible={showModalCreate} setshowModal={setshowModalCreate}><CreateRoom></CreateRoom></Modal>
        <Modal id="join" isVisible={showModalJoin} setshowModal={setshowModalJoin}><JoinRoom></JoinRoom></Modal>
        </section>




    </>
    
  )
}