import { t } from "i18next"
import Timeline from "./timeline"
import TimelineItem from "./timelineItem"
function SeparatorFeatures() { return (<div className="hidden max-[900px]:block w-7/8 h-1 bg-teal-500 rounded-full mx-auto my-24" />) }

interface FeaturesContent {
    featuresTitle:string[],
    featuresText:string[],
    learningsTitle:string[],
    learningText:string[],
}
export default function Features({ featuresTitle,featuresText,learningsTitle,learningText }: FeaturesContent)
{
    return(
    <section className="flex flex-row max-[900px]:flex-col gap-48" id="Features">

        <div className="flex flex-col p-8 w-full">
            <div className="bg-teal-800 max-w-fit rounded-md p-4 -ml-4 shadow-2xl">
                    <h1 className="bg-linear-to-r from-ghostwhite to-teal-400 bg-clip-text text-transparent font-extrabold text-3xl">{t("projects_page.feat")}</h1>
            </div>

            <Timeline>
                <>
                    {
                    featuresTitle.map((title,index)=>(
                            <TimelineItem key={ index }title={title}>
                                {featuresText[index]}
                            </TimelineItem>
                    ))
                    }     
                </>
            </Timeline>  
        </div>

        <SeparatorFeatures/>
        <div className="flex flex-col p-8 w-full">
                <div className="bg-teal-800 max-w-fit rounded-md p-4 -ml-4 shadow-2xl">
                    <h1 className="bg-linear-to-r from-ghostwhite to-teal-400 bg-clip-text text-transparent font-extrabold text-3xl">{t("projects_page.learn")}</h1>
                </div>

                <Timeline>
                    <>
                        {
                            learningsTitle.map((title, index) => (
                                <TimelineItem key={index} title={title}>
                                    {learningText[index]}
                                </TimelineItem>
                            ))
                        }
                    </>
                </Timeline>              
        </div>
    </section>
 
    
    )
}