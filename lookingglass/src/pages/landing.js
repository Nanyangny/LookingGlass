import React from "react";
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/landing.css";
import logo from "../img/looking-glass@4x.png";
import iphone from "../img/iphone-mockup.png";
import nml from "../img/NewsMediaLabLogo.png";
import vid from "../img/LG-how-to.jpg";


export default function Landing(props) {
    let looking_glass_temp = "https://docs.google.com/spreadsheets/d/1yv_4Kk22-8aTWgeTm1hJb_MUg2UuEuKI6zEO7NUpJvY/copy";
    let nml_link="http://www.newsmedialab.wkwsci.ntu.edu.sg/index.html"

    function Generate() {
        let domain = "https://looking-glass.vercel.app/topics/"
        let domain_local = "http://localhost:3000/topics/"
        let iframe_setting_start = "<iframe src='"
        let iframe_setting_end = "' max-width='400px' height='650px' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe>"

        var userInput = document.getElementById("sheet").value;
        // var userInput = "https://docs.google.com/spreadsheets/d/1Du4YuahwwOS5OSN1MSsn5J2Bz2jPW2iTiQYbFJPWIJI/edit#gid=0";

        //get language
        var dropdown = document.getElementById("language");
        let languageid = dropdown.options[dropdown.selectedIndex].value; // get selected option value

        var setLink = document.getElementById("link");
        var setIframe = document.getElementById("iframe");
        var output;

        output = userInput.split('/');
        let sourceID = String(output[5])

        let preview_url = domain + sourceID + languageid
        // let preview_url = domain_local + sourceID;
        setLink.value = preview_url;

        let iframe = iframe_setting_start + preview_url + iframe_setting_end;
        setIframe.value = iframe;

        //place preview link to button
        var preview = document.getElementById("preview-link");
        preview.setAttribute(
            "href", encodeURI(preview_url)
        );
    }
    function Copy(choice) {
        if (choice == 1) {
            var copyText = document.getElementById("link");
        } else {
            var copyText = document.getElementById("iframe");
        }
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        document.execCommand("copy");

        /* Alert the copied text */
        alert("You have copied the Looking Glass " + copyText.id);
    }
    function Show() {

        var userInput = document.getElementById("sheet").value;

        // verify the google spreadsheet url
        var re = /https:\/\/docs.google.com\/spreadsheets\/d\/([\w]{10,})\/[\w]*/g;
        if(userInput.match(re)!== null){
            Generate();
            var x = document.getElementById("pane-1");
            if (x.style.display == "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }
        else{
            alert("Invalid Google Spreadsheet URL");
            document.getElementById("sheet").value = '';
        }
        
    }
    return (
        <div>
            <div className="content">
                <div id="nav">
                    <div className="img_logo">
                        <a href="http://www.newsmedialab.wkwsci.ntu.edu.sg/ProductPages/LookingGlass.html"><img src={logo} style={{ height: "50px", width: "auto" }}></img></a>
                    </div>
                    <a id="top"></a>
                    <div className="navbar">
                        <a href="#about">About</a>
                        <a href="#howitworks">How it works</a>
                        {/* <a href="#examples">Example</a> */}
                    </div>
                </div>

                <div className="title">
                    <div id="line"></div>
                    <span> Create A </span><br></br>
                    <span>Looking Glass Page</span><br></br>
                    <p style={{ marginTop: "5%", marginBottom: "5%", lineHeight: "1.5em", fontFamily: 'Krub' }}>Simply copy and paste the URL onto your social media post to publicise it, or use the iframe to embed the Looking Glass widget on your website!</p>
                    <div className="input-group input-group-mb-3 round" style={{ marginTop: "20px" }}>
                        <input type="text" id="sheet" className="form-control round" placeholder="Google Spreadsheet URL" />
                        <select className="custom-select" id="language">
                            <option selected>Language to be displayed</option>
                            <option value="?lang=id">Indonesia</option>
                            <option value="?lang=en">English</option>
                        </select>
                        <div className="input-group-append round">
                            <button onClick={() => Show()} className="btn btn-outline-secondary round" style={{ backgroundColor: "#c11010", width: "80px" }}><i class="bi bi-chevron-right" aria-hidden="true" style={{ color: "white" }}></i></button>
                        </div>
                    </div>
                </div>
                <div id="pane-1" style={{display:"None"}}>
                    <div className="row">
                        <div className="col"><br></br><span style={{ color: "white" }}>Your Personalised <br></br> Looking Glass <br></br>Is Ready!</span></div>
                        <div className="col-sm-2">
                        <br></br>
                            <div className="preview-tab">
                                <a id="preview-link" href="" target="_blank" style={{ textDecoration: "none", color: "white" }}>
                                    <button><i className="bi bi-box-arrow-up-right" style={{ fontSize: "25px" }}></i><br></br><span>Open preview</span></button>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4" style={{marginBottom: "10%"}}>
                            <span id="copy-title" style={{marginLeft:"8%"}}>Looking Glass URL</span>
                            <div className="input-group-2">
                                <div className="input-group-2-icon"><button onClick={() => Copy(1)}><i class="bi bi-files" aria-hidden="true" style={{ fontSize: "25px" }}></i><span> Copy link</span></button></div>
                                <div className="input-group-2-area"><input type="text" id="link" placeholder="Email Address" value="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1aK824tSDEO4L8HARACYyPx5c3VLLK2jQ8vd8aPamqNg&font=Default&lang=en&initial_zoom=2&height=650" flex-wrap="wrap" readOnly /></div>
                            </div>
                        </div>
                        <div className="col-md-4" style={{marginBottom: "10%"}}>
                            <span id="copy-title" style={{marginLeft:"8%"}}>Embed</span>
                            <div className="input-group-2">
                                <div className="input-group-2-icon"><button onClick={() => Copy(0)}><i class="bi bi-files" aria-hidden="true" style={{ fontSize: "25px" }}></i><span> Copy link</span></button></div>
                                <div className="input-group-2-area"><input type="text" id="iframe" placeholder="Email Address" value="<iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1aK824tSDEO4L8HARACYyPx5c3VLLK2jQ8vd8aPamqNg&font=Default&lang=en&initial_zoom=2&height=650' width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameBorder='0'></iframe>" wrap="hard" readOnly /></div>
                                <br></br>
                            </div>
                        </div>
                    </div>
                </div>
            {/* <Container>
                <div id="pane-1">
                    <Row>
                        <Col></Col>
                        <Col md="auto"></Col>
                        <Col><div><span id="copy-title">Looking Glass URL</span></div></Col>
                        <Col><div><span id="copy-title" style={{marginLeft:"8%"}}>Embed</span></div></Col>
                    </Row>
                    <Row>
                        <Col md="auto"><span style={{ color: "white" }}>Your Personalised <br></br> Looking Glass <br></br>Is Ready!</span></Col>
                        <Col md="auto">
                            <div className="preview-tab">
                                <a id="preview-link" href="" target="_blank" style={{ textDecoration: "none", color: "white" }}>
                                    <button><i className="bi bi-box-arrow-up-right" style={{ fontSize: "25px" }}></i><br></br><span>Open preview</span></button>
                                </a>
                            </div>
                        </Col>
                        <Col>
                            <div className="input-group-2">
                                <div className="input-group-2-icon"><button onClick={() => Copy(1)}><i class="bi bi-files" aria-hidden="true" style={{ fontSize: "25px" }}></i><span> Copy link</span></button></div>
                                <div className="input-group-2-area"><input type="text" id="link" placeholder="Email Address" value="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1aK824tSDEO4L8HARACYyPx5c3VLLK2jQ8vd8aPamqNg&font=Default&lang=en&initial_zoom=2&height=650" flex-wrap="wrap" readOnly /></div>
                            </div>
                        </Col>
                        <Col>
                            <div className="input-group-2">
                                <div className="input-group-2-icon"><button onClick={() => Copy(0)}><i class="bi bi-files" aria-hidden="true" style={{ fontSize: "25px" }}></i><span> Copy link</span></button></div>
                                <div className="input-group-2-area"><input type="text" id="iframe" placeholder="Email Address" value="<iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1aK824tSDEO4L8HARACYyPx5c3VLLK2jQ8vd8aPamqNg&font=Default&lang=en&initial_zoom=2&height=650' width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameBorder='0'></iframe>" wrap="hard" readOnly /></div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container> */}
                <div className="pane-2"> 
                    <a id="about"></a>
                    <div className="left-pane">
                        <div id="line" style={{ marginLeft: "0%" }}></div>
                        <h1>Curated For Your User,</h1>
                        <h1>Customised To Your Needs!</h1>
                        <br></br>
                        <br></br>
                        <Row>
                            <Col>
                                <h2><strong>Keep Your Readers Hooked</strong></h2>
                                <p>Have some groundbreaking news your readers shouldn’t miss? The Looking Glass creates a roundup of your stories to ensure your readers don’t miss these important stories. Simply enter your articles’ URL and topic name, and we will do the rest!</p>
                            </Col>
                            <Col>
                                <h2><strong>Streamline the Search</strong></h2>
                                <p>Nudge your users to keep on reading. The Looking Glass automatically scrapes related stories on a topic from your website or news partners’ website and displays it prominently to the users.</p>
                            </Col>
                            <Col>
                                <h2><strong>Ease of Use — for You</strong></h2>
                                <p>The Looking Glass is designed to work for news organisations like yours, to fit your needs. Learn in 4 easy steps. </p>
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <div className="video">
                                <a href="http://www.youtube.com/watch?feature=player_embedded&v=7WJUAnC8MPE" target="_blank"><img src={"http://img.youtube.com/vi/7WJUAnC8MPE/0.jpg"} alt="LG how to" style={{ width: "auto", height: "200px" }} /></a>
                                    {/* <iframe title="promotional" src="https://www.youtube.com/embed/cpSUCF1wS3c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                                    
                                </div>
                            </Col>
                            <Col>
                                <div className="video">
                                <a href="http://www.youtube.com/watch?feature=player_embedded&v=bFBv5kjA7g0https://www.youtube.com/embed/bFBv5kjA7g0" target="_blank"><img src={"http://img.youtube.com/vi/bFBv5kjA7g0/0.jpg"} alt="LG-demo" style={{ width: "auto", height: "200px" }} /></a>
                                    {/* <iframe title="guidetocreate" src="https://www.youtube.com/embed/YWI5caBZziM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="right-pane">
                        <img src={iphone} style={{ width: "50%", height: "auto", marginTop: "40%" }} />
                    </div>
                </div>


                <Container>
                    <div className="pane-3">
                        <div className="title-1">
                            <a id="howitworks"></a>
                            <div id="line"></div>
                            <h1>How It Works</h1>
                        </div>
                        <div>
                            <Row>
                                <Col>
                                    <div className="instruction-pane">
                                        <span id="number">1</span>
                                        <span id="name">
                                            <h3>Build Your</h3>
                                            <h3>Looking Glass</h3>
                                        </span>
                                        <p>Get a copy of a Google sheet by pressing the red button below. Then, on the Google Sheets interface, save a copy to your Google Drive with the “Make a copy” button.</p>

                                        <br></br>
                                        <a href={looking_glass_temp} target="_blank">
                                            <button id="btn-call-to-action" value="get-template">Get The Template &nbsp; &nbsp;<i className="bi bi-arrow-right" style={{ fontSize: "20px" }}></i></button>
                                        </a>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="instruction-pane">
                                        <span id="number">2</span>
                                        <span id="name">
                                            <h3>Tailor the Looking Glass</h3>
                                            <h3>To Your Needs</h3>
                                        </span>
                                        <div id="resp-table" style={{ marginTop: "5%" }}>
                                            <div id="resp-table-header">
                                                <div className="table-header-cell">
                                                    topic_name
                                    </div>
                                                <div className="table-header-cell">
                                                    main_article_url
                                    </div>
                                                <div className="table-header-cell">
                                                    global_coverage
                                    </div>
                                            </div>
                                            <div id="resp-table-body">
                                                <div className="resp-table-row">
                                                    <div className="table-body-cell">Myammar</div>
                                                    <div className="table-body-cell">https://lookingglass.com/1</div>
                                                    <div className="table-body-cell">https://lookingglass.com/2</div>
                                                </div>
                                            </div>
                                        </div>
                                        <p>Enter your article’s keyword in the first column, and the URL in the second column.</p>
                                        <p> If you have any relevant stories you wish to feature, add the links in the third column.</p>
                                        <div id="warning">
                                            <span style={{ color: "#C11010" }}>Note: </span><span>Don't change or remove any column headers in the spreadsheet. Don't leave any blank rows in your spreadsheet.</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="instruction-pane">
                                        <span id="number">3</span>
                                        <span id="name">
                                            <h3>Generate Your</h3>
                                            <h3>Looking Glass Page</h3>
                                        </span>
                                        <p>Paste the spreadsheet URL to the box below and press the red button. Also, select the language the Looking Glass page should be in. </p>
                                        <div className="input-group input-group-mb-3 round" style={{ marginTop: "20px" }}>
                                            <input type="text" class="form-control round" placeholder="Google Spreadsheet URL" disabled />
                                            <input type="text" class="form-control round" placeholder="Language to be displayed" disabled />
                                            <div class="input-group-append round">
                                                <button class="btn btn-outline-secondary round" style={{ backgroundColor: "#C11010", width: "80px", pointerEvents: "none" }}><i class="bi bi-chevron-right" aria-hidden="true" style={{ color: "white" }}></i></button>
                                            </div>
                                        </div>
                                        <div id="warning">
                                            <span style={{ color: "#C11010" }}>Note: </span><span>To generate a new Looking Glass page, please use a new Google spreadsheet. </span>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="instruction-pane">
                                        <span id="number">4</span>
                                        <span id="name">
                                            <h3>Your Looking Glass</h3>
                                            <h3>Page Is Ready</h3>
                                        </span>
                                        <p style={{ fontFamily: "RedHatDisplay", fontWeight: "400px" }}>Notify your readers! Paste the link to your social media accounts, newsletters or even Telegram channels.</p>
                                        <div className="input-group-2" style={{ height: "max-content" }}>
                                            <div className="input-group-2-icon"><button style={{ pointerEvents: "none" }}><i class="bi bi-files" aria-hidden="true" style={{ fontSize: "25px" }}></i><span> Copy link</span></button></div>
                                            <div className="input-group-2-area"><input type="text" id="link" placeholder="Email Address" value="https://lookingglass.com/news/source=1aK824tSDEO4L8HARACYyPx5c3VLLK2jQ8vd8aPamqNg" flex-wrap="wrap" disabled /></div>
                                        </div>
                                        <p style={{ fontFamily: "RedHatDisplay", fontWeight: "400px" }}>Copy this embed code and paste it on your site where you want to view the Looking Glass (just like a Youtube video).</p>
                                        <div className="input-group-2" style={{ height: "max-content" }}>
                                            <div className="input-group-2-icon"><button style={{ pointerEvents: "none" }}><i class="bi bi-files" aria-hidden="true" style={{ fontSize: "25px" }}></i><span> Copy link</span></button></div>
                                            <div className="input-group-2-area"><input type="text" id="iframe" placeholder="Email Address" value="<iframe src='https://lookingglass.com//news/source=1aK824tSDEO4L8HARACYyPx5c3VLLK2jQ8vd8aPamqNg' width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe>" wrap="hard" disabled /></div>
                                        </div>
                                        <button className="call-to-action"><a href="#top">Create a Looking Glass now!</a></button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>


                <Container>
                    <div className="pane-4" style={{ display: "none" }}>
                        <div className="title-1">
                            <div id="line"></div>
                            <h1>Examples</h1>
                        </div>
                        <div style={{ marginTop: "5%" }}>
                            <Row>
                                <Col>
                                    <iframe title="demovideo1" src="https://www.youtube.com/embed/_Ah6fSDHTq4" id="video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </Col>
                                <Col>
                                    <iframe  title="demovideo2" src="https://www.youtube.com/embed/_Ah6fSDHTq4" id="video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </Col>
                                <Col>
                                    <iframe  title="demovideo3" src="https://www.youtube.com/embed/_Ah6fSDHTq4" id="video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </Col>
                            </Row>
                            <a id="examples"></a>
                            {/* insert title & desc of video */}
                        </div>
                    </div>
                </Container>
                
                <footer>
                    <span>Copyright 2021 &copy; The Looking Glass</span>
                    <span>&emsp; Supported by &emsp; <a href={nml_link} target="_blank"><img src={nml} style={{ width: "auto", height: "20px" }} /></a></span>
                </footer>
            </div>
        </div>
    )
}