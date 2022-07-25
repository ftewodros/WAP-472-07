const jsonString = `
{
    "window": {
        "title":"Sample Widget",
        "width":500,
        "height":500
    },
    "image":{
        "src":"images/logo.png",
        "coords": [250,150,350,400],
        "alignment": "center"
    },
    "messages":[
        {"text": "Save", "offset":[10, 30]},
        {"text": "Help", "offset":[0, 50]},
        {"text": "Quit", "offset":[30, 10]},
        {"text": "Quit", "offset":[30, 60]}
    ],
    "debug":"true"
}
`;
// console.log(typeof jsonString);
const data = JSON.parse(jsonString);
// console.log(typeof data);
console.log(data.window.title);
console.log(data.image.coords[2]);
console.log(data.messages.length);
console.log(data.messages[data.messages.length - 1].offset[1]);