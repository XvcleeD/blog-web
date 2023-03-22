import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useState } from "react";
import axios from "axios";
import { CategoriesSelector } from "./categoriesSelector";

export function ArticlesNew() {
  const [content, setText] = useState();
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [image, setImage] = useState("");

  async function handleFileUpload(event) {
    const imageFile = event.target.files[0];
    const formData = new FormData();
    formData.append("image", imageFile);
    // console.log(formDate)

    await fetch("http://localhost:3001/upload-image", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setImage(data.file);
      });
  }

  // console.log(image);

  function submit() {
    axios
      .post("http://localhost:3001/articles", {
        title,
        categoryId,
        content,
        image,
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
      <div>
        <input type="file" name="image" onChange={handleFileUpload} />
      </div>
      <div className="mt-5">
        <CKEditor
          editor={ClassicEditor}
          data={content}
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
