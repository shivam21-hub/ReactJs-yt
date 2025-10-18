
import React from 'react'
import {BookmarkCheck} from 'lucide-react'
const Card = (props) => {
  return (
   <div className="card">
        <div>
            <div className="top">
              <img src={props.brandLogo} alt="" />
              <button>Save <BookmarkCheck size={12}/> </button>
            </div>
            <div className="center">
              <h3>{props.company} <span>{props.datePosted}</span></h3>
              <h2>{props.post}</h2>
              <div>
                <h4>{props.tag1}</h4>
                <h4>{props.tag2}</h4>
              </div>
            </div>
        </div>
          <div className="bottom">
              <div> 
                  <h3>{props.pay}</h3>
                  <p>{props.city},India</p>
              </div>
              <button>Apply Now</button>
          </div>
      </div>
  )
}

export default Card
