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
