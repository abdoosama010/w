function getThumbnail(){

    let url = document.getElementById("videoUrl").value;

    let videoId = "";

    if(url.includes("youtube.com/watch?v=")){
        videoId = url.split("v=")[1].split("&")[0];
    }
    else if(url.includes("youtu.be/")){
        videoId = url.split("youtu.be/")[1];
    }

    if(videoId){

        let thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

        document.getElementById("result").innerHTML = `
            <img src="${thumbnail}">
            <br><br>
            <a href="${thumbnail}" target="_blank">Open Image</a>
        `;
    }
    else{
        alert("Invalid URL");
    }
}