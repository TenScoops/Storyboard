import { GiDeadWood } from "react-icons/gi";
import { Enter } from "../Icons";
const Landingpage = () => {
    return(<div className="font-syne">
        <div className="flex flex-row justify-between items-center h-16 ">
            <div className="flex flex-row items-center space-x-16">
                <div className="flex flex-row items-center space-x-4 ml-2">
                    <GiDeadWood size={45}/>
                    <h1 className="text-3xl">
                        Storyboard
                    </h1>
                </div>
                <nav>
                    <ul className="flex flex-row space-x-8">
                        <li className="text-xl">
                            Stories
                        </li>
                        <li className="text-xl">
                            Community
                        </li>
                    </ul>
                </nav>
            </div>
            <button className="flex flex-row items-center justify-center py-2 h-12 w-36 border border-black border-b-2 ">
                <h1 className="text-xl mr-2">Login</h1>
                <Enter />
            </button>
        </div>
    </div>)
}

export default Landingpage