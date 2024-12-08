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
import { RxHamburgerMenu } from "react-icons/rx";
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
        image : <img src={Orange} width={400} className="md:ml-10 rounded-xl"/>,
        story: "“ After days of relentless travel, they finally stumbled upon the ruins of the forgotten relic, nestled in a valley that seemed untouched by time. The sight was otherworldly—a sprawling tapestry of nature and ancient artistry. Towering crystal spires erupted from the ground, refracting the sunlight into cascades of vibrant colors that danced across the landscape. Exotic flowers of impossible hues bloomed among the crumbled stonework, their delicate petals shimmering as if kissed by starlight.”",
        background: "bg-blue-200"
    },
    {
        image : <img src={Desert} width={400} className="md:ml-10 rounded-xl"/>,
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

    const[nav,setNav] = useState(false)
    // will keep track of the current index in the arrays of objects
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [reviewIndex, setReviewIndex ] = useState<number>(0)

   
    // Function to move to the next story
    const nextStory = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
    };

    // Auto-scroll function 
    useEffect(() => {
        const intervalId = setInterval(nextStory, 7000);  //change story after alotted time

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
    
    const navClick = (id:string) =>{
        setNav(false)
        document.getElementById(id)?.scrollIntoView({behavior: "smooth"})
    }
    return(<div className="font-syne">
        {/* navbar */}
        <div className="flex flex-row justify-between items-center h-16 ">
            <div className="flex flex-row items-center space-x-16">
                <div className="flex flex-row items-center space-x-4 ml-2">
                    <GiDeadWood size={45}/>
                    <h1 className=" text-2xl sm:text-3xl">
                        Storyboard
                    </h1>
                </div>
                <nav className="hidden md:block">
                    <ul className="flex flex-row space-x-8">
                        <li onClick={()=>document.getElementById("stories")?.scrollIntoView({ behavior: "smooth" })} 
                            className="text-xl hover:underline cursor-pointer">
                            Stories
                        </li>
                        <li onClick={()=>document.getElementById("community")?.scrollIntoView({ behavior: "smooth" })}
                            className="text-xl hover:underline cursor-pointer">
                            Community
                        </li>
                    </ul>
                </nav>
            </div>
            <button className="hidden md:flex flex-row items-center justify-center py-2 h-12 w-36 mr-2 border border-black border-b-2 ">
                <h1 className="text-xl mr-2">Log in</h1>
                <Enter />
            </button>
            <button onClick={()=>{setNav(true)}} className="md:hidden mr-1">
                <RxHamburgerMenu size={40}/>
            </button>
        </div>
        

        {/* small nav - mobile */}
        <div className={`${nav?'block':'hidden'} flex items-center justify-center inset-0 fixed bg-white z`}>
            <button onClick={()=>{setNav(false)}} className=" absolute right-1 top-3">
                <RxHamburgerMenu size={40}/>
            </button>

            <nav >
                <ul className="space-y-4">
                    <li onClick={()=>navClick("stories")}
                        className="text-xl hover:underline cursor-pointer">
                        Stories
                    </li>
                    <li onClick={()=>navClick("community")}
                        className="text-xl hover:underline cursor-pointer">
                        Community
                    </li>
                </ul>
            </nav>
          
        </div>

        <div className="flex flex-col items-center">
        {/* intro */}
        <div className="flex flex-col lg2:flex-row w-full items-center lg2:items-start justify-center relative mt-16 lg2:space-x-6 xl:space-x-12">
            {/* Text Section */}
            <div className="z-50 lg:mt-16 slide-right space-y-6 lg:space-y-12 text-center lg2:text-left">
                <h1 className="text-5xl md:text-6xl font-spinnaker">For</h1>
                <h1 className="text-5xl sm:text-7xl md:text-[110px] font-sunshiney">Artists</h1>
                <h1 className="text-5xl sm:text-7xl md:text-[90px] font-varela italic">Thinkers</h1>
                <h1 className="text-5xl sm:text-7xl md:text-[110px] font-syne">Writers</h1>
            </div>

            {/* Lightbulb Icon */}
            <div className="z-50 slide-down hidden md:block xl:block lg:mb-3 lg2:mb-0">
                <Lightbulb />
            </div>

            {/* Image Section */}
            <div className="z-50 slide-left mt-8 lg:mt-0">
                <img 
                src={Field} 
                className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] rounded-3xl"
                alt="Field" 
                />
            </div>

            {/* Background Shape */}
            <div className="max-w-full md:w-[95%] lg:w-[1400px] h-96 bg-blue-200 absolute bottom-10 lg:bottom-20">
            </div>
</div>

       
       


        <div className="flex flex-col justify-center items-center h-32  mt-20 bg-gray-100 px-4">
            <h1 className="text-2xl xs:text-3xl text-center">Story creation for anyone - artists, writers, thinkers</h1>
            <p>-"Henry"</p>
        </div>
       

        {/* Create your own stories */}
        <div id="stories" className="flex flex-col mt-24 relative lg:px-10">
            {/* Title Section */}
            <div className="z-50 space-y-3 px-4">
                <div className="flex space-x-3 flex-row md:items-center">
                    <h1 className="text-3xl sm:text-5xl  mr-0 md:mr-4">Create your own stories</h1>
                    <div className="hidden md:block"><Pencil width={"40"} height={"40"} /></div>
                </div>
                <h1 className="text-lg sm:text-2xl">With a plethora of great visuals!</h1>
            </div>
            
            {/* Stories Section */}
            <div className="flex flex-col lg:flex-row items-center md:space-x-12 mt-5 z-50">
                <div className="w-full md:w-auto flex justify-center">
                    {stories[currentIndex].image}
                </div>

                <div className="flex flex-col justify-end items-end w-full md:w-auto mt-5 md:mt-0">
                    <div className="flex flex-col items-end w-full lg:mt-20">
                        <p className="text-md md:text-xl max-w-full md:max-w-3xl text-center md:text-left">
                            {stories[currentIndex].story}
                        </p>
                        <div className="flex justify-center items-end md:justify-end mt-5 md:mt-0 mr-5">
                            <button onClick={nextStory} aria-label="Next Story">
                                <NextButton />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Background Section */}
            <div className={`absolute bottom-14 sm:bottom-3 md:bottom-6 lg:bottom-8 lg2:bottom-14 xl:bottom-16  md w-full md:max-w-[1360px] h-[420px]  ${stories[currentIndex].background}`}>
            </div>
        </div>

     

        {/* what is storyboard */}
        <div className="flex flex-col mt-32 relative px-4">
            <div className="z-50 space-y-3">
                <div className="flex flex-row items-center mb-4 ">
                    <h1 className="text-3xl sm:text-5xl mr-4">What is Storyboard</h1>
                    {/* <Pencil width={"40"} height={"40"}/> */}
                    <BsQuestionCircle size={40} className="hidden md:block"/>
                </div>
                <p className="max-w-7xl text-md sm:text-xl md:text-2xl leading-loose">
                Storyboard is a digital haven designed for artists, thinkers, and writers to come together and ignite their creativity. It’s a platform where users can explore vibrant galleries, connect with a like-minded community, and craft captivating stories inspired by an extensive collection of illustrations and shared ideas. Whether you’re an illustrator showcasing your work, a writer weaving narratives from visual prompts, or someone simply seeking inspiration, Storyboard offers a collaborative space to create, share, and be inspired. Dive into others' creations, contribute your unique voice, and transform scattered pieces of inspiration into compelling narratives that resonate with the world.
                </p>
                {/* <h1 className="text-2xl">With a plethora of great viuals!</h1> */}
            </div>
        </div>
        

        <div className="flex flex-col justify-center items-center h-32 mt-20 bg-gray-100 px-4">
            <h1 className=" text-3xl text-center ">Your one stop shop for inspiration</h1>
            <span className="">-"John"</span>
        </div>


        {/* Get Inspired - community  */}
        <div id="community" className="flex flex-col mt-24 relative ">
            <div className="z-50 space-y-3 mb-4 px-4">
                <div className="flex flex-row items-center  sm:justify-start">
                    <h1 className="text-3xl sm:text-5xl mr-4">Get inspired </h1>
                    <div className="hidden md:block"><Brain/></div>
                </div>
                <h1 className="text-xl sm:text-2xl sm:text-start">Be part of and get inspired by a great community</h1>
            </div>
            <div className="bg-gray-200 w-full lg:w-[1300px] md:max-w-[1300px] mx-auto md:h-[650px] p-5">
                <div className="flex flex-col md:flex-row justify-center items-center md:space-x-10">
                    <img src={Car} className="rounded-xl w-full md:w-[400px] max-w-xs md:max-w-sm" />
                    <div className="space-y-8 flex flex-col justify-center w-full md:max-w-[500px] mt-5 md:mt-0">
                        {/* Clara Message */}
                        <div className="xs:w-96 md:w-auto">
                            <h1 className="text-sm md:text-base">Clara - 10:53 am</h1>
                            <div className="bg-gray-100 flex flex-row items-center space-x-3 p-3 rounded-2xl">
                                <img src={Spacegirl} className="w-12 h-12 md:w-16 md:h-16 rounded-full" />
                                <h1 className="text-sm md:text-lg">This is a great story and visuals!</h1>
                            </div>
                        </div>
                        {/* Alice Response */}
                        <div className="w-full flex justify-end">
                            <div className="flex flex-col items-end">
                                <h1 className="text-sm md:text-base">Alice - 11:05 am</h1>
                                <div className="bg-gray-100 flex flex-row items-center justify-end space-x-3 p-3 rounded-2xl w-full md:max-w-[384px]">
                                    <h1 className="text-sm md:text-lg">Thank you so much!</h1>
                                    <img src={Watergirl} className="w-12 h-12 md:w-16 md:h-16 rounded-full" />
                                </div>
                            </div>
                        </div>
                        {/* John Message */}
                        <div className="xs:w-96 md:w-auto">
                            <h1 className="text-sm md:text-base">John - 10:57 am</h1>
                            <div className="bg-gray-100 flex flex-row items-center space-x-3 p-3 rounded-2xl">
                                <img src={Moongirl} className="w-12 h-12 md:w-16 md:h-16 rounded-full" />
                                <h1 className="text-sm md:text-lg">Really great and love the story!</h1>
                            </div>
                        </div>
                        {/* Another Alice Response */}
                        <div className="w-full flex justify-end">
                            <div className="flex flex-col items-end">
                                <h1 className="text-sm md:text-base">Alice - 11:06 am</h1>
                                <div className="bg-gray-100 flex flex-row items-center justify-end space-x-3 p-3 rounded-2xl w-full md:max-w-[384px]">
                                    <h1 className="text-sm md:text-lg">Thank you, I appreciate it!</h1>
                                    <img src={Watergirl} className="w-12 h-12 md:w-16 md:h-16 rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
         {/* Features */}
         <div className="flex flex-col my-20">
                <div className="flex flex-row items-center space-x-3 px-4">
                    <h1 className="text-3xl sm:text-5xl">Features</h1>
                    <div className="hidden md:block"><BiSolidCategory size={35}/></div>
                </div>
                <h1 className="text-xl sm:text-2xl mt-3 px-4">What storyboard offers</h1>
                
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 mt-10 space-y-8 gap-6">
                    <div className="flex flex-col justify-center  bg-gray-100 rounded-3xl px-4">
                        <FaPeopleGroup size={55}/>
                        <h1 className="text-2xl">Community</h1>
                        <p className="max-w-xs text-lg">A community you can share with and be a part of</p>
                    </div>
                    <div className=" px-4">
                        <HiOutlineLightBulb size={55}/>
                        <h1 className="text-2xl">Inspiration</h1>
                        <p className="max-w-sm  text-lg">Gain inspiration from galleries or other people's works</p>
                    </div>
                        {/* <img src={Person} width={300}/> */}
                    <div className="px-4">
                        <GiScrollQuill size={55}/>
                        <h1 className="text-2xl">Story creation</h1>
                        <p className="max-w-sm text-lg">Build stories using illustrations from galleries as inspiration.</p>
                    </div>
                    <div className="px-4">
                        <AiFillPicture size={55}/>
                        <h1 className="text-2xl">Galleries</h1>
                        <p className="max-w-sm text-lg">Tons of images you can gain inspiration from</p>
                    </div>
                    <div className="px-4">
                        <ImBubbles2 size={50}/>
                        <h1 className="text-2xl">Sharing and feedback</h1>
                        <p className="max-w-sm text-lg">Publish your stories to share with the community or keep them private</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center h-32  mt-20 bg-gray-100 px-4">
                <h1 className="text-center text-3xl">A place for your creativity</h1>
                <p>-"Ben"</p>
            </div>

         {/* See what others say */}
         <div className="flex flex-col mt-24 relative ">
            <div className="z-50 space-y-3 mb-4 px-4">
                <div className="flex flex-row items-center">
                    <h1 className="text-3xl sm:text-5xl mr-4">See what others say </h1>
                    <IoChatbubblesOutline className="hidden md:block" size={45}/>
                </div>
                <h1 className="text-xl sm:text-2xl">Opinions on the app</h1>
            </div>
            <div className="flex flex-col justify-center bg-blue-200 max-w-full xl:w-[1300px] xl:h-[350px]">
                <div className="flex flex-col md:flex-row items-center px-6 mb-5 xl:mb-0 mt-5  lg:space-x-4 py-4 lg:py-0">
                    {reviews[reviewIndex].image}
                    
                    <div className="flex flex-col items-center">
                        <p className="text-xl sm:text-2xl lg:text-3xl max-3xl mt-5 text-center px-4 md:px-0">{reviews[reviewIndex].review}</p>
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
                    className="hidden xl:flex items-end justify-end mr-20">
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