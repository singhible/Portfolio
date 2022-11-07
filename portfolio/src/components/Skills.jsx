import React from "react";
import HTML from "../assests/html.png";
import CSS from "../assests/css.png";
import Javascript from "../assests/javascript.png";
import REACTLOGO from "../assests/react.png";
import Node from "../assests/node.png";
import Github from "../assests/github.png";

const Skills = () => {
  return (
    <div name="Skills" className="bg-[#0a192f] w-full h-screen text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">
            These are the technologies that I'm familiar with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Javascript} alt="JS icon" />
            <p className="my-4">Javascript</p>
          </div>
          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={REACTLOGO} alt="React icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="Node icon" />
            <p className="my-4">Node.JS</p>
          </div>
          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={require("../assests/postgresql.svg").default} alt="Postgres icon" />
            <p className="my-4">Postgres</p>
          </div>
          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={require("../assests/django2.svg").default} alt="Django icon" />
            <p className="my-4">DJango</p>
          </div>
          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Github} alt="Github icon" />
            <p className="my-4">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
