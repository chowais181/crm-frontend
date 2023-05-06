import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "./Reschedule.css";
import "../../index.css";
import SaveIcon from "../../assets/img/save-icon.webp";
import EditIcon from "../../assets/img/edit-icon.webp";
import { Col, Container, Form, Row, Toast, Button } from "react-bootstrap";
import "bootstrap/dist/js/bootstrap.min.js";
import Scriptedit from "./Scriptedit/Scriptedit";
import CallOptions from "./Chat/CallOptions";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const list = [
  {
    question: "Asking for contact details",
    answers: [
      "Hi, “customer name”. May I request you to share your contact details?",
      "Hello, I will need your contact details to update the further process. Kindly provide your phone number, email etc.",
    ],
  },
  {
    question: "Asking for what product or service he is looking for",
    answers: [
      "Hi, “customer name”. Would you like to know more about the subscriptions for “product or service name”? If you want I can detail you",
      "Hi, I can explain you the installation steps of “product name”. Shall I go ahead?",
    ],
  },
  {
    question: "Asking what brings him here",
    answers: [
      "Hello! “customer name”, What brings you to our website? What are you looking for? It will help us to serve you better",
      "Good morning “customer name”, What brings you to our site? What was the source you came to know about it?",
    ],
  },
  {
    question: "Asking what brings him here",
    answers: [
      "Hello! “customer name”, What brings you to our website? What are you looking for? It will help us to serve you better",
      "Good morning “customer name”, What brings you to our site? What was the source you came to know about it?",
    ],
  },
];

const Compo = ({ higlight, value, selectedOption, index }) => {
  // console.log("f", value.answers)
  return (
    <>
      {selectedOption == index + 2 && (
        <div className="que-div" key={Math.random()}>
          <div className="question-icon">
            <p className="que-title">{value.question}</p>
          </div>
          {value.answers.map((e) => (
            <p className="que-desc" key={Math.random()}>
              {getHighlightedText(e, higlight)}
            </p>
          ))}
        </div>
      )}
      {selectedOption == 1 && (
        <div className="que-div" key={Math.random()}>
          <div className="question-icon">
            <p className="que-title">{value.question}</p>
          </div>
          {value.answers.map((e) => (
            <p className="que-desc" key={Math.random()}>
              {getHighlightedText(e, higlight)}
            </p>
          ))}
        </div>
      )}
    </>
  );
};

function getHighlightedText(text, higlight) {
  var parts = text.split(new RegExp(`(${higlight})`, "gi"));

  return parts.map((part, index) => (
    <React.Fragment key={Math.random()}>
      {part.toLowerCase() === higlight.toLowerCase() ? (
        <b style={{ backgroundColor: "#d8f2e6", fontWeight: "normal" }}>
          {part}
        </b>
      ) : (
        part
      )}
    </React.Fragment>
  ));
}

const Reschedule = () => {
  // Tool tip with user name
  const renderTooltip = (props) => (
    <Tooltip id="icon-tooltip" {...props}>
      Date: 03/05/2023 <br /> Time: 05:00 pm
    </Tooltip>
  );
  // To switch the list shown in main card
  const [dragStart, setDragStart] = useState(null);
  const [dragOver, setDragOver] = useState(null);

  const [list, setList] = useState([
    "Item 0",
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
  ]);

  console.log(list);

  const handleDragStart = (event, index) => {
    setDragStart(index);
  };
  const handleDragEnter = (event, index) => {
    event.preventDefault();
    if (index !== dragStart) {
      setDragOver(index);
    }
  };

  const handleDrop = (event) => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragStart];
    const dropItemContent = copyListItems[dragOver];
    copyListItems[dragStart] = dropItemContent;
    copyListItems[dragOver] = dragItemContent;
    setDragStart(null);
    setDragOver(null);
    setList(copyListItems);
  };

  // ------------------------------------
  const [show, setShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState(1);
  const [selectedText, setselectedText] = useState("1");
  const [boxText, setboxText] = useState("busy/no answer");
  const [buttonText, setbuttonText] = useState("");
  const [inperson, setPayment] = useState("credit");
  const [actionType, setActionType] = useState(false);
  const [text, setText] = useState("");
  const [question, setQuestion] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
  });

  const [slider, setSlider] = useState(false);
  const [imageSlider, setimageSlider] = useState(false);
  const [editButton, seteditSlider] = useState(false);
  const [isSave, setisSave] = useState(false);

  const handleronchange = (event) => {
    setPayment(event.target.value);
  };

  const handlerChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const [open, setOpen] = useState(false);
  const selectChannel = (e, text) => {
    setboxText(text);
    setselectedText(e);
  };
  const buttonActive = (e) => {
    setbuttonText(e.target.innerHTML);
  };
  const handleTextChange = (e) => {
    // console.log(e.target.value);
    setboxText(e.target.value);
  };

  const handlerChnage = (selectedquestion, action) => {
    setActionType(!actionType);
  };

  const handlerInputChange = (e, selectedOption) => {
    setQuestion({
      [e.target.name]: e.target.value,
    });
  };
  // console.log(selectedOption)
  const handlerLeftimage = () => {
    setimageSlider(!imageSlider);
  };
  const editButtonClick = () => {
    seteditSlider(!editButton);
    setisSave(true);
  };
  const saveButtonClick = () => {
    //ce-toolbar--opened
    var data = document.getElementsByClassName("ce-toolbar");
    data[0].classList.remove("ce-toolbar--opened");

    seteditSlider(!editButton);
    setisSave(false);
  };

  const handlerLeftclick = () => {
    setSlider(!slider);
  };
  const inputChnageText = () => {
    document.getElementById("inputchange").type = "button";
  };
  const [editing0, setEditing0] = useState(false);
  const [editing1, setEditing1] = useState(false);
  const [editing2, setEditing2] = useState(false);
  const [editing3, setEditing3] = useState(false);
  const [editing4, setEditing4] = useState(false);

  const [value, setValueText] = useState(
    "Hello, I will need your contact details to update the further process. Kindly provide your phone number, email etc."
  );
  const [answers1, setAnswers1] = useState(
    "Hello, I will need your contact details to update the further process. Kindly provide your phone number, email etc."
  );
  const [answers2, setAnswers2] = useState(
    "Hello, I will need your contact details to update the further process. Kindly provide your phone number, email etc."
  );
  const [answers3, setAnswers3] = useState(
    "Hello, I will need your contact details to update the further process. Kindly provide your phone number, email etc."
  );
  const [answers4, setAnswers4] = useState(
    "Hello, Kindly provide your phone number, email etc."
  );
  const [editingtext, setEditingText] = useState(false);

  const handlerchangetext = (e, i) => {
    if (i == 0) {
      setValueText(e.target.value);
    }
    if (i == 1) {
      setAnswers1(e.target.value);
    }
    if (i == 2) {
      setAnswers2(e.target.value);
    }
    if (i == 3) {
      setAnswers3(e.target.value);
    }
    if (i == 4) {
      setAnswers4(e.target.value);
    }
  };

  const handlerEdit0 = (e) => {
    setEditing0(true);
    setEditingText(!editingtext);
  };
  const handlerSave0 = (e) => {
    setEditing0(false);
    var selectedText = window.getSelection().toString();
    // console.log(selectedText)
    setEditingText(!editingtext);

    setTimeout(() => {
      var data = document.getElementById("A0");
      var allText = data.innerHTML;
      allText = allText.replace(
        selectedText,
        "<span class='highlight'>" + selectedText + "</span>"
      );
      data.innerHTML = allText;
    }, 100);
  };
  const handlerEdit1 = (e) => {
    setEditing1(true);
    setEditingText(!editingtext);
  };
  const handlerSave1 = (e) => {
    setEditing1(false);
    var selectedText = window.getSelection().toString();
    // console.log(selectedText)
    setEditingText(!editingtext);

    setTimeout(() => {
      var data = document.getElementById("A1");
      var allText = data.innerHTML;
      allText = allText.replace(
        selectedText,
        "<span class='highlight'>" + selectedText + "</span>"
      );
      data.innerHTML = allText;
    }, 100);
  };
  const handlerEdit2 = (e) => {
    setEditing2(true);
    setEditingText(!editingtext);
  };
  const handlerSave2 = (e) => {
    setEditing2(false);
    var selectedText = window.getSelection().toString();
    // console.log(selectedText)
    setEditingText(!editingtext);

    setTimeout(() => {
      var data = document.getElementById("A2");
      var allText = data.innerHTML;
      allText = allText.replace(
        selectedText,
        "<span class='highlight'>" + selectedText + "</span>"
      );
      data.innerHTML = allText;
    }, 100);
  };
  const handlerEdit3 = (e) => {
    setEditing3(true);
    setEditingText(!editingtext);
  };
  const handlerSave3 = (e) => {
    setEditing3(false);
    var selectedText = window.getSelection().toString();
    // console.log(selectedText)
    setEditingText(!editingtext);

    setTimeout(() => {
      var data = document.getElementById("A3");
      var allText = data.innerHTML;
      allText = allText.replace(
        selectedText,
        "<span class='highlight'>" + selectedText + "</span>"
      );
      data.innerHTML = allText;
    }, 100);
  };
  const handlerEdit4 = (e) => {
    setEditing4(true);
    setEditingText(!editingtext);
  };
  const handlerSave4 = (e) => {
    setEditing4(false);
    var selectedText = window.getSelection().toString();
    // console.log(selectedText)
    setEditingText(!editingtext);

    setTimeout(() => {
      var data = document.getElementById("A4");
      var allText = data.innerHTML;
      allText = allText.replace(
        selectedText,
        "<span class='highlight'>" + selectedText + "</span>"
      );
      data.innerHTML = allText;
    }, 100);
  };

  const handleronSelect = (e) => {
    let SelectValue = window.getSelection().toString();
    // console.log(SelectValue);
    doThing(".test", SelectValue);
  };
  const doThing = (selector, str) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.innerHTML = str.replace(/(\w+)/g, `<span>$1</span>`);
    });
  };

  // console.log(slider)
  const scrollVideo = () => {
    // console.log('tetetw')
    var v = document.querySelectorAll(".title-text");
    var v1 = document.querySelectorAll(".appoinment-tabdiv");
    var x = v[0].getBoundingClientRect().top;
    var x2 = v1[0].getBoundingClientRect().top;
    if (x < 100) {
      var person = document.getElementsByClassName("user-name");
      person[0].classList.add("person-block");
    }
    if (x2 > -100) {
      var person = document.getElementsByClassName("user-name");
      person[0].classList.remove("person-block");
    }
  };
  window.addEventListener("scroll", scrollVideo);

  return (
    <div>
      <div className="title-text">
        <Container className="header-flex">
          <h1>{""}</h1>
          <div className="appoinment-div appoinment-deson">
            <div
              className={`expand-image ${
                imageSlider == true ? "appoinment-show" : "appoinment-hide"
              } `}
            >
              <div className="image-arrow-right" onClick={handlerLeftimage}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="14px"
                  viewBox="5 6 14 14"
                  width="10px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
                </svg>
              </div>
              <div className="image-arrow-left" onClick={handlerLeftimage}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="14px"
                  viewBox="5 6 14 14"
                  width="10px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </div>
              <div
                className={`appoinment-text ${
                  imageSlider == true ? "image-menu-show" : "image-menu-hide"
                } `}
              >
                <div className="img-tab-menu">
                  <div className="total-call">
                    <p>Appoitment Set </p>
                    <span>- 3</span>
                  </div>
                  <div className="total-call">
                    <p>Total Calls </p>
                    <span>- 20</span>
                  </div>
                  <div className="total-call">
                    <p>Follow Up Set</p>
                    <span>- 30 min</span>
                  </div>
                  <div className="total-call">
                    <p>Talk Time</p>
                    <span>- 30 min</span>
                  </div>
                  <div className="total-call">
                    <p>Talk Time</p>
                    <span>- 20 min</span>
                  </div>
                  <div className="total-call">
                    <p>Talk Time</p>
                    <span>- 10 min</span>
                  </div>
                  <div className="total-call">
                    <p>Talk Time</p>
                    <span>- 5 min</span>
                  </div>
                  <div className="total-call">
                    <p>Talk Time</p>
                    <span>- 54 min</span>
                  </div>
                  <div className="total-call">
                    <p>Talk Time</p>
                    <span>- 4 min</span>
                  </div>
                  <div className="total-call">
                    <p>Qualified</p>
                    <span>- 9 min</span>
                  </div>
                </div>
              </div>
              <div className="appoinment-img">
                <img src="https://i.pravatar.cc/1000" alt="Logo" />
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* <Container className='person-name'>
                <h1>William James</h1>
            </Container> */}
      <Container>
        <div className="main-div">
          <div className="background-div">
            <div className="header-title">
              <div className="arrow-left" onClick={handlerLeftclick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="14px"
                  viewBox="4 6 14 14"
                  width="14px"
                  fill="#ffffff"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
                </svg>
              </div>
              <div className="name-title">
                <h1 className="user-name">
                  <span className="user-name-icon">
                    <Icon
                      icon="material-symbols:edit-note-rounded"
                      color="blue"
                      width="35"
                      height="35"
                    />
                  </span>
                  <span>William James</span>
                  <span className="user-name-icon">
                    <OverlayTrigger
                      placement="bottom"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Icon
                        icon="icon-park:appointment"
                        color="black"
                        width="35"
                        height="35"
                      />
                    </OverlayTrigger>
                  </span>
                </h1>
                <p className="address">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#000000"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </span>
                  4 Brockham St,
                  <br />
                  London SE1 4HX,
                  <br />
                  UK
                </p>
                <p className="contact-number">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#000000"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z" />
                    </svg>
                  </span>
                  443-800-1300
                </p>
                <p className="email-text">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#000000"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
                    </svg>
                  </span>
                  james.william@gmail.com
                </p>
              </div>

              <div className="name-title appoinment-tabdiv">
                <h1 className="text-title-h1">
                  Stage
                  <br /> COLD IN
                </h1>

                <div className="call-options">
                  <CallOptions />
                </div>
              </div>

              <div
                className={`tab-menu ${
                  slider == true ? "tab-menu-show" : "tab-menu-hide"
                }`}
              >
                <div className="expand-tab">
                  <div className="arrow-right" onClick={handlerLeftclick}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="14px"
                      viewBox="6 6 14 14"
                      width="14px"
                      fill="#ffffff"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                    </svg>
                  </div>
                  <div className="tab-menu-all">
                    {list &&
                      list.map((item, index) => (
                        <div
                          className="tabmenu-list"
                          key={index}
                          draggable
                          onDragStart={(e) => handleDragStart(e, index)}
                          onDragEnter={(e) => handleDragEnter(e, index)}
                          onDragEnd={handleDrop}
                        >
                          <p>Cold In</p>
                          <p>{item}</p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="background-div">
            <div className="text-area">
              <div className="tab-container">
                <div className="text-box">
                  <div className="select-edit">
                    <>
                      <Form.Select id="select-box" onChange={handlerChange}>
                        <option value="1">Cold Script</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                        <option value="4">Option 4</option>
                        <option value="5">Option 5</option>
                      </Form.Select>
                    </>
                    <div>
                      {!isSave ? (
                        <button
                          onClick={editButtonClick}
                          className="button-edittext"
                        >
                          <img src={EditIcon} alt="Edit Icon" />
                        </button>
                      ) : (
                        <button
                          onClick={() => saveButtonClick()}
                          className="button-edittext"
                        >
                          <img src={SaveIcon} alt="Save Icon" />
                        </button>
                      )}
                    </div>
                  </div>
                  <div
                    className={`${
                      editButton == true ? "transback-bottom" : "transback-top"
                    } `}
                  >
                    <Scriptedit></Scriptedit>
                  </div>
                  {actionType && (
                    <div className="input-address">
                      <input
                        type="text"
                        name="question3"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="button-area">
              <div className="feedback-div">
                <h1 className="feedback-title">FEEDBACK</h1>
              </div>
              <div className="button-maindiv">
                <button
                  className={
                    selectedText === "1" ? "active button-more" : "button-more"
                  }
                  onClick={(e) => selectChannel("1", "busy/no answer")}
                >
                  busy/no answer
                </button>
                <button
                  className={
                    selectedText === "2" ? "active button-more" : "button-more"
                  }
                  onClick={(e) => selectChannel("2", "General Follow up")}
                >
                  General Follow up
                </button>
                <button
                  className={
                    selectedText === "3" ? "active button-more" : "button-more"
                  }
                  onClick={(e) => selectChannel("3", "Specified Follow up")}
                >
                  Specified Follow up
                </button>
                <button
                  className={
                    selectedText === "4" ? "active button-more" : "button-more"
                  }
                  onClick={(e) => selectChannel("4", "Unqualified")}
                >
                  Unqualified
                </button>
                <button
                  className={
                    selectedText === "5" ? "active button-more" : "button-more"
                  }
                  onClick={(e) => selectChannel("5", "qualified")}
                >
                  qualified
                </button>
                <button
                  className={
                    selectedText === "6" ? "active button-more" : "button-more"
                  }
                  onClick={(e) => selectChannel("6", "Unresponsive")}
                >
                  Unresponsive
                </button>
                <button
                  className={
                    selectedText === "7" ? "active button-more" : "button-more"
                  }
                  onClick={(e) => selectChannel("7", "send to psuedo")}
                >
                  send to psuedo
                </button>
                <button
                  className={
                    selectedText === "8" ? "active button-more" : "button-more"
                  }
                  onClick={(e) => selectChannel("8", "send to vivint")}
                >
                  send to vivint
                </button>
                <button
                  className={
                    selectedText === "9" ? "active button-more" : "button-more"
                  }
                  onClick={(e) => selectChannel("9", "send to cold")}
                >
                  send to cold
                </button>
              </div>
              {selectedText === "5" && (
                <div className="qualified-div">
                  <div className="radio-maindiv">
                    <div className="input-person">
                      <input
                        type="radio"
                        id="person"
                        name="InPerson"
                        value="person"
                        checked={inperson === "person"}
                        onChange={handleronchange}
                        required
                      />
                      <label htmlFor="person">In Person</label>
                      <br />
                    </div>
                    <div className="input-virtual">
                      <input
                        type="radio"
                        id="virtual"
                        name="InPerson"
                        value="virtual"
                        checked={inperson === "virtual"}
                        onChange={handleronchange}
                        required
                      />
                      <label htmlFor="virtual">Virtual</label>
                      <br />
                    </div>
                  </div>
                  <div className="input-address">
                    <label>Address</label>
                    <input type="text" />
                  </div>
                </div>
              )}
              <div className="select-time">
                {selectedText === "2" && (
                  <div className="select-button">
                    <p>Select Time</p>
                    <button
                      className={
                        buttonText === "1 Week"
                          ? "active select-btn"
                          : "select-btn"
                      }
                      onClick={(e) => buttonActive(e)}
                    >
                      1 Week
                    </button>
                    <button
                      className={
                        buttonText === "2 Weeks"
                          ? "active select-btn"
                          : "select-btn"
                      }
                      onClick={(e) => buttonActive(e)}
                    >
                      2 Weeks
                    </button>
                    <button
                      className={
                        buttonText === "3 Weeks"
                          ? "active select-btn"
                          : "select-btn"
                      }
                      onClick={(e) => buttonActive(e)}
                    >
                      3 Weeks
                    </button>
                    <button
                      className={
                        buttonText === "1 Month"
                          ? "active select-btn"
                          : "select-btn"
                      }
                      onClick={(e) => buttonActive(e)}
                    >
                      1 Month
                    </button>
                    <button
                      className={
                        buttonText === "2 Months"
                          ? "active select-btn"
                          : "select-btn"
                      }
                      onClick={(e) => buttonActive(e)}
                    >
                      2 Months
                    </button>
                    <button
                      className={
                        buttonText === "3 Months"
                          ? "active select-btn"
                          : "select-btn"
                      }
                      onClick={(e) => buttonActive(e)}
                    >
                      3 Months
                    </button>
                    <button
                      className={
                        buttonText === "3.5 Months"
                          ? "active select-btn"
                          : "select-btn"
                      }
                      onClick={(e) => buttonActive(e)}
                    >
                      3.5 Months
                    </button>
                    <button
                      className={
                        buttonText === "4 Months"
                          ? "active select-btn"
                          : "select-btn"
                      }
                      onClick={(e) => buttonActive(e)}
                    >
                      4 Months
                    </button>
                    <button
                      className={
                        buttonText === "4.5 Months"
                          ? "active select-btn"
                          : "select-btn"
                      }
                      onClick={(e) => buttonActive(e)}
                    >
                      4.5 Months
                    </button>
                    <button
                      className={
                        buttonText === "5 Months"
                          ? "active select-btn"
                          : "select-btn"
                      }
                      onClick={(e) => buttonActive(e)}
                    >
                      5 Months
                    </button>
                    <button
                      className={
                        buttonText === "5.5 Months"
                          ? "active select-btn"
                          : "select-btn"
                      }
                      onClick={(e) => buttonActive(e)}
                    >
                      5.5 Months
                    </button>
                    <button
                      className={
                        buttonText === "6 Months"
                          ? "active select-btn"
                          : "select-btn"
                      }
                      onClick={(e) => buttonActive(e)}
                    >
                      6 Months
                    </button>
                    <button
                      className={
                        buttonText === "6.5 Months"
                          ? "active select-btn"
                          : "select-btn"
                      }
                      onClick={(e) => buttonActive(e)}
                    >
                      6.5 Months
                    </button>
                    <button
                      className={
                        buttonText === "1 Year"
                          ? "active select-btn"
                          : "select-btn"
                      }
                      onClick={(e) => buttonActive(e)}
                    >
                      1 Year
                    </button>
                    <button
                      className={
                        buttonText === "2 Year"
                          ? "active select-btn"
                          : "select-btn"
                      }
                      onClick={(e) => buttonActive(e)}
                    >
                      2 Year
                    </button>
                    <button
                      className={
                        buttonText === "3 Year"
                          ? "active select-btn"
                          : "select-btn"
                      }
                      onClick={(e) => buttonActive(e)}
                    >
                      3 Year
                    </button>
                  </div>
                )}
                {selectedText === "3" && (
                  <div className="select-date-time">
                    <p>Select Date</p>
                    <input
                      type="date"
                      min={new Date().toISOString().slice(0, 10)}
                      className="date-time-btn"
                      value={new Date().toISOString().slice(0, 10)}
                    />
                    <p className="mt-3">Select Time</p>
                    <input type="time" className="date-time-btn" />
                  </div>
                )}
                {selectedText === "4" && (
                  <div className="select-date-time">
                    <button
                      className={
                        buttonText === "Credit"
                          ? "active select-btn"
                          : "select-btn"
                      }
                      onClick={(e) => buttonActive(e)}
                    >
                      Credit
                    </button>
                    <button
                      className={
                        buttonText === "Low Income"
                          ? "active select-btn"
                          : "select-btn"
                      }
                      onClick={(e) => buttonActive(e)}
                    >
                      Low Income
                    </button>
                    <button
                      className={
                        buttonText === "Has Solar"
                          ? "active select-btn"
                          : "select-btn"
                      }
                      onClick={(e) => buttonActive(e)}
                    >
                      Has Solar
                    </button>
                    <button
                      className={
                        buttonText === "Not Interested"
                          ? "active select-btn"
                          : "select-btn"
                      }
                      onClick={(e) => buttonActive(e)}
                    >
                      Not Interested
                    </button>
                    <button
                      className={
                        buttonText === "Not Owner"
                          ? "active select-btn"
                          : "select-btn"
                      }
                      onClick={(e) => buttonActive(e)}
                    >
                      Not Owner
                    </button>
                  </div>
                )}
                {selectedText === "5" && (
                  <div className="select-date-time">
                    <p>Select Date</p>
                    <input
                      type="date"
                      min={new Date().toISOString().slice(0, 10)}
                      className="date-time-btn"
                      value={new Date().toISOString().slice(0, 10)}
                    />
                    <p className="mt-3">Select Time</p>
                    <input type="time" className="date-time-btn" />
                  </div>
                )}
                <div className="select-textbox">
                  <textarea
                    type="text"
                    className="textarea"
                    rows={10}
                    value={boxText}
                    onChange={handleTextChange}
                  />
                  <button
                    className="submit-button"
                    onClick={() => setShow(true)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Row className="popup-success">
        <Col>
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            position={"bottom-end"}
            autohide
            className="Primary"
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto sucessful">Successful</strong>
              {/* <small>11 mins ago</small> */}
            </Toast.Header>
            <Toast.Body className="tost-body">Successful submit!</Toast.Body>
          </Toast>
        </Col>
      </Row>
    </div>
  );
};

export default Reschedule;
