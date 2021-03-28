import ChatRoom from '../components/ChatRoom'

function Main(){
    const rooms =[
      {
        image: 'https://ui-avatars.com/api/name=Jane+Doe',
        username: 'Jane Doe',
        lastMessage: 'Bla Bla Bla...'
      },
      {
        image: 'https://ui-avatars.com/api/name=Jane+Doe',
        username: 'Jane Doe',
        lastMessage: 'Bla Bla Bla...'
      },
      {
        image: 'https://ui-avatars.com/api/name=Jane+Doe',
        username: 'Jane Doe',
        lastMessage: 'Bla Bla Bla...'
      },
      {
        image: 'https://ui-avatars.com/api/name=Jane+Doe',
        username: 'Jane Doe',
        lastMessage: 'Bla Bla Bla...'
      },
    ];
  
    return (
        <div className="py-2 divide-y ">{
            rooms.map((room)=> (
            <ChatRoom 
                image={room.image} 
                username={room.username} 
                message={room.lastMessage}
            />
            ))
        }</div>
    )
}

export default function Chat() {
  return (
    <div>
      <Main/>
    </div>
  );
}