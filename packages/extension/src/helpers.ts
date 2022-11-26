export const getPropertyName = (property: string): string => {
    let p = "";
    for(let i = 0; i < property.length; i++) {
        if(property[i] === property[i].toUpperCase()) {
            p += `-${property[i].toLowerCase()}`
        }else {
            p += property[i]
        }
    }
    return p;
}

export const setStyle = (element: HTMLElement, obj: {[key: string]: string}) => {
    let css = element.style.cssText;
    for (const key in obj) {
        let style = `${getPropertyName(key)}: ${obj[key]} ${obj[key].endsWith(";") ? "" : "!important;"}`;
        css += style;
    }
    element.style.cssText = css;
}
