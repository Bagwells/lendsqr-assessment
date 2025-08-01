import type { ReactNode } from "react";


interface Props {
  title: string;
  value: string;
}

interface TileProps {
  title:string;
  children: ReactNode;
  className: string;
}

export const DetailsTexts =({title, value}:Props)=> {
  return(
    <div className="space-y-2 text-[8px] sm:text-[10px] lg:!text-xs text-color work-sans">
      <h6 className="uppercase">
        {title}
      </h6>
      <p className="text-medium text-xs sm:text-base truncate ">
        {value}
      </p>
    </div>
  )
}

export const DetailsTiles =({title, children, className}:TileProps)=> {
  return (
    <div className={`w-full space-y-6 work-sans pb-7 ${className}`}>
      <h4 className="title-color text-medium ">{title}</h4>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {children}
      </div>
    </div>
  )
}


