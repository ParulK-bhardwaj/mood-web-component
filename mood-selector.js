class MoodSelector extends HTMLElement {
    constructor() {
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open' });

        this._moods = this.getMoodsFromAttributes();
    }

    getMoodsFromAttributes() {
        const moodsAttribute = this.getAttribute('moods');
        return moodsAttribute ? JSON.parse(moodsAttribute) : this.getDefaultMoods();
    }

    getDefaultMoods() {
        return {
            "😀 Happy": { 
                color: "yellow",
                gif: "https://media0.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif?cid=ecf05e47yelt633e0xiahuifmhnaxxkcvh0s1xwlkh587nob&ep=v1_gifs_related&rid=giphy.gif&ct=g", 
                spotifyUrl: "https://open.spotify.com/embed/track/60nZcImufyMA1MKQY3dcCH?utm_source=generator"
            },
            "😞 Sad": { 
                color: "blue", 
                gif: "https://media.tenor.com/EjpqGIPsBNkAAAAC/crying-ike-broflovski.gif", 
                spotifyUrl: "https://open.spotify.com/embed/track/4pILIJyZxIBVC9baYdi08f?utm_source=generator"
            },
            "🤩 Excited": { 
                color: "orange", 
                gif: "https://media.tenor.com/MlShu_sXSaoAAAAC/office-space.gif", 
                spotifyUrl: "https://open.spotify.com/embed/track/32OlwWuMpZ6b0aN2RZOeMS?utm_source=generator"
            },
            "😌 Relaxed": { 
                color: "green", 
                gif: "https://media.tenor.com/azHLLJ6Ox8EAAAAC/paul-rudd-clueless.gif", 
                spotifyUrl: "https://open.spotify.com/embed/track/2m8MwTvNHBYIqieOoQeyuY?utm_source=generator"
            }
        };
    }

    connectedCallback() {
        this._shadowRoot.innerHTML = `
            <style>
                .mood-container {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                }
                .mood {
                    cursor: pointer;
                    font-size: 24px;
                    padding: 5px;
                    transition: font-size 0.3s;
                    border-radius: 0.5em;
                    border: solid 0.2rem blue;
                    margin: 1em;
                    background-color: blue;
                    color: white;
                    box-shadow: 0 4px 8px black;
                }
                .mood:hover {
                    font-size: 30px;
                }
                #mood-background {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: -1;
                    opacity: 0.8;   
                }
                #mood-music-container {
                    display: flex;
                    justify-content: center;
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                }
            </style>
            <div class="mood-container">
                ${Object.keys(this._moods)
                    .map(mood => `<button class="mood">${mood}</button>`)
                    .join("")
                }
            </div>
            <img id="mood-background" src="https://media1.giphy.com/media/MWP0m6OswNIbl68Qbe/giphy.gif?cid=ecf05e47f48ug6tach975g4n4fpvk5j7c4jahwerrp1k6pbc&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Mood background">
            <div id="mood-music-container">
                <iframe id="mood-music" style="border-radius:12px" width="80%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
        `;

        this._shadowRoot.querySelectorAll('.mood').forEach(moodElement => {
            moodElement.addEventListener('click', () => this.selectMood(moodElement.textContent));
        });
    }

    // Allow dynamic update of moods
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'moods' && oldValue !== newValue) {
            this._moods = JSON.parse(newValue);
        };
    }

    // Observe changes to the 'moods' attribute
    static get observedAttributes() {
        return ['moods'];
    }

    selectMood(mood) {
        const { color, gif, spotifyUrl } = this._moods[mood];
        document.body.style.backgroundColor = color;
        this._shadowRoot.querySelector('#mood-background').src = gif;
        this._shadowRoot.querySelector('#mood-music').src = spotifyUrl;
    }
}

customElements.define('mood-selector', MoodSelector)