import { GiDeadWood } from "react-icons/gi";
// import { HiOutlineLightBulb } from "react-icons/hi";
import { Brain, Enter, Lightbulb, NextButton, Pencil } from "../Icons";
import Car from "../assets/car.png";
import Field from "../assets/field.png";
import Moongirl from "../assets/moongirl.png";
import Orange from "../assets/orange.png";
import Spacegirl from "../assets/spacegirl.png";
import Watergirl from "../assets/watergirl.png";
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
        <div className="flex flex-col items-center">
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
            <div className="w-[1500px] h-96 bg-blue-200 absolute bottom-20">

            </div>
        </div>

        {/* <div className="flex flex-col items-center"> */}

        {/* Create your own stories */}
        <div className="flex flex-col mt-24 relative ">
            <div className="z-50 space-y-3">
                <div className="flex flex-row items-center">
                    <h1 className="text-5xl mr-4">Create your own stories</h1>
                    <Pencil width={"40"} height={"40"}/>
                </div>
                <h1 className="text-2xl">With a plethora of great viuals!</h1>
            </div>
            <div className="flex flex-row items-center space-x-12 mt-5 z-50">
                <img src={Orange} width={400} className="ml-10"/>
                
                <div className=" flex flex-col justify-end items-end">
                    <div className="flex flex-row mt-60">
                        <p className="text-xl max-w-3xl font-spinnaker">
                        “
                        After days of relentless travel, they finally stumbled upon 
                        the ruins of the forgotten relic, nestled in a valley that seemed 
                        untouched by time. The sight was otherworldly—a sprawling tapestry 
                        of nature and ancient artistry. Towering crystal spires erupted from 
                        the ground, refracting the sunlight into cascades of vibrant colors 
                        that danced across the landscape. Exotic flowers of impossible hues 
                        bloomed among the crumbled stonework, their delicate petals shimmering 
                        as if kissed by starlight.”
                        </p>
                        {/* <Pencil width={"50"} height={"50"}/> */}
                    </div>
                    <button className="mr-20 mt-32"><NextButton/></button>
                </div>
                
            </div>
            
            <div className="absolute bottom-24 w-[1360px] h-96 bg-blue-300">
                
            </div>
        </div>
        {/* </div> */}

        {/* Get Inspired */}
        <div className="flex flex-col mt-24 relative ">
            <div className="z-50 space-y-3 mb-4">
                <div className="flex flex-row items-center">
                    <h1 className="text-5xl mr-4">Get inspired </h1>
                    <Brain/>
                </div>
                <h1 className="text-2xl">Be part of and get inspired by a great community</h1>
            </div>
            <div className="bg-gray-200 w-[1300px] h-[650px]">
                <div className="flex flex-row justify-center mt-10 space-x-32">
                    <img src={Car} width={400} className="rounded-xl"/>
                    <div className="space-y-10 flex flex-col justify-center w-[500px]  ">
                        <div>
                            <h1>clara - 10:53 am</h1>
                            <div className="bg-gray-100 flex flex-row items-center space-x-3 rounded-2xl h-20">
                                <img src={Spacegirl} width={68}/>
                                <h1 className="text-lg">This is a great story and visuals!</h1>
                            </div>
                        </div>
                        <div className="w-full flex justify-end">
                            <div className="flex flex-col justify-end items-end">
                                <h1>Alice - 11:05 am</h1>
                                <div className="bg-gray-100 flex flex-row items-center justify-end space-x-3 rounded-2xl h-20 w-96">
                                    <h1 className="text-lg">Thank you so much!</h1>
                                    <img src={Watergirl} width={68}/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1>John - 10:57 am</h1>
                            <div className="bg-gray-100 flex flex-row items-center space-x-3 rounded-2xl h-20">
                                <img src={Moongirl} width={68}/>
                                <h1 className="text-lg">Really great and love the story!</h1>
                            </div>
                        </div>
                        <div className="w-full flex justify-end">
                            <div className="flex flex-col justify-end items-end">
                                <h1>Alice - 11:06 am</h1>
                                <div className="bg-gray-100 flex flex-row items-center justify-end space-x-3 rounded-2xl h-20 w-96">
                                    <h1 className="text-lg">Thank you, I appreciate it!</h1>
                                    <img src={Watergirl} width={68}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

         {/* See what others say */}
         <div className="flex flex-col mt-24 relative ">
            <div className="z-50 space-y-3">
                <div className="flex flex-row items-center">
                    <h1 className="text-5xl mr-4">See what other say</h1>
                    <Brain/>
                </div>
            </div>
            <div className="bg-blue-200">
                
            </div>
        </div>
    </div>

        
</div>)
}

export default Landingpage