import React from 'react';

function Header(){
  return (
    <div className="header">
      <style jsx>{`
          div.header {
            background-color:goldenrod;
            text-align:center;
            font-family:cursive;
          }
        `}
      </style>
      <h1>Avery's Organics</h1>
    </div>
  );
}

export default Header;
