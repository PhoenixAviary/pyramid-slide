function findHeightAndDrawPyramid() {

    // just so we know we're here
    console.log("someone invoked findHeightAndDrawPyramid function!");

    // figure out the height the user typed (replace the "5" below)
    heightStr = document.getElementById("height").value;

    // here we convert the string to an int
    height = parseInt(heightStr);

    // TODO 2
    // draw the pyramid with the given height
    drawPyramid(height);

}


document.getElementsByTagName("input")[0].addEventListener("input", findHeightAndDrawPyramid);
document.querySelector(".symbol").addEventListener("change", findHeightAndDrawPyramid);


/**
 * drawPyramid
 */
 function drawPyramid(height) {

     document.getElementById("pyramid").textContent = "";

     var symbol = document.querySelector(".symbol").value;


     for (var row = 0; row < height; row++) {

         var numBricks = row + 2;
         var numSpaces = height - row - 1;

         var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
             rowStr += "\xa0";
         }
         for (var i = 0; i < numBricks; i++) {
             rowStr += symbol;
         }

        textElem = document.createTextNode(rowStr);

        rowElem = document.createElement("p");
        rowElem.appendChild(textElem);

        document.getElementById("pyramid").appendChild(rowElem);
    }
}
