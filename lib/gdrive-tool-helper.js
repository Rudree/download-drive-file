#!/usr/bin/env node
import shell from "shelljs";
import Promise from "bluebird";

export default class {
  constructor(filename, path) {
    this.filename = filename;
    this.path = path;
  }

  getFileId(filename) {
     return Promise.promisify(shell.exec)("gdrive list --query \" mimeType = \'application/json\' and name contains \'" + this.filename + "\' \"");
  }

  downloadFile(fileId, path) {
    return Promise.promisify(shell.exec)("gdrive download --path " + path + " " + fileId + " --force");
  }
}
