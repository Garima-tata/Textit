import React, { useState } from 'react'



export default function About() {

    
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [btnText, setBtnText] = useState("Enable Dark Mode")

    const toggleStyle = () => {
        if (myStyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid black'
            })
            setBtnText("Enable Dark Mode")
        }
        else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white',
            })
            setBtnText("Enable Dark Mode")
        }
    }
  return (
    <div>
    
    
        <div class="accordion container" style={{myStyle, marginTop:"10px"}} id="accordionPanelsStayOpenExample" >
        <div class="accordion-item" style={myStyle}>
            <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            Journey of Learning React
            </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
            <div class="accordion-body">
            This is the first time I have made any project in React.js with such a clear understanding of the concepts. I have learned a lot of things in this journey and I am very happy to share my knowledge with you. I hope you will like my work and appreciate it. Thank you for visiting my website.
            </div>
            </div>
        </div>
        <div class="accordion-item" style={myStyle}>
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                Improvement
            </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
            <div class="accordion-body">
            It is Just a basic starting, where I have followed Harry sir from Code With Harry. There are Lots of things to be added in this website. I will keep updating this website with new features and improvements. I hope you will like my work and appreciate it. Thank you for visiting my website.
            </div>
            </div>
        </div>
        <div class="accordion-item" style={myStyle}>
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                Credits
            </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
            <div class="accordion-body">
                        Code With Harry: Harry Sir, <br />
                        React.js: Facebook,<br />
                        Bootstrap: Twitter,<br />
                        JavaScript: Netscape,<br />
                        HTML: Tim Berners-Lee,<br />
                        CSS: Håkon Wium Lie,<br />
                        GitHub: Tom Preston-Werner, Chris Wanstrath, PJ Hyett,<br />
                        Me: Garima Tata 
            </div>
            </div>
        </div>
        </div>

        
    </div>
  )
}
