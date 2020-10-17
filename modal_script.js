//Get the modal
var modal = document.getElementById("modal_id");
var i; //for iteration (images > 1)

//Get the images based on the same class "image_id"
var img = document.getElementsByClassName("image_id");
var modal_img = document.getElementById("img01")
var modal_info = document.getElementById("modal-info");

for(i = 0; i<img.length; i++)
{
    img[i].onclick = function()
    {
        modal.style.display = "block";
        modal_img.src = this.src;
        modal_info.innerHTML = this.alt;
    }
}

//If we close the modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function()
{
    modal.style.display = "none";
}

