var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function(){
        this.classList.toggle("active-collapsible");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight =  content.scrollHeight + "px"; /* use 600 can fix the heigh of div */
        }
    });
}
var coll = document.getElementsByClassName("mobile");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function(){
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight =  content.scrollHeight + "px"; /* use 600 can fix the heigh of div */
        }
    });
}