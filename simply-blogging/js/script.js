var blogData=[];

function storeInLocal() {
    localStorage.setItem("blogData",JSON.stringify(blogData));
    console.log("Saved!")
    //sessionStorage.setItem("blogData",JSON.stringify(blogData));
 }

function addBlog(){
    var formData = readData();
    resetForm();
    blogData.push(formData);
    console.log(blogData);
    storeInLocal();
    displayBlog();
  
}

function readData() {
    var formData={};
    formData.title = document.getElementById("title").value;
    formData.desc = document.getElementById("desc").value;
    // var formImage = document.getElementById("img").files[0].name;
    // var imgData = getBase64Image(formImage);
    // console.log("imgData");
    // console.log(imgData);
    // formData.img = imgData;
    formData.img= document.getElementById("img").files[0].name;
    return formData;
}

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

function resetForm() {
    document.getElementById("title").value="";
    document.getElementById("desc").value="";  
    document.getElementById("img").value="";

}


function displayBlog(){
    var retrievedObject =JSON.parse(localStorage.getItem("blogData"));
    var blogs1 = '';
    for (blogpost of retrievedObject) {
    blogs1 += '<div>' +
        '<div class="card border-secondary mb-3">' +
        '<h5 class="card-header"></p></h5>' +
        '<div class="card-body">' +
        '<div class="blog-post">' + blogpost.title + 
        '<h2 class="blog-post-title"></h2><br>' + blogpost.desc + 
        '<h2 class="blog-post-img"><img src="" id="imageInfo"/></h2><br>' +
        '</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div><br></br>'

        
        console.log("blogs1:");
        console.log(blogs);
        console.log("blogpost");
        console.log(blogpost);
        document.getElementById("blogs").innerHTML = blogs1;
        document.getElementById("imageInfo").src=blogpost.img;
    }
}