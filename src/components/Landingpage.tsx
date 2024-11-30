import { GiDeadWood } from "react-icons/gi";
// import { HiOutlineLightBulb } from "react-icons/hi";
import { Enter, Lightbulb, Pencil } from "../Icons";
import Field from "../assets/field.png";
import Orange from "../assets/orange.png";
const Landingpage = () => {
    return(<div className="font-syne">
        {/* navbar */}
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
            <button className="flex flex-row items-center justify-center py-2 h-12 w-36 mr-2 border border-black border-b-2 ">
                <h1 className="text-xl mr-2">Log in</h1>
                <Enter />
            </button>
        </div>
        
        {/* intro */}
        <div className="flex flex-row  justify-center relative mt-10 space-x-12">
            <div className="z-50 mt-16 slide-right">
                <h1 className="text-6xl font-spinnaker">For</h1>
                <h1 className="text-[110px] font-sunshiney">Artists</h1>
                <h1 className="text-[90px] font-varela italic">Thinkers</h1>
                <h1 className="text-[110px] font-syne">Writers</h1>
            </div>
            <div className="z-50 slide-down">
                <Lightbulb />
            </div>
            <div className="z-50 slide-left">
                <img src={Field} width={600} className="rounded-3xl"/>
            </div>
            <div className="w-5/6 h-96 bg-blue-200 absolute bottom-20">

            </div>
        </div>

        <div className="flex flex-col items-center">
            {/* Create your own stories */}
            <div className="flex flex-col mt-20 relative ">
                <div className="z-50">
                    <h1 className="text-5xl">Create your own stories</h1>
                    <h1 className="text-2xl">With a plethora of great viuals!</h1>
                </div>
                <div className="flex flex-row items-center space-x-12 z-50">
                    <img src={Orange} width={400} className="ml-10"/>
                    <p className="text-2xl max-w-3xl">
                        “ They traveled days and days on, and they finally discovered 
                        the ruins of the forgotten relic ”
                    </p>
                    <Pencil />
                </div>
                
                <div className="absolute bottom-24 w-11/12 h-96 bg-blue-300">
                    
                </div>
            </div>
        </div>

        
    </div>)
}

export default Landingpage