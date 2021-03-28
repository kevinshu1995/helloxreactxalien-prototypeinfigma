import { ReactComponent as HOME_ICON } from "./../assets/icon/home.svg";
import { ReactComponent as SEARCH_ICON } from "./../assets/icon/search.svg";
import { ReactComponent as CHAT_ICON } from "./../assets/icon/chat.svg";
import { ReactComponent as PERSON_ICON } from "./../assets/icon/person.svg";
import { ReactComponent as PLUS_ICON } from "./../assets/icon/plus.svg";

export default function BottomNav({ onPlusClick }){
    return (
      <footer className="fixed bottom-0 w-full border-t">
        <nav className="flex justify-between w-full h-full py-2 bg-white">
          <button class="px-4 py-2">
            <HOME_ICON className="w-4"/>
          </button>
          <button class="px-4 py-2">
            <SEARCH_ICON className="w-4"/>
          </button>
          <button 
            class="px-6 py-2 rounded-2xl text-white"
            style={{ background: `linear-gradient(202.17deg, #FF00D6 8.58%, #FF4D00 91.42%)` }}
            onClick={ onPlusClick }
          >
            <PLUS_ICON className="w-4"/>
          </button>
          <button class="px-4 py-2">
            <CHAT_ICON className="w-4"/>
          </button>
          <button class="px-4 py-2">
            <PERSON_ICON className="w-3"/>
          </button>
        </nav>
      </footer>
    )
}