import React, { useState } from "react";
import { Form, Field, Formik } from "formik";
import SignupSchema from "./SignupSchema";
import InputField from "./InputField";

const NewItem = ({ onSubmit }) => {
  const [type, setType] = useState("");

  const changeType = (event) => {
    setType(event.target.value);
  };

  return (
    <div className="card col-12 col-md-7 col-lg-7 p-3">
      <h1>Új tétel</h1>
      <Formik
        initialValues={{
          item: "",
          price: "",
          type: "",
        }}
        onSubmit={onSubmit}
        validationSchema={SignupSchema}
      >
        {({ resetForm }) => (
          <Form>
            <InputField
              name="item"
              type="text"
              placeholder="Tétel megnevezése"
            />
            <div className="bottom">
              <div className="w-50">
                <InputField name="price" type="number" placeholder="Összeg" />
              </div>
              <div>
                <div className="select mt-3" onChange={changeType}>
                  <label>
                    <Field type="radio" name="type" value="neg" />
                    Kiadás
                  </label>
                  <label>
                    <Field type="radio" name="type" value="pos" />
                    Bevétel
                  </label>
                </div>
              </div>
              <button
                onClick={() =>
                  setTimeout(() => {
                    resetForm();
                  }, 100)
                }
                type="submit"
              >
                Hozzáadás
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewItem;
