import './css/base.css';
import './css/style.css';
import { ConversationState } from './context/ConversationState';
import Header from './components/Header';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <ConversationState>
      <section className="chat-section">
        <Sidebar />
        <div className="chat-side__right">
          <Header />
          <Home />
        </div>
      </section>
      <div className="page-overlay"></div>
   </ConversationState>
  );
}

export default App;
