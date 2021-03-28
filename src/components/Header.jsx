import { ReactComponent as BACK_ICON } from '../assets/icon/chevron.svg';

export default function Header({ title, canBack = false }){
    return (
      <header className="border-b py-2 text-center">
          {
              canBack && (
                <button className="px-3 py-1 absolute left-0">
                    <BACK_ICON className="w-2"/>
                </button>
              )
          }
        <h1 className="text-md font-bold">{ title }</h1>
      </header>
    )
}