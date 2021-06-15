// import react, { useEffect, useState } from 'react';
import "../css/end.css";
import creative_commons from "../img/creative-commons.png";


export default function End(props){

    // You may change these to your newsroom title
    const title = "The Conversation";
    const newsroom_url = "https://theconversation.com/id/in-english"

    return(
        <div>
        <div className="end-pane">
                <div id="double-line"></div>
                    <div className="logo"><i className="bi bi-check-circle"></i></div>
                    <div id="h3-title">{props.translation('Ending_section')}</div>
                <div id="double-line"></div>
                {/* here for the Creative Common section */}
                <div id="certificate">
                    <img src={creative_commons} style={{width: "auto", height: "20px"}} alt="creative commons"/>
                    <h3>{title} {props.translation('Creative_Commons')}</h3>
                    <p>{props.translation('Creative_Commons2')}</p>
                </div>
                <a href={newsroom_url} target="_blank" rel="noreferrer">
                    <div className="btn-learn-more">
                        <div className="textbox">
                            <p>{props.translation('ReadMore')}</p>
                            <p id="title">{title}</p>
                        </div>
                        <div className="arrow-right"><i class="bi bi-arrow-right"></i></div>
                    </div>
                </a>
        </div>
            
    </div>
    )
}
