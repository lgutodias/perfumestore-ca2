
function highlightSale(idTable, bShowSale) {
    // if bShowSale is true, then we're highlighting vegetarian
    //	meals, otherwise we're unhighlighting them.
    var i = 0;
    var oTable = document.getElementById(idTable);
    var oTBODY = oTable.getElementsByTagName('tbody')[0];
    var aTRs = oTBODY.getElementsByTagName('tr');
    // walk through each of the table rows and see if it has a 
    // "vegetarian" attribute on it.
    for (i = 0; i < aTRs.length; i++) {
        if (aTRs[i].getAttribute('sale') == "true") {
            if (bShowSale) {
                aTRs[i].style.backgroundColor = "rgb(243,213,165)";
            } else {
                aTRs[i].style.backgroundColor = "";
            };
        };
    };
};