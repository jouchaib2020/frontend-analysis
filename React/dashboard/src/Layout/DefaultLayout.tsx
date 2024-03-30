import { ReactNode } from "react"
import Header from "../components/Header"
import SideBar from "../components/SideBar"

const DefaultLayout: React.FC<{children : ReactNode}> = ({children})=>{
  return (
    <div>
        <div className="flex h-screen overflow-hidden">
            <SideBar/>
            <div className="relative flex flex-1 flex-col">
                <Header/>
                <main>
                    <div className="p-4">
                    {children}
                    </div>
                </main>
            </div>
        </div>
    </div>
  )
}

export default DefaultLayout