# Mood Selector Web Component
The Mood Selector web component is a customizable and interactive UI element that allows users to select different moods. Each mood comes with its unique background color, animated GIF, and a corresponding Spotify music track. Web Components are a new Web Technology that will be the future of Web Development. You may not have seen or used this before but I'm sure you will see more of this in the future!

The MoodSelector web component is implemented using vanilla JavaScript and the Shadow DOM for encapsulation. The component allows dynamic updates to moods and observes changes to the 'moods' attribute.
![image](https://github.com/ParulK-bhardwaj/mood-web-component/assets/111934039/38df2e04-0d4b-4e53-ba0b-51841ed5113d)

![127 0 0 1_5500_index2 html](https://github.com/ParulK-bhardwaj/mood-web-component/assets/111934039/a7835657-c43c-4830-8337-6920fae47e20)

![127 0 0 1_5500_index2 html (1)](https://github.com/ParulK-bhardwaj/mood-web-component/assets/111934039/1d679ccd-abe2-4704-aaf4-1577902d153c)

## Getting Started
To use the Mood Selector web component:

- Include the web component script in your HTML file:

```html
<script type="module" src="./mood-selector.js"></script>
```

- Add the <mood-selector> tag to the HTML <body> tag, either with default moods or a custom set of moods:

```html
<!-- Default moods -->
<mood-selector></mood-selector>

<!-- Custom moods -->
<mood-selector moods='{
    "🤔 Confused": {"color": "purple", "gif": "https://media.tenor.com/7fw_-tKvxYUAAAAC/confusing-math.gif", "spotifyUrl": "https://open.spotify.com/embed/track/3Um9toULmYFGCpvaIPFw7l?utm_source=generator"}
}'></mood-selector>
```

- Explore the different moods and their associated features.

## Features
### Interactive Buttons: 
- Click on mood buttons to change the background color, display an animated GIF, and click on play to play a Spotify track.
- Dynamic Moods: Customize the moods by providing a JSON attribute or use the default set provided by the component.

#### Examples
- Default Moods
```
html
<mood-selector></mood-selector>
```

- Custom Moods
```
html
<mood-selector moods='{
    "🤔 Confused": {"color": "purple", "gif": "https://media.tenor.com/7fw_-tKvxYUAAAAC/confusing-math.gif", "spotifyUrl": "https://open.spotify.com/embed/track/3Um9toULmYFGCpvaIPFw7l?utm_source=generator"}
}'></mood-selector>
```

#### How to get `spotifyURL`: 
(Spotify - how to share embed track)[https://developer.spotify.com/documentation/embeds/tutorials/creating-an-embed]
Embeds allow you to include interactive content from Spotify in any compatible website or web application:
1. Navigate to the [Spotify Web Player](https://open.spotify.com/).

2. Search for the content you would like to embed and click on it. You can create an Embed for a podcast, an episode, a track, a playlist, an artist, or an album.

3. Right click or long press on the title of the content. Select the Share option, and then the sub option beginning with the word Embed (For example "Embed episode").
<img width="1119" alt="image" src="https://github.com/ParulK-bhardwaj/mood-web-component/assets/111934039/bf538f34-59ca-4d89-9a1b-96a3bdbdc036">

4. Select show code and copy the src link:

<img width="682" alt="image" src="https://github.com/ParulK-bhardwaj/mood-web-component/assets/111934039/be415941-3967-4089-a44b-2732f950c1c0">

### How to View the Redesigned Project
To view the sample html, follow these steps:

- Clone the repository to your local machine.
- Open the `index.html` or `index2.html` file in your preferred web browser.