import Header from './components/Header';
import BottomNav from './components/BottomNav';
import { useState } from 'react'
// import Chat from './pages/Chat';

function ChatBox({ image, message, right }){
  const elements = [
    <div>
      <img className="rounded-full w-48" src={image} alt="lorem"/>
    </div>,
    <p class="p-4 rounded bg-gray-100">{ message }</p>
  ]
  return (
    <div className="flex space-x-4">{
      right ? elements.reverse() : elements
    }</div>
  )
}

function ChatRoom({ messages }){
  return (
    <div className="p-4 space-y-8">
      {
        messages.map((msg, index)=>
          <ChatBox image={msg.image} message={msg.message} right={ index %2 }/>
        )
      }
    </div>
  )
}

function App() {
  const [messages, setMessage] = useState(
    [
      {
        image: 'https://picsum.photos/seed/picsum/200',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      // {
      //   image: 'https://picsum.photos/seed/picsum/200',
      //   message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      // },
      // {
      //   image: 'https://picsum.photos/seed/picsum/200',
      //   message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      // },
    ]
  );

  return (
    <div>
      <Header title="James" canBack/>

      {/* <Chat/> */}
      <ChatRoom messages={ messages }/>
      
      <BottomNav
        onPlusClick={ () => {
          setMessage([
            ...messages, 
            {
              image: 'https://picsum.photos/seed/picsum/200',
              message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
          ])
        }}
      />
    </div>
  );
}

export default App;
