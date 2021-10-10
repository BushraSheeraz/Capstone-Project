import TechKaroImage from "../../Images/tech karo.png";

function TechKaroPage() {
    return (
        <>
            <div className="techkaroPage">
                <div className="techkaroBanner">
                    <div className="techkaroImage">
                        <img src={TechKaroImage} alt="Tech Karo"></img>
                    </div>
                </div>
                <div className="techkaroContent">
                    <div>
                        <h4>According to the World Economic Forum, Pakistani women hold only 4.9% of STEM jobs.
                            To give women equal representation, CIRCLE launched an initiative called TechKaro.</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TechKaroPage;