interface AppState {
    currentStyle: string;
    styles: { [key: string]: string };
}


const state: AppState = {
    currentStyle: "css/page1.css", 
    styles: {
        "Styl 1": "css/page1.css",
        "Styl 2": "css/page2.css",
        "Styl 3": "css/page3.css",
       
    },
};


const updateStyle = (styleName: string) => {
    const styleLink = document.getElementById("theme-style") as HTMLLinkElement;
    if (styleLink) {
        styleLink.href = state.styles[styleName]; 
        state.currentStyle = state.styles[styleName];
    }
};


const generateStyleLinks = () => {
    const container = document.getElementById("style-links-container");
    if (container) {
        container.innerHTML = ""; 
        Object.keys(state.styles).forEach((styleName) => {
            const link = document.createElement("a");
            link.textContent = styleName;
            link.href = "#";
            link.onclick = (e) => {
                e.preventDefault(); 
                updateStyle(styleName);
            };
            container.appendChild(link); 
        });
    }
};


document.addEventListener("DOMContentLoaded", () => {
    generateStyleLinks();
});
