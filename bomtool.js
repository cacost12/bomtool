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
    uploadKiCadBOM();
}

/* Apply proper formatting to the BOM */
function formatBOM(){
    // TODO: Implement
}


/*------------------------------------------------------------------------------
 Internal Procedures 
------------------------------------------------------------------------------*/

/* Create a new sheet from the KiCad generated BOM */
function uploadKiCadBOM(){
    // Display Dialog to upload BOM
    try {
        const html = HtmlService.createHtmlOutputFromFile('file_dialog.html')
            .setWidth(600)
            .setHeight(425)
            .setSandboxMode(HtmlService.SandboxMode.IFRAME);
        SpreadsheetApp.getUi().showModalDialog(html, 'Select a file');
      } catch (e) {
        console.log('Failed with error: %s', e.error);
      }

    // Create a new sheet using the uploaded BOM
}


/**
 * Gets the user's OAuth 2.0 access token so that it can be passed to Picker.
 * This technique keeps Picker from needing to show its own authorization
 * dialog, but is only possible if the OAuth scope that Picker needs is
 * available in Apps Script. In this case, the function includes an unused call
 * to a DriveApp method to ensure that Apps Script requests access to all files
 * in the user's Drive.
 *
 * @return {string} The user's OAuth 2.0 access token.
 */
 function getOAuthToken() {
    try {
      DriveApp.getRootFolder();
      return ScriptApp.getOAuthToken();
    } catch (e) {
      // TODO (Developer) - Handle exception
      console.log('Failed with error: %s', e.error);
    }
  }