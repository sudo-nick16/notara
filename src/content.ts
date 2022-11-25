console.log("notara");
console.log("notara");

const html = document.getElementsByTagName('html')[0];

const getScreenSize = () => {
    return {
        width: html.clientWidth,
        height: html.clientHeight
    }
}

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

const dragElement = (elmnt: HTMLElement) => {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    const dragMouseDown = (e: MouseEvent) => {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    const elementDrag = (e: MouseEvent) => {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        console.log(pos1, pos2)
        const newTop = elmnt.offsetTop - pos2;
        const newLeft = elmnt.offsetLeft - pos1;
        if(newTop >= 0 && newLeft >= 0 && newTop <= getScreenSize().height-elmnt.clientHeight && newLeft <= getScreenSize().width-elmnt.clientWidth) {
            elmnt.style.top = `${newTop}px`
            elmnt.style.left = `${newLeft}px`
        }
    }

    const closeDragElement = () => {
        document.onmouseup = null;
        document.onmousemove = null;
    }

    elmnt.onmousedown = dragMouseDown;
}

dragElement(mainContainer);
pageParent?.appendChild(mainContainer);
