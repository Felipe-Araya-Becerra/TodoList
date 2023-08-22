import React from "react";

function HeaderComponent() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a href="/" className="navbar-brand">
              To Do List
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default HeaderComponent;
