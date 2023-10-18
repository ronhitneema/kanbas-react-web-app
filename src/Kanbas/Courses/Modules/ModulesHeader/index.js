import React from "react";
import { FaEllipsisV } from "react-icons/fa";
import "./index.css";
import { AiOutlinePlus, AiFillCheckCircle} from "react-icons/ai";

const ModulesHeader = () => {
  return (
    <div class="d-flex mb-2">
      <div class="m-1">
        <button class="btn btn-secondary">Collapse All</button>
      </div>
      <div class="m-1">
        <button class="btn btn-secondary">View Progress</button>
      </div>
      <div class="m-1">
        <button class="btn btn-secondary"><AiFillCheckCircle color="green" /> Publish All</button>
      </div>
      <div class="m-1">
        <button class="btn btn-danger">
          <i class="fa-solid fa-plus"></i><AiOutlinePlus /> Module
        </button>
      </div>
      <div class="m-1">
        <button class="btn btn-danger">
          <FaEllipsisV />
        </button>
      </div>
    </div>
  );
};

export default ModulesHeader;
