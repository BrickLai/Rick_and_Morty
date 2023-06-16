import React from 'react'
import imageList from '../picture/promortyus-banner.jpg';


function Savinglist() {
  return (
    <div className='listCharacter'>
    <h2>Saving Lists</h2>
    <img src={imageList} alt='imageList' className='imageList' />
     <p>
     Filters control the records that you see in a list. In Transaction Matching, let's take a look at using filters and lists on Unmatched Transactions.
     </p>
     <p>
     Saved lists are specific to a data source within a match process within a match type. For example, you could create a saved list on the Bank data source within the POS_TO_BANK match process within the INTERCO_MMBT match type.
     </p>
     <p>
     Lists provide these features:

Columns can be added to or removed from the view and re-ordered.

Filters can be applied to limit the records included in the list.

List views can be saved for future use by the user who created it or it can be made Public for other users if you are an Administrator or Power User. 

     </p>
   </div>
  )
}

export default Savinglist







