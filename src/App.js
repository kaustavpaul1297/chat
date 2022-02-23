import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <header>
          <div className="title">
            <img
              src={require("./icons/cgi-logo.jpeg")}
              alt="CGI_logo"
              width="35px"
            />
            <h1>CGI Chat</h1>
          </div>
          <button type="button">
            <img
              className="burger"
              src="./icons/hamburger.svg"
              alt=""
              width="50px"
            />
          </button>
        </header>
        <div className="container">
          <div className="user-window">
            <div className="user-head">
              <h3>people</h3>
              <h4>4</h4>
            </div>
            <div className="users-list">
              <p>Virat</p>
              <p>Anushka</p>
              <p>Rohit</p>
              <p>Shastri</p>
            </div>
          </div>
          <div className="chat-window">
            <div className="chats">
              <div className="user-join">
                <p>
                  <b>Shastri</b> joined the chat
                </p>
              </div>
              <div className="message incoming">
                <h5>Virat</h5>
                <p>Hello Anushka</p>
              </div>
              <div className="message outgoing">
                <h5>Anushka</h5>
                <p>Welcome Virat</p>
              </div>
            </div>
            <div className="user-input">
              <input type="text" placeholder="Type your message..." />
              <button className="btn">Send</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
