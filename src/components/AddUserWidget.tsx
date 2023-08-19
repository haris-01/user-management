import React, { useState } from "react";
import AddUserFormModal from "./AddUserFormModal";
import { Button } from "./common";

function AddUserWidget() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Button
        classes="fixed bottom-4 right-4 p-2  text-white rounded-full shadow-lg w-72"
        onClick={openModal}
      >
        Add User
      </Button>
      <AddUserFormModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default AddUserWidget;
