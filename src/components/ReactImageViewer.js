import React from "react";
import ImageViewer from "react-simple-image-viewer";

const ReactImageViewer = (props) => {
  return (
    <>
      {props.isOpen && (
        <ImageViewer
          src={props.images}
          currentIndex={props.currImg}
          onClose={props.onClose}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)",
          }}
          closeOnClickOutside={true}
        />
      )}
    </>
  );
};
export default ReactImageViewer;
