class Sidenav extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
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
                <!--<p></p>
                <a href="Spring-Boot.html" target="_self">Spring Boot (Java)</a>  -->
                <div style="margin-top: 50px;"></div>
            </div>
            `;
    }
}

customElements.define('sidenav-component', Sidenav);

