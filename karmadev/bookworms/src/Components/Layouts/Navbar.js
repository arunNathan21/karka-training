import React from "react";

export const Navbar =({handleCategoryClick}) => {
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><button className="dropdown-item" onClick={() => handleCategoryClick(null)}>All</button></li>
            <li><button className="dropdown-item" onClick={() => handleCategoryClick("Motivation")}>Motivation</button></li>
            <li><button className="dropdown-item" onClick={() => handleCategoryClick("Adventure")}>Adventure</button></li>
            <li><button className="dropdown-item" onClick={() => handleCategoryClick("Drama")}>Drama</button></li>
            <li><button className="dropdown-item" onClick={() => handleCategoryClick("Biography")}>Biography</button></li>
            <li><button className="dropdown-item" onClick={() => handleCategoryClick("Biography")}>Biography</button></li>
            <li><button className="dropdown-item" onClick={() => handleCategoryClick("Psychology")}>Psychology</button></li>
            <li><button className="dropdown-item" onClick={() => handleCategoryClick("Nature")}>Nature</button></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./Author">Author</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./About">About</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
        </>
    )
} 