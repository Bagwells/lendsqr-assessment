

export const Icon =({assetName}:{assetName:string})=> {
  const alternate = assetName.slice(-4);
  return(
    <img src={assetName} alt={alternate} width={16} height={16}/>
  )
}