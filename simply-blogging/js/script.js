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
    formData.img= document.getElementById("img").files[0].name;
    return formData;
}

function resetForm() {
    document.getElementById("title").value="";
    document.getElementById("desc").value="";  
    document.getElementById("img").value="";

}


function displayBlog(){
    var retrievedObject =JSON.parse(localStorage.getItem("blogData"));
    var blogs1 = '';
    for (blogpost of blogpost1) {
    blogs1 += '<div>' +
    '<div class="card border-secondary mb-3">' +
    '<h5 class="card-header"></p></h5>' +
    '<div class="card-body">' +
    '<div class="blog-post">' +
    '<h2 class="blog-post-title"></h2><br>' +
    '</p>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div><br></br>'
    }
    document.getElementById("blogs").innerHTML = blogs1;
}