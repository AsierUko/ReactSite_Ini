/* eslint-disable no-undef */
import "./App.scss";
import React, { useState } from "react";
import ReactDOM from "react-dom";

import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'

import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'

import logo from "../resources/logo darwinex.svg";


import CarouseHome from "../components/CarouseHome.js";
import Carouselmov from "../components/Carouselmov";
import ColIzquier from "../components/ColIzquier.js";


function App() {
  const [open, setOpen] = useState(false);


  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
       <p>Inversion</p>
       <p>Retorno</p>
       <p>Drawdown</p>
       <p>D-Score</p>
      </Popover.Body>
    </Popover>
  );

  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          <Button 
            onClick={() => setOpen(!open)}
            aria-controls=""
            aria-expanded={open}
            className="btnNav">
          </Button>
          <div className="header__wraplogo">
            <img src={logo} className="header__logo" alt="logo" />
          </div>
        </div>
      </header>
      <main>
        <aside className="nav">
          <Collapse in={open} dimension="width">
            <div id="example-collapse-text">
              <div style={{width: '180px'}} className="nav__body">
                <div className="nav__principal">
                  <div>
                    <i className="list"></i>
                    <span>Principal</span>
                  </div>
                  <ul className="nav__item-list">
                    <li className="exp">Exportar</li>
                    <li className="all">All Darwing</li>
                    <li className="darwinia">Darwinia</li>
                  </ul>
                </div>
                <div>
                  <ColIzquier />
                </div>
              </div>
            </div>
          </Collapse>
        </aside>
        <section className="portfolio">
          <div className="portfolio__user">
            <div className="portfolio__avatar">AIS</div>
            <div className="portfolio__avatarText">
              <span>Estrategia Nombre</span>
              <span>Nombre de Usuario
                <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                  <i variant="success">+2</i>
                </OverlayTrigger>
              </span>
            </div>
          </div>
          <div className="portfolio__description nav__return">
            <p>TSM is absolutely passionate about automated, systematic trading, and to drive system lorem ipsum dolor sit amet… </p>
          </div>
          <div className="portfolio__item">
            <div className="portfolio__nav">
              <div className="nav__item-list">
                <i className="list"></i>
                <i className="listGrid"></i>
                <div className="portfolio__wrap__checkbox">
                    <p>In Portfolio</p>
                    <label class="portfolio__switch">
                      <input type="checkbox" />
                      <div></div>
                    </label>
                </div>
              </div>
              <div className="nav__return">
              <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                <p variant="success">Order by Return</p>
              </OverlayTrigger>
              </div>
            </div>
            <div className="portfolio__total">
              <div className="portfolio__carousel">
                <CarouseHome className="portfolio__carouselDes"/>
                <Carouselmov className="portfolio__carouselMov"/>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
