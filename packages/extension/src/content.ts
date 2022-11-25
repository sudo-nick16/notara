import {dragElement} from './dragElement.js'

export const main = () => {
    console.log("notara");
    const pageParent = document.querySelector("body");

    // main div element
    const mainFrame = document.createElement("iframe");
    mainFrame.src = chrome.runtime.getURL('popup/index.html');
    Object.assign(mainFrame.style, {
        all: "unset",
        display: "flex",
        position: "absolute",
        top: "0px",
        right: "0px",
        width: "auto",
        height: "auto",
        fontSize: "16px",
    })

    const mainFrameWrapper = document.createElement("div");
    Object.assign(mainFrameWrapper.style, {
        all: "unset",
        position: "relative",
        margin: "5px",
    })
    mainFrameWrapper.appendChild(mainFrame);

    // the display button 
    const mainButton = document.createElement("button");
    const icon = document.createElement("img");
    icon.src = chrome.runtime.getURL('assets/icon.png');
    Object.assign(icon.style, {
        all: "unset",
        width: "100%",
        height: "100%",
    });
    Object.assign(mainButton.style, {
        all: "unset",
        outline: "none",
        border: "none",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        color: "black",
        fontSize: "16px",
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
    })
    mainButton.appendChild(icon);
    mainButton.onclick = () => {
        mainFrame.style.display = mainFrame.style.display === "flex" ? "none" : "flex";
    }

    // the display thing
    const mainContainer = document.createElement("div");
    mainContainer.appendChild(mainButton)
    mainContainer.appendChild(mainFrameWrapper)
    mainContainer.draggable = true;
    Object.assign(mainContainer.style, {
        position: "fixed",
        flexDirection: "column",
        top: "100px",
        right: "0px",
        width: "auto",
        zIndex: "99999",
        display: "flex",
        color: "white",
        padding: "3px",
        cursor: "pointer",
    })

    dragElement(mainContainer);
    pageParent?.appendChild(mainContainer);

}

