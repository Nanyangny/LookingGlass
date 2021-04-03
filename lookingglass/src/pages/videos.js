import react, { useEffect, useState } from 'react';
import "../css/pastconv.css";
import "../css/flickingFeature.css"
import "../css/video.css"
import { youtube_video} from '../core/Config';
import { useParams} from "react-router-dom";
import { Container, Row } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Container, Grid, Col, Row } from 'react-bootstrap';
import creative_commons from "../img/creative-commons.png";
import nml from "../img/NewsMediaLabLogo.png";


export default function Video(props) {
    let { source, topic } = useParams();
    const [videos, set_videos] = useState([]);
    const [valid_result, set_valid_result] = useState(true);
    const [video_ready, set_video_ready] = useState(false);


  
    // console.log(article_info[topic_cleaned]);
    useEffect(()=>{
        const fetchVideos = async ()=>{
            const videoData = await youtube_video(topic);
            if (videoData){
                set_videos(videoData.slice(0,3));
                set_video_ready(true);
            } 
            else{
                set_videos([])
                set_valid_result(false)
            }
            
        }
        fetchVideos();
    },[]);

    if (videos.length>0) {
        
        return (
            <div className="video-sec-container">
                <div className="secTitle">
                    <div className="secBar"></div>
                    <div>Videos</div>
                    <div style={{ fontSize: "0.7em" }}>See through the news</div>
                </div>
                <div className="videos">
                <Container className="ind-video-container">
                       {
                        videos.map((item,i)=> {
                               console.log(item['url'])
                                return(
                                     <VideoItem  id={i} url={item['url']} desc={item['desc']}/>
                           )
                           })   
                       }
                    </Container>
                </div>

            </div>

        )
    } 
    else if (valid_result){
        return null;
    }
    else {
        return (
        <div>
            <div className="video-sec-container">
            <div className="secTitle">
                <div className="secBar"></div>
                <div id="line"></div>
                <h1>Videos</h1>
                <div style={{ fontSize: "10px", marginTop:"-5px"}}>See through the news</div>
            </div>
            <div className="videos">
                <Skeleton  count={5}/>
            </div>
            </div>
        </div>
        )
    }

}



const VideoItem = (props) => {

    // console.log(props.desc_input);
    // console.log(props.url_input);
    return (
       <div id={'video_'+props.id} className="ind-video">
            <Row className="video">
                <iframe src={props.url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Row>
            {/* <Row className="video-source">
                <Image style={{ width: 24 }} roundedCircle src={"https://yt3.ggpht.com/ytc/AAUvwnhSiMEt6hvnT5QbstuehkxgzNl5C3jTanyrFOn-H6g=s68-c-k-c0x00ffffff-no-rj"} />
                <span style={{ marginLeft: "2.5%" }}>BBC News</span>
            </Row> */}
            <Row className="video-title">
              {props.desc}
            </Row>
        </div>
    
    )
           
}

