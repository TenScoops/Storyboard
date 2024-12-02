import { GiDeadWood } from "react-icons/gi";
// import { HiOutlineLightBulb } from "react-icons/hi";
import { useEffect, useState } from "react";
import { AiFillPicture } from "react-icons/ai";
import { BiSolidCategory } from "react-icons/bi";
import { BsQuestionCircle } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiScrollQuill } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { ImBubbles2 } from "react-icons/im";
import { IoChatbubblesOutline } from "react-icons/io5";
import Beanie from "../assets/beanie.png";
import Car from "../assets/car.png";
import Desert from "../assets/desert.png";
import Field from "../assets/field.png";
import Mars from "../assets/mars.png";
import Moongirl from "../assets/moongirl.png";
import Orange from "../assets/orange.png";
import Spacegirl from "../assets/spacegirl.png";
import Spacegirl2 from "../assets/spacegirl2.png";
import Watergirl from "../assets/watergirl.png";
import { Brain, Enter, Lightbulb, NextButton, Pencil, Star } from "../Icons";
const Landingpage = () => {

    interface storiesprops{
        image:JSX.Element,
        story:string,
        background:string
    }
    interface reviewsprops{
        image: JSX.Element,
        review: string
    }
    // stories object
    const stories: storiesprops[] = [{
        image : <img src={Orange} width={400} className="ml-10 rounded-xl"/>,
        story: "“ After days of relentless travel, they finally stumbled upon the ruins of the forgotten relic, nestled in a valley that seemed untouched by time. The sight was otherworldly—a sprawling tapestry of nature and ancient artistry. Towering crystal spires erupted from the ground, refracting the sunlight into cascades of vibrant colors that danced across the landscape. Exotic flowers of impossible hues bloomed among the crumbled stonework, their delicate petals shimmering as if kissed by starlight.”",
        background: "bg-blue-200"
    },
    {
        image : <img src={Desert} width={400} className="ml-10 rounded-xl"/>,
        story: "“ The heat of the desert scorched everything in its path, leaving only the scattered remains of broken robots half-buried in the sand. The few that remained standing moved slowly, their mechanical limbs stiff and their once-vibrant lights now dim, as if drained by the relentless sun. Their metallic bodies, worn and weathered by time, creaked with each movement, barely clinging to the life they once had. The air was thick with silence, the desert's harsh winds sweeping over the land like a funeral march, carrying with it the scent of rust and decay.”",
        background: "bg-orange-100"
    }]
    //review objects
    const reviews: reviewsprops[] = [{
        image:<img src={Spacegirl2} width={200} />,
        review: "“This platform stimulates my creativity!...” -Emmy"
    },
    {
        image:<img src={Beanie} width={200} className="border border-black rounded-full"/>,
        review: "“An incredible platform for inspiration!” -Henry"
    },
    {
        image:<img src={Mars} width={200} className="border border-black rounded-full"/>,
        review: "“Allows you to make use of your imagination!” -Bella"
    },
    ]

    // will keep track of the current index in the arrays of objects
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [reviewIndex, setReviewIndex ] = useState<number>(0)

   
    // Function to move to the next story
    const nextStory = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
    };

    // Auto-scroll function 
    useEffect(() => {
        const intervalId = setInterval(nextStory, 20000);  //change story after alotted time

        return () => {
            clearInterval(intervalId);  // Cleanup the interval 
        };
    }, []);  
;
    
    // function to move to the next review
    const nextReview = () => {
        setReviewIndex((prevIndex)=>(prevIndex + 1) % reviews.length)
    }

    useEffect(()=>{
        const intervalId = setInterval(nextReview, 3700)
        return ()=>{
            clearInterval(intervalId)
        }
    }, [])
    
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
       
       


        <div className="flex flex-col justify-center items-center h-32  mt-20 bg-gray-100 px-4">
            <h1 className="text-3xl">Story creation for anyone - artists, writers, thinkers</h1>
            <p>-"Henry"</p>
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
                {stories[currentIndex].image}

                <div className="flex flex-col justify-end items-end">
                    <div className="flex flex-row ">
                        <p className="text-xl max-w-3xl">
                            {stories[currentIndex].story}
                        </p>
                        <div className="flex items-end">
                        <button
                        onClick={nextStory}
                        aria-label="Next Story"
                        >
                        <NextButton />
                        </button>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            <div className={`absolute bottom-24 w-[1360px] h-96 ${stories[currentIndex].background} `}>
                
            </div>
        </div>
        {/* </div> */}

 {/* what is storyboard */}
 <div className="flex flex-col mt-32 relative ">
            <div className="z-50 space-y-3">
                <div className="flex flex-row items-center">
                    <h1 className="text-5xl mr-4">What is Storyboard</h1>
                    {/* <Pencil width={"40"} height={"40"}/> */}
                    <BsQuestionCircle size={40}/>
                </div>
                <p className="max-w-7xl text-2xl leading-loose">
                Storyboard is a digital haven designed for artists, thinkers, and writers to come together and ignite their creativity. It’s a platform where users can explore vibrant galleries, connect with a like-minded community, and craft captivating stories inspired by an extensive collection of illustrations and shared ideas. Whether you’re an illustrator showcasing your work, a writer weaving narratives from visual prompts, or someone simply seeking inspiration, Storyboard offers a collaborative space to create, share, and be inspired. Dive into others' creations, contribute your unique voice, and transform scattered pieces of inspiration into compelling narratives that resonate with the world.
                </p>
                {/* <h1 className="text-2xl">With a plethora of great viuals!</h1> */}
            </div>
        </div>
        

        <div className="flex flex-col justify-center items-center h-32  mt-20 bg-gray-100 px-4">
            <h1 className="text-3xl">Your one stop shop for inspiration</h1>
            <p>-"John"</p>
        </div>

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
         {/* Features */}
         <div className="flex flex-col my-20">
                <div className="flex flex-row items-center space-x-3">
                    <h1 className="text-5xl">Features</h1>
                    <BiSolidCategory size={35}/>
                </div>
                <h1 className="text-2xl mt-3">What storyboard offers</h1>
                
                <div className="grid grid-cols-3 mt-10 space-y-8 gap-6">
                    <div className="flex flex-col justify-center  bg-gray-100 rounded-3xl pl-4">
                        <FaPeopleGroup size={55}/>
                        <h1 className="text-2xl">Community</h1>
                        <p className="max-w-xs text-lg">A community you can share with and be a part of</p>
                    </div>
                    <div className=" ">
                        <HiOutlineLightBulb size={55}/>
                        <h1 className="text-2xl">Inspiration</h1>
                        <p className="max-w-sm  text-lg">Gain inspiration from galleries or other people's works</p>
                    </div>
                        {/* <img src={Person} width={300}/> */}
                    <div>
                        <GiScrollQuill size={55}/>
                        <h1 className="text-2xl">Story creation</h1>
                        <p className="max-w-sm text-lg">Build stories using illustrations from galleries as inspiration.</p>
                    </div>
                    <div>
                        <AiFillPicture size={55}/>
                        <h1 className="text-2xl">Galleries</h1>
                        <p className="max-w-sm text-lg">Tons of images you can gain inspiration from</p>
                    </div>
                    <div>
                        <ImBubbles2 size={50}/>
                        <h1 className="text-2xl">Sharing and feedback</h1>
                        <p className="max-w-sm text-lg">Publish your stories to share with the community or keep them private</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center h-32  mt-20 bg-gray-100 px-4">
                <h1 className="text-3xl">A place for your creativity</h1>
                <p>-"Ben"</p>
            </div>

         {/* See what others say */}
         <div className="flex flex-col mt-24 relative ">
            <div className="z-50 space-y-3 mb-4">
                <div className="flex flex-row items-center">
                    <h1 className="text-5xl mr-4">See what others say </h1>
                    <IoChatbubblesOutline size={45}/>
                </div>
                <h1 className="text-2xl">Opinions on the app</h1>
            </div>
            <div className="flex flex-col justify-center bg-blue-200 w-[1300px] h-[350px]">
                <div className="flex flex-row items-center ml-10 mt-10 space-x-4">
                    {reviews[reviewIndex].image}
                    
                    <div className="flex flex-col items-center">
                        <p className="text-3xl mt-5">{reviews[reviewIndex].review}</p>
                        <div className="flex flex-row space-x-3 mt-5">
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                        </div>
                    </div>
                </div>
                <button 
                    onClick={nextReview}
                    className="flex items-end justify-end mr-20">
                    <NextButton />
                </button>
            </div>
            <div className="flex items-center justify-center mt-20 mb-20">
                <button 
                    className="flex flex-row items-center justify-center py-2 h-12 w-36 mr-2 border border-black border-b-2 ">
                    <h1 className="text-xl mr-2">Join us</h1>
                    <Enter />
                </button>
            </div>
        </div>
    </div>

        
</div>)
}

export default Landingpage