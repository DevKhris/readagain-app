import React from "react";
import StatusCard from "./StatusCard";

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-4">
          <StatusCard></StatusCard>
        </div>
        <div className="col-sm-12 col-md-8 col-lg-8">
          <h3>ReadList</h3>
          <ul>
            <li>Test Book</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
