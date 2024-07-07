const mainContainer = document.getElementById('mainContainer');
const vw = document.documentElement.clientWidth;

function hamburgerMenu() {
    const bottomNav = document.getElementById('bottomnav');
    var bottomNavLinks = document.getElementById("bottomnav-links");
    const linkCount = bottomNavLinks.childElementCount;
    if (bottomNavLinks.style.display === "block") {
        bottomNavLinks.style.display = "none";
        bottomNav.style.transform = 'none';
    } else {
        bottomNavLinks.style.display = "block";
        const moveY = -48 * linkCount;
        bottomNav.style.transform = 'translate(0px, '+ moveY + 'px)';
    }
}
class Sidenav extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        if (vw >= 1000) {
            this.innerHTML = `
            <div class="sidenav">
                <a class="home" href="index.html" target="_self">Home</a>
                <hr style="margin: 10px;">
                <div style="margin-top: 50px;"></div>
                <a href="Minecraft.html" target="_self">Minecraft Server (AWS)</a>
                <p></p>
                <a href="Discord-Bot.html" target="_self">Discord Bot (Backend)</a>
                <p></p>
                <a href="This-Website.html" target="_self">This Website (Frontend)</a>
                <p></p>
                <a href="Game-Engine.html" target="_self">Game Engine (C++)</a>
                <p></p>
                <a href="Certifications.html" target="_self">Certifications</a>
                <div style="margin-top: 50px;"></div>
            </div>
            `;

            mainContainer.style.marginLeft = '200px';
        }
        else {
            this.innerHTML = `
            <div id="bottomnav" class="bottomnav">
                <a class="home" href="index.html" target="_self">Home</a>
                <div id="bottomnav-links">
                    <a href="Minecraft.html" target="_self">Minecraft Server (AWS)</a>
                    <a href="Discord-Bot.html" target="_self">Discord Bot (Backend)</a>
                    <a href="This-Website.html" target="_self">This Website (Frontend)</a>
                    <a href="Game-Engine.html" target="_self">Game Engine (C++)</a>
                    <a href="Certifications.html" target="_self">Certifications</a>
                </div>
                <a href="javascript:void(0);" class="icon" onClick="hamburgerMenu()">
                    <img src="images/hamburger-menu.png" alt="Hamburger Menu">
                </a>
            </div>
            `;
        }
    }
}

customElements.define('sidenav-component', Sidenav);

