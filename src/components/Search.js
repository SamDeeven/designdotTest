import React from 'react';
import '../App.css';

const Search = () => {
  return (
    <div className="searchContainer">
      <div className="row search">
        <div className="col-md col-12 mb-2">
          <h4 className="nav-divnk active" aria-current="page">
            Find the best 
          </h4>
          <h4 style={{color:"white", fontWeight:"bold"}}>career opportunity</h4>
          <h4>for you</h4>
        </div>
        <div className="col-md col-12 mb-2">
          <label className="">What?</label>
          <input className="input-text form-control" placeholder='Profession, Keyword, or Company' type="text" />
        </div>
        <div className="col-md col-12 mb-2 offcanvas-body">
          <label className="">Experience</label>
          <div className="dropdown">
            <button className="exp btn btn-light dropdown-toggle form-control" role="button" type="button" data-toggle="dropdown" aria-expanded="false">
              Yrs. Of Exp.
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Fresher</a></li>
              <li><a className="dropdown-item" href="#">1</a></li>
              <li><a className="dropdown-item" href="#">2</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md col-12 mb-2">
          <label className="">Where?</label>
          <input className="input-text form-control" placeholder='City or Region' type="text" />
        </div>
        <div className="col-md col-12 mb-2">
          <label className=""></label><br />
          <input type="button" className="btn rounded-pill form-control" value="SEARCH NOW" />
        </div>
      </div>
    </div>
  );
};

export default Search;
