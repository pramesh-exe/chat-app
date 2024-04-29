import React from "react";
import useConversataion from "../../store/useConversation";

const Person = ({ conversation, lastIdx }) => {
  const { selectedPerson, setSelectedPerson } = useConversataion();

  const isSelected = selectedPerson?._id === conversation._id;

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer my-2 
          ${isSelected ? "bg-sky-500" : ""}
        `}
        onClick={() => setSelectedPerson(conversation)}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.avatar} alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <p className="font-bold text-gray-200">{conversation.fullName}</p>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1"></div>}
    </>
  );
};

export default Person;
