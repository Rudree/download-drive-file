#!/usr/bin/env node
import GDriveToolHelper from "./gdrive-tool-helper";

const filename = process.argv[2];
const path = process.argv[3];

if (filename && path) {
  let gDriveToolHelper = new GDriveToolHelper(filename , path);
  gDriveToolHelper.getFileId(filename)
  .then(result => {
     console.log("\n");
    //extract fileId from output
    let id = result.split("\n")[1].split(" ")[0];
    if (id)
    {
      //download/replace the file
      gDriveToolHelper.downloadFile(id, path)
      .then(data => console.log(" \nDownloading completed!\nPlease check "+ path))
      .catch(error => console.log(error));
    } else {
      console.log("\nError: file not found");
    }
  }).catch(error => console.log(error));
} else {
  console.log("Error: Please enter filename and path");
}
