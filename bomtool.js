/*******************************************************************************
*
* FILE: 
* 		bomtool.js
*
* DESCRIPTION: 
* 	   Google Sheets add on to automate basic and repetitive Google sheets
*      operations 
*
*******************************************************************************/


/*------------------------------------------------------------------------------
 Callbacks 
------------------------------------------------------------------------------*/

/* What should the add-on do after it is installed */
function onInstall() {
    onOpen();
} /* onInstall */

  
/* What should the add-on do when a document is opened */
function onOpen() {

    /* BOM Tool Adds-on option */
    var addOnMenu = SpreadsheetApp.getUi().createAddonMenu();

    /* BOM Tool Operations menu */
    addOnMenu
    .addItem("Generate Production BOM", "genProductionBOM")
    .addToUi();  // Generate BOM for PCB Assembly

    addOnMenu
    .addItem("Check BOM", "checkBOM")
    .addToUi();  // Check the BOM for errors 

    addOnMenu
    .addItem("Format BOM", "formatBOM")
    .addToUi();  // Apply formatting to BOM 
} /* onOpen */
  
  
/* Generate the Production BOM */
function genProductionBOM(){
    // TODO: Implement
    // Check the BOM for errors
    // Check if a production sheet has been created, if not create it
    // Update/Create header
    // Update/Create items
    // Display Result
}

/* Check the BOM for errors */
function checkBOM(){
   // TODO: Implement 
   // Look for KiCad generated BOM, if not provided ask for it
}

/* Apply proper formatting to the BOM */
function formatBOM(){
    // TODO: Implement
}


/*------------------------------------------------------------------------------
 Internal Procedures 
------------------------------------------------------------------------------*/

/* Create a new sheet from the KiCad generated BOM */
function uploadKiCADBOM(){
    // TODO: Implement
    // Display Dialog to upload BOM
    // Create a new sheet using the uploaded BOM
}