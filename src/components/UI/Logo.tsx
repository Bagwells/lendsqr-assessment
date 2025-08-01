
type ImageProps = {
  width:number
  height: number
}

export const Logo =({
  width=145,
  height=30
}:ImageProps)=> {
  return(
    <img 
      src="/LendsqrLogo.svg"
      alt="Logo"
      width={width}
      height={height}
      loading="lazy"
    />
  )
}