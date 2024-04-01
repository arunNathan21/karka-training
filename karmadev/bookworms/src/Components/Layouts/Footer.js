import React from "react";

export const Footer =() => {
    return (
        <>
            <footer className="">
              <div className="row container">
                  <div className="col-md-3 fs">
                      <h6>BOOKWORMS</h6>
                      <p>BOOKWORMS was established in 2019 with the vision to provide an extensive library of books in digital format for free on the Internet.</p>
                  </div>
                  <div className="col-md-3 fs">
                  <h6>PAGES</h6>
                  <h5>Home</h5>
                  <h5>contact us</h5>
                  <h5>Terms and condition</h5>
                  <h5>Privacy Policy</h5>
                  </div>
                  <div className="col-md-3 fs">
                  <h6>OUR COMPANY</h6>
                  <h5>About us</h5>
                  <h5>Books</h5>
                  <h5>Blog</h5>
                  <h5>Categories</h5>
                  </div>
                  <div className="col-md-3">
                  <h6>STAY CONNECTED</h6>
                  <div className="social_media">
                    <div><i class="fa-brands fa-twitter"></i></div>
                    <div><i class="fa-brands fa-facebook"></i></div>
                    <div><i class="fa-brands fa-instagram"></i></div>
                  </div>
                  </div>
              </div>
      {/* <p className="text-center text-dark mt-1">
        Bookstore - 2022-2023, All Rights Reserved
      </p> */}
    </footer>
        </>
    )
}