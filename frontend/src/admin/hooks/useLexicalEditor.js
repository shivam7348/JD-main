import { useState, useCallback } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getRoot } from "lexical";

const useLexicalEditor = () => {
  const [editor] = useLexicalComposerContext();
  const [description, setDescription] = useState("");

  const updateDescription = useCallback(() => {
    editor.update(() => {
      const root = $getRoot();
      const text = root.getTextContent();
      setDescription(text);
    });
  }, [editor]);

  return {
    description,
    updateDescription,
  };
};

export default useLexicalEditor;
