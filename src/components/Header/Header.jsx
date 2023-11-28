import React, { useState } from "react";
import Modal from "../../utiles/Modal";

export default function Header() {
  const [modalSate, setModalState] = useState("");
  return (
    <>
      <div className="navbar bg-sky-200">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            Demu Redux Project
          </a>
        </div>
        <div className="flex-none">
          <div>
            <button
              className="btn btn-sm btn-primary"
              onClick={() => document.getElementById("product_add").showModal()}
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
      <Modal></Modal>
    </>
  );
}
