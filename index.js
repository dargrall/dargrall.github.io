let name, names, greeting, activity, date, time, place, text;

name = document.getElementById("floatingOwnName");
names = document.getElementById("floatingOtherNames");
greeting = document.getElementById("floatingGreeting");
activity = document.getElementById("floatingActivity");
date = document.getElementById("date");
time = document.getElementById("time");
place = document.getElementById("floatingPlace");

text = document.getElementById("floatingGeneratedText");

function refreshText() {
    text.value = `${greeting.value} ${names.value}, it's me ${name.value}. Let's do something together:` +
        ` When? ${date.value}, ${time.value}. Where? ${place.value}. What? ${activity.value}.`;
}
function copyToClipboard() {
    text.select();
    refreshText();
    document.execCommand("copy");
}


addEventListener("change", (ev) => refreshText());addEventListener("change", (ev) => refreshText());