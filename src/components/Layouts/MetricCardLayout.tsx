import type { ReactNode } from "react";


interface CardProps  {
  color: string;
  metricData: string | number;
  Icon: ReactNode;
  title:string;
}

export const MetricsCard =({color, metricData, title, Icon}:CardProps)=> {

  return(
    <div className="work-sans bg-white px-6 xl:px-[30px] py-5 rounded-sm drop-shadow-lite border border-[#213F7D06] h-40 space-y-3">
      <div className={`flex items-center justify-center w-10 h-10 rounded-full ${color}`}>
        {Icon}
      </div>
      <div className="text-color text-sm lg:text-xs xl:text-sm text-medium text-nowrap uppercase">
        {title}
      </div>
      <h4 className="title-color text-semibold text-6">
        {metricData}
      </h4>
    </div>  
  )
}