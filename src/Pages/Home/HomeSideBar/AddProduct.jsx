/* eslint-disable no-unused-vars */

import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
import { AuthContext } from "../../../Providers/AuthProvider";

const AddProduct = () => {
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    const firstName = data.firstName;
    const lastName = data.lastName;
    const address = data.address;
    const dateofBirth = data.dob;
    const contactNo = data.contactNo;
  };

  const imageHostKey = "0dcdc5786891463acb6a83a34d743b06";

  const uploadImage = (event) => {
    const selectedFile = event.target.files[0];
    console.log("Hello", selectedFile);
    if (!selectedFile) {
      return;
    }

    const iData = new FormData();
    iData.append("image", selectedFile);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    fetch(url, {
      method: "POST",
      body: iData,
    })
      .then((res) => res.json())
      .then((iData) => {
        console.log("Hello", iData);
        setImageUrl(iData.data.display_url);
        setIsSaving(true);
        setFormData({
          ...formData,
          imageUrl: iData.data.display_url,
        });
      });

   
  };



  return (
    <div className="main-container md:hero min-h-screen   justify-items-center">
      <Helmet>
        <title> E-Medicine | SignUp❤️</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200 ">
        <form onSubmit={handleSubmit(onSubmit)} className="md:hero font-bold">
          <div className="card flex-shrink-0 w-full max-w-screen-md shadow-2xl">
            <div className="card-body">
              {/* Medicine Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Medicine Name: </span>
                </label>
                <input
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Medicine Name"
                  className="input input-bordered"
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name?.type === "required" && (
                  <small className="text-red-600">
                    Medicine name is required!
                  </small>
                )}
              </div>

              {/* Product Description */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Description</span>
                </label>
                <textarea
                  {...register("productDescription", { required: true })}
                  name="productDescription"
                  placeholder="Product Description"
                  className="input input-bordered"
                  rows="3"
                />
                {errors.productDescription?.type === "required" && (
                  <small className="text-red-600">
                    Product description is required!
                  </small>
                )}
              </div>

              {/* Measurement */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Measurement: </span>
                </label>
                <input
                  {...register("measurement", { required: true })}
                  name="measurement"
                  placeholder="Measurement"
                  className="input input-bordered"
                />
                {errors.measurement?.type === "required" && (
                  <small className="text-red-600">
                    Measurement is required!
                  </small>
                )}
              </div>

              {/* Company */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Company: </span>
                </label>
                <input
                  {...register("company", { required: true })}
                  name="company"
                  placeholder="Company"
                  className="input input-bordered"
                />
                {errors.company?.type === "required" && (
                  <small className="text-red-600">
                    Company name is required!
                  </small>
                )}
              </div>

              {/* Generic */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Generic: </span>
                </label>
                <input
                  {...register("generic", { required: true })}
                  name="generic"
                  placeholder="Generic"
                  className="input input-bordered"
                />
                {errors.generic?.type === "required" && (
                  <small className="text-red-600">
                    Generic name is required!
                  </small>
                )}
              </div>

              {/* Category */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category: </span>
                </label>
                <select
                  className="select dropdown  select-info w-full max-w-xs"
                  {...register("category", { required: true })}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="Baby Medicine">Baby Medicine</option>
                  <option value="Pet Medicine">Pet Medicine</option>
                  <option value="Pet Food">Pet Food</option>
                  <option value="Vitamins & Supplements">
                    Vitamins & Supplements
                  </option>
                  <option value="Fever & Pain">Fever & Pain</option>
                  <option value="Diabetes">Diabetes</option>
                  <option value="Blood Pressure & Heart Disease">
                    Blood Pressure & Heart Disease
                  </option>
                  <option value="Digestive Health">Digestive Health</option>
                  <option value="Skin & Hair Condition">
                    Skin & Hair Condition
                  </option>
                  <option value="Allergy & Asthma">Allergy & Asthma</option>
                </select>
                {errors.category?.type === "required" && (
                  <small className="text-red-600">Category is required!</small>
                )}
              </div>

              {/* Image */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image: </span>
                </label>
                <input
                  type="file"
                  name="url"
            
                  className="file-input file-input-bordered file-input-warning w-full max-w-xs"
                  onChange={uploadImage}
                />
                {errors.url?.type === "required" && (
                  <small className="text-red-600">Image is required!</small>
                )}
              </div>

              {isSaving && imageUrl && (
                <>
                  <p>Preview Your Uploaded Photo</p>
                  <img src={imageUrl} alt="Uploaded" />
                </>
              )}

              {/* Price */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price: </span>
                </label>
                <input
                  {...register("price", { required: true })}
                  name="price"
                  type="number"
                  step="0.01"
                  placeholder="Price"
                  className="input input-bordered"
                />
                {errors.price?.type === "required" && (
                  <small className="text-red-600">Price is required!</small>
                )}
              </div>

              <div className="form-control mt-6">
                <button className="btn font-bold btn-primary">
                  Add Medicine
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
