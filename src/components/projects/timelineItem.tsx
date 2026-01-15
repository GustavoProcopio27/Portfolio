import type { ReactNode } from "react";

interface ItemContent {
    title?: string;
    children?: ReactNode;
}
export default function TimelineItem({ children,title }: ItemContent){
    return(
    <div className="
            pt-2.5 pr-10 pb-2.5 pl-10 relative bg-inherit w-7/8 
            after:content[''] after:absolute after:w-6.25 after:h-6.25 after:-right-4.25 after:bg-white after:border-4 after:border-teal-400 after:top-3.75 after:rounded-full after:z-2
            
            before:content[''] before:h-0 before:absolute before:top-5.5 before:w-0 before:z-2 before:left-7.5 
            before:border-t-10 before:border-r-10 before:border-b-10 before:border-l-0
            before:border-t-transparent before:border-r-teal-600 before:border-b-transparent before:border-l-transparent
            after:-left-4
            ">
        <div className="pt-5 pr-8 pb-5 pl-8  bg-teal-600 relative rounded-md">
            <h1 className="text-ghostwhite text-xl font-bold">{title}</h1>
            <p className="text-ghostwhite text-justify text-lg">{children}</p>
        </div>
        </div>
        );
}