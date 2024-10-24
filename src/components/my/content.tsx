import React from "react";
import { Link } from "react-router-dom";
import { BreadCrumb } from "./breadcrumb";

interface IContent {
  displayName: string;
  children: React.ReactNode;
  displayMenu: string;
}

export const Content = ({ displayName, displayMenu, children }: IContent) => {
  return (
    <div className="content bg-white card crud-content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10 mt-2">
            <div className="page-header">
              <ul className="breadcrumbs">
                <li className="nav-home">
                  <Link to="/">
                    <i className="flaticon-home" />
                  </Link>
                </li>
                <BreadCrumb
                  displayMenu={displayMenu}
                  displayName={displayName}
                />
              </ul>
            </div>
          </div>
          <div className="col-md-2 mt-2">
            {/* {props.view === "list" && props.enableBtnNew && props.btnNew && (
              <props.btnNew handleNew={props.onBtnNovoClick} />
            )}
            {props.view !== "list" && props.onBtnSearchClick && (
              <props.btnSearch handleSearch={props.onBtnSearchClick} />
            )} */}
          </div>
        </div>
        <hr />
        {children}
      </div>
    </div>
  );
};
