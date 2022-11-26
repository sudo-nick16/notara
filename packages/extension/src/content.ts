import {dragElement} from './dragElement.js'
import Logger from './logger.js';
import {setStyle} from './helpers.js';

export const main = () => {
    const logger = new Logger()

    const pageParent = document.querySelector("body");
    
    // main div element
    const mainFrame = document.createElement("iframe");
    mainFrame.id = "notara-main-frame";
    mainFrame.name = "notara";
    mainFrame.src = chrome.runtime.getURL('popup/index.html');
    setStyle(mainFrame, {
        all: "initial;",
        position: "absolute",
        display: "block;",
        top: "calc(100% + 5px)",
        right: "0px",
        width: "auto",
        height: "auto",
        fontSize: "16px",
        borderRadius: "15px",
    })

    const mainButton = document.createElement("button");
    const icon = document.createElement("img");
    icon.src = chrome.runtime.getURL('assets/icon.png');
    setStyle(icon, {
        all: "unset;",
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
    });
    setStyle(mainButton, {
        all: "unset;",
        outline: "none",
        border: "none",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        padding: "0px",
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
    })
    mainButton.appendChild(icon);
    mainButton.onclick = () => {
        mainFrame.style.display = mainFrame.style.display === "block" ? "none" : "block";
    }

    // the display thing
    const mainContainer = document.createElement("div");
    mainContainer.appendChild(mainButton)
    mainContainer.appendChild(mainFrame)
    mainContainer.draggable = true;
    setStyle(mainContainer, {
        all: "unset;",
        position: "fixed",
        flexDirection: "column",
        top: "100px",
        right: "0px",
        width: "auto",
        zIndex: "99999",
        display: "flex",
        cursor: "pointer",
    })

    dragElement(mainContainer);
    pageParent?.appendChild(mainContainer);

    logger.log('Notara initialized')
}

