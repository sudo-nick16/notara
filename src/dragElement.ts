const html = document.getElementsByTagName('html')[0];

const getScreenSize = () => {
    return {
        width: html.clientWidth,
        height: html.clientHeight
    }
}

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

export default dragElement;
