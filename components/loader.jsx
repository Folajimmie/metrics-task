import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={348}
    height={143.84}
    viewBox="0 0 348 143.84"
    backgroundColor="#080746"
    foregroundColor="#a28a16"
    {...props}
  >
    <rect x="-89" y="194" rx="3" ry="3" width="88" height="6" /> 
    <rect x="46" y="48" rx="3" ry="3" width="164" height="8" /> 
    <rect x="46" y="68" rx="3" ry="3" width="185" height="10" /> 
    <rect x="-206" y="224" rx="3" ry="3" width="380" height="6" /> 
    <rect x="-132" y="234" rx="3" ry="3" width="178" height="6" /> 
    <circle cx="-28" cy="140" r="20" /> 
    <rect x="-76" y="140" rx="0" ry="0" width="43" height="2" /> 
    <circle cx="69" cy="20" r="19" />
  </ContentLoader>
)

export default MyLoader

