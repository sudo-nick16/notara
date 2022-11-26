import {dragElement} from './dragElement.js'
import Logger from './logger.js';

export const main = () => {
    const logger = new Logger()

    const pageParent = document.querySelector("body");
    
    const mainFrame = document.createElement("iframe");
    mainFrame.id = "notara-main-frame";
    mainFrame.name = "notara";
    mainFrame.src = chrome.runtime.getURL('popup/index.html');

    const mainButton = document.createElement("button");
    mainButton.id = "notara-button";
    const icon = document.createElement("img");
    icon.src = chrome.runtime.getURL('assets/icon.png');

    mainButton.appendChild(icon);
    mainButton.onclick = () => {
        mainFrame.style.display = mainFrame.style.display === "block" ? "none" : "block";
    }

    const mainContainer = document.createElement("div");
    mainContainer.id = "notara-container";
    mainContainer.appendChild(mainButton)
    mainContainer.appendChild(mainFrame)
    mainContainer.draggable = true;

    dragElement(mainContainer);
    pageParent?.appendChild(mainContainer);

    logger.log('Notara initialized')
}

