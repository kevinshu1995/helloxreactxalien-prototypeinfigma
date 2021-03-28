export default function ChatRoom({image, username, message}){
    return (
        <div className="flex px-4 py-2 space-x-4">
            <img className="rounded-full w-16" src={image} alt="lorem"/>
            <div className="py-2">
                <h3 className="text-base font-bold">{username}</h3>
                <p className="text-sm">{message}</p>
            </div>
        </div>
    )
}
  
