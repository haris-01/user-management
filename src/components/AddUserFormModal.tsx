import React, { useState } from "react";
import { TextInput } from "./common";
import { useAddUser } from "@hooks/useAddUser";

type AddUserFormModalPropsType = {
  isOpen: boolean;
  onClose: () => void;
};

export type AddUserFormType = {
  name?: string;
  email?: string;
  phone?: string;
  linkedIn?: string;
};

const initialValues = {
  name: "",
  email: "",
  phone: "",
  linkedIn: "",
};

const AddUserFormModal = ({ isOpen, onClose }: AddUserFormModalPropsType) => {
  const { addUser } = useAddUser();
  const [formData, setFormData] = useState<AddUserFormType>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addUser(formData);
    setFormData(initialValues);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="modal-overlay absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold mb-4 text-black border-b-2 p-2">
              Add User
            </h2>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <TextInput
                required
                type="text"
                id="name"
                name="name"
                value={formData?.name}
                onChange={handleChange}
                className="w-full mt-1 py-2 px-3 border rounded-lg focus:outline-none focus:ring"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <TextInput
                required
                type="email"
                id="email"
                name="email"
                value={formData?.email}
                onChange={handleChange}
                className="w-full mt-1 py-2 px-3 border rounded-lg focus:outline-none focus:ring"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <TextInput
                required
                type="text"
                id="phone"
                name="phone"
                value={formData?.phone}
                onChange={handleChange}
                className="w-full mt-1 py-2 px-3 border rounded-lg focus:outline-none focus:ring"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="linkedIn"
                className="block text-sm font-medium text-gray-700"
              >
                Lined In profile Link
              </label>
              <TextInput
                required
                type="text"
                id="linkedIn"
                name="linkedIn"
                value={formData?.linkedIn}
                onChange={handleChange}
                className="w-full mt-1 py-2 px-3 border rounded-lg focus:outline-none focus:ring"
              />
            </div>

            <div className="border-b-2 text-black p-2 " />
            <div className="mt-6">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={onClose}
                className="ml-4 px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUserFormModal;
