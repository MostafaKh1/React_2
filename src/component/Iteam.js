import React from "react";
import favicon from "../images/icon-star.svg"



export default function Iteam () {
const [rating, setReating] = React.useState(null)
const [hover, setHover] = React.useState(null)
    
    
    return (
    <section>
        <div className="container">

                <p className="icon"><img src={favicon} /></p>
                <h2>How did we go?</h2>
                <p>Please let us know how we did with your support request.
                    All feedback is appreciated to help us improve our offering!</p>
                {[...Array(5)].map(((iteam , i) => {
                    var reatingValue = i + 1
                
                return  <label>
                    
                    <input
                    type="radio"
                    name="rating" 
                    value={reatingValue}
                    onClick={()=> setReating(reatingValue)}
                    

                    />

                    <div className="iteam"
                        style={{
                            backgroundColor: reatingValue <= ( hover||rating) ? "#F87615" : "#242D36" ,
                            color: reatingValue <= ( hover||rating) ? "white" : "#6F7780"
                        }}
                        onMouseEnter={() => setHover(reatingValue) }
                        onMouseLeave={() => setHover(null) }
                    >
                    {reatingValue}</div>
                    {}
                    </label>
                }))}
                <button className="btn">Submit</button>
             </div>
        </section> 
    )
}