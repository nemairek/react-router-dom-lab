// src/App.jsx
import { Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import MailboxForm from "./components/MailboxForm";
import MailboxList from "./components/MailboxList";
import MailboxDetails from "./components/MailboxDetails";




const App = () => {
  return (
    <>
    <NavBar/>
<h1>Hello World</h1>
  <Routes>
        <Route path='/' element={<main><h1>Post Office</h1></main>} />
        <Route path='/mailboxes' element={<MailboxList />} />
        <Route path='/new-mailbox' element={<MailboxForm />} />
        <Route path='/mailboxes/:mailboxId' element={<MailboxDetails />} />
</Routes>
</>
  )
};

export default App;
