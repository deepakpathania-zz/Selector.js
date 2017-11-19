getPath = function(element, ){
    // Reached at the top of DOM
    if(element.localName=="html") return "";
    // Add the element name.
    let cur = element.localName;
    // Determine the ID.
    if(element.id !="") return ' #' + element.id;
    if(element.parentElement){
        let siblings = element.parentElement.children, count = 0;
        if(typeof siblings == "object"){
            [].forEach.call(siblings, sibling => {
                if(sibling.localName == element.localName) count++;
            });
            if(count > 1) cur += ":(" + [].indexOf.call(siblings, element) + ")";
        }
    }
    // Recurse up the DOM.
    return getPath(element.parentElement) + " > " + cur;

}
document.body.onmousedown = function (e) {
    let path = getPath(e.target);
    console.log(path);
}