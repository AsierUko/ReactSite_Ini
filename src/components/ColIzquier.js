import React, { useState } from "react";
import CloseButton from 'react-bootstrap/CloseButton'

function ColIzquier() {
  const [show, setShow] = useState(false);
  
    if (show) {
      return (
        <div className="nav__areYoua">
          <div className="">
            <span>Are You a </span>
              <CloseButton aria-label="Hide" onClick={() => setShow(false)}/>
          </div>
            <ul className="nav__item-list">
              <li className="darwinia">Darwinia</li>
              <li className="frame">Hall of Frame</li>
              <li className="fees">Performance Fees</li>
              <li className="rebates">Rebates</li>
              <li className="widgets">Widgets</li>
            </ul>
            <a 
            className="nav__create-link"
            href="https://darwinex.com"
            target="_blank"
            rel="noopener noreferrer"
            >CREATE ACCOUNT</a>
        </div>
      );
    }
    return (
      <div className="nav__areYoua area_hid" onClick={() =>setShow(true)}>
        <div>
          <span>Are You a </span>
        </div>
      </div>
    );
  }
  
export default ColIzquier;