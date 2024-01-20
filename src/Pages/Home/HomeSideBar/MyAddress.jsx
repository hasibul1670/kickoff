/* eslint-disable react-hooks/rules-of-hooks */

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import {
  useEditUserMutation,
  useSingleUserQuery,
} from "../../../redux/features/user/userApi";
import LoadingSpinner from "../../Shared/LoadingSpinner";

const MyAddress = () => {
  const storedId = localStorage.getItem("_id");

  const { data, isLoading } = useSingleUserQuery(storedId, {
    refetchOnMountOrArgChange: true,
  });
  const user = data?.data;


  const [editUser] = useEditUserMutation();

  const { register, handleSubmit, setValue } = useForm();
  const [editMode, setEditMode] = useState(false);

  const onSubmit = async (formData) => {
    try {
      const updatedData = {
        address: formData.address,
        contactNo: formData.contactNo,
      };
      const result = await editUser({ id: storedId, data: updatedData });

      if (result.error) {
        console.error("Error updating user:", result.error);
      } else {
        console.log(" updated successfully");
        toast.success("Update Information successfully");
        setEditMode(false);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleEditClick = () => {
    setEditMode(true);

    setValue("address", user?.address);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h1 className="font-bold text-pink-700 text-xl">
        Hey, {user?.name.firstName}! 🙋
      </h1>
      {editMode ? (
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="address" className=" mr-1 text-sm font-bold">
              Address :
            </label>
            <input
              type="text"
              id="address"
              className="input input-bordered input-primary w-full max-w-xs"
              {...register("address")}
              defaultValue={user?.address}
            />
          </div>

          <button className="btn btn-info btn-sm capitalize" type="submit">
            Save
          </button>
        </form>
      ) : (
        <div className="my-5">
          <p className="text-sm font-bold text-info ">
            Address: {user?.address}
          </p>

          <button
            className="btn mt-5 btn-accent btn-sm capitalize"
            onClick={handleEditClick}
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default MyAddress;
