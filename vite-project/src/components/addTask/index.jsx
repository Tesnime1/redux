import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./style.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../../store";

const AddTask = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const handlesubmit = (e) => {
    e.preventDefault();
    setIsOpen(false);
    const formdata = new FormData(e.target);
    const newTask = Object.fromEntries(formdata);
    newTask.isDone = false;
    dispatch(addtodo(newTask));
  };

  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Trigger asChild>
        <button
          onClick={() => setIsOpen(true)}
          className="Button violet"
          size="large"
        >
          Add Task
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Task</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            make it easy with tasks
          </Dialog.Description>
          <form onSubmit={(e) => handlesubmit(e)}>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="title">
                title
              </label>
              <input className="Input" name="title" defaultValue="" />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="description">
                desciption
              </label>
              <input className="Input" name="description" defaultValue="" />
            </fieldset>
            <div
              style={{
                display: "flex",
                marginTop: 25,
                justifyContent: "flex-end",
              }}
            >
              <button className="Button green">add</button>
            </div>
          </form>
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AddTask;
