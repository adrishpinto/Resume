import React from "react";
function Technical() {
  let first_word = "text-cyan-500 block sm:inline-block mt-5 sm:mt-0";
  return (
    <>
      <div className="text-left  w-fit mx-auto space-y-2 ml-2 sm:mx-auto ">
        <p>
          <span className={first_word}>Frontend:</span> React, JavaScript,
          Tailwind.js, FramerMotion, CSS, Html.
        </p>

        <p>
          <span className={first_word}>Backend:</span> Nodejs, Express, MongoDB,
          Atlas
        </p>

        <p>
          <span className={first_word}>DS-Algo:</span> Java, JavaScript
        </p>

        <p>
          <span className={first_word}>Additional Backend: </span>
          Can use SQL based frameworks and DB if required
        </p>

        <p>
          <span className={first_word}>Responsive:</span> Website will be
          compatible accross all devices
        </p>

        <p>
          <span className={first_word}>UI/UX based: </span>
          Can create website based on provided design. (ex.figma)
        </p>

        <p>
          <span className={first_word}>Version Control: </span>Github for
          collabration and version control
        </p>

        <p>
          <span className={first_word}>Backend Security:</span> Can integrate
          authentication and validation
        </p>
        <p>
          <span className={first_word}>Component based:</span> Easy central
          changes, code mangement
        </p>
      </div>
    </>
  );
}

export default Technical;
