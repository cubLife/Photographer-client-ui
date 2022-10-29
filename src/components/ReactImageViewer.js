import React from "react";
import ImgsViewer from "react-images-viewer";

const ReactImageViewer = (props) => {
  return (
    <>
      <ImgsViewer
        imgs={props.imgs}
        isOpen={props.isOpen}
        onClose={props.onClose}
        currImg={props.currImg}
        onClickPrev={props.onClickPrev}
        onClickNext={props.onClickNext}
      />
    </>
  );
};

export default ReactImageViewer;
