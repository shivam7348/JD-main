import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class MyUploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }

  upload() {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve({ default: reader.result });
      };
      reader.onerror = reject;
      this.loader.file.then((file) => {
        reader.readAsDataURL(file);
      });
    });
  }

  abort() {}
}

function EditorInput({ value, onChange, onBlur, inputKey, name }) {
  const editorConfiguration = {
    toolbar: [
      "undo",
      "redo",
      "heading",
      "|",
      "bold",
      "italic",
      "link",
      "uploadImage",
      "bulletedList",
      "numberedList",
      "|",
      "codeBlock",
      "blockQuote",
      "|",
      "insertTable",
      "tableColumn",
      "tableRow",
      "mergeTableCells",
    ],
    image: {
      toolbar: ["imageTextAlternative", "imageStyle:full", "imageStyle:side"],
    },
  };

  const createUploadAdapter = (loader) => {
    return new MyUploadAdapter(loader);
  };

  return (
    <div className="editor-container w-full">
      <CKEditor
        key={inputKey}
        editor={ClassicEditor}
        name={name}
        data={value ? value : ""}
        config={editorConfiguration}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange(data);
        }}
        onBlur={onBlur}
        onReady={(editor) => {
          editor.plugins.get("FileRepository").createUploadAdapter = (
            loader
          ) => {
            return createUploadAdapter(loader);
          };
        }}
      />
      <style jsx>{`
        .editor-container {
          position: relative;
        }

        .ck-editor__editable {
          height: 250px;
        }

        .ck-editor__top {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}

export default EditorInput;
