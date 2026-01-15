import type { JSX } from "react";

interface TimelineItem {
    children:JSX.Element
}
export default function Timeline({children}: TimelineItem){

    return(
    <div
        className="relative max-w-300 mt-0 mr-auto mb-0 ml-auto 
            after:content[''] after:absolute after:w-1.5 after:bg-teal-500 after:top-0 after:bottom-0  after:-ml-1.5"
    >
        {children}
    </div>
    );
}