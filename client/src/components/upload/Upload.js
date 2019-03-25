import React, { Component } from "react";

// Upload Box
import Dropzone from "react-dropzone";

// Styles
import { DropContainer, UploadMessage } from "./styles";

export default class Upload extends Component {
  render() {
    return (
      <Dropzone accept="image/*" onDropAccepted={() => {}}>
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input {...getInputProps()} />
            Drop your files here
          </DropContainer>
        )}
      </Dropzone>
    );
  }
}
