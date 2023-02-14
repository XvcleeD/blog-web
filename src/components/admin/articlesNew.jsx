import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useState } from "react";
import axios from "axios";
import { CategoriesSelector } from "./categoriesSelector";

export function ArticlesNew() {
  const [text, setText] = useState();
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [backgaround, setBackgaround] = useState("");

  function submit() {
    axios
      .post("http://localhost:3001/articles", {
        title,
        categoryId,
        text,
        backgaround,
      })
      .then((res) => {
        const { status } = res;
        if (status === 201) {
          alert("Success");
        }
      });
  }

  return (
    <>
      <h1 className="mb-4">Шинэ мэдээ</h1>
      <label htmlFor="">Agnilal</label>
      <CategoriesSelector
        value={categoryId}
        onChange={(val) => setCategoryId(val)}
      />

      <label>title</label>
      <input
        type="text"
        className="form-control mt-4 mb-4"
        placeholder="Мэдээний гарчиг"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>cover</label>
      <input
        type="url"
        id="homepage"
        name="homepage"
        value={backgaround}
        onChange={(e) => setBackgaround(e.target.value)}
      />
      <div className="mt-5">
        <CKEditor
          editor={ClassicEditor}
          data={text}
          onChange={(event, editor) => {
            const data = editor.getData();
            setText(data);
            console.log({ event, editor, data });
          }}
        />
        <button onClick={submit}>Хадгалах</button>
        {/* <div dangerouslySetInnerHTML={{ __html: text }}></div> */}
      </div>
    </>
  );
}