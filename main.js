Webcam.set({
height:300,
width:340,
crop_width:340,
crop_height:250,
image_format:"png",
png_quality:100
});

webcam = document.getElementById("camera");

Webcam.attach(webcam);

console.log("ml5 version"+ ml5.version);

function click_image(){
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML = "<img src='"+data_uri+"'id='captured_image'>"
    })
}
