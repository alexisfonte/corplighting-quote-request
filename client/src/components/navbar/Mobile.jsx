import React from 'react'
import MobileCategorySection from './MobileCategorySection'
import MobileUserSection from './MobileUserSection'

function Mobile({showCat}) {
  return (
    <>
    {showCat && <MobileCategorySection/>}
    <MobileUserSection/>
    </>
  )
}

export default Mobile