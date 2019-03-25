import React, { Component } from "react";

// Upload Box
import Dropzone from "react-dropzone";

// Styles
import { DropContainer, UploadMessage } from "./styles";

export default class Upload extends Component {
  renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <UploadMessage>Drag your files here...</UploadMessage>;
    }

    if (isDragReject) {
      return <UploadMessage type="error">File is not suported</UploadMessage>;
    }

    return <UploadMessage type="success">Drop your files here</UploadMessage>;
  };

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
            {this.renderDragMessage(isDragActive, isDragReject)}
          </DropContainer>
        )}
      </Dropzone>
    );
  }
}
