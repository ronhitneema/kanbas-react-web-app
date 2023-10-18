import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { AiFillCheckCircle, AiOutlineCaretDown} from "react-icons/ai";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;

  return (
    <div>
      <ul className="list-group">
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) =>
            module.modules.map((moduleInner, innerIndex) => (
              <div className={`mb-4 ${index}`}>
                <li key={innerIndex} className="list-group-item">
                  <h5><HiOutlineEllipsisVertical /> <AiOutlineCaretDown/> {moduleInner.title} <AiFillCheckCircle color="green" />  </h5>
                </li>
                {moduleInner.sections.map((section, sectionIndex) => (
                  <div>
                    <li key={sectionIndex} className="list-group-item">
                      <span>
                        <h6>{section.sectionTitle}</h6>
                      </span>
                    </li>
                    {section.sectionContent.map(
                      (sectionItem, sectionItemIndex) => (
                        <li key={sectionItemIndex} className="list-group-item">
                          <span>
                            <span class="tab">{sectionItem}</span>
                          </span>
                        </li>
                      )
                    )}
                  </div>
                ))}
              </div>
            ))
          )}
      </ul>
    </div>
  );
}

export default ModuleList;
