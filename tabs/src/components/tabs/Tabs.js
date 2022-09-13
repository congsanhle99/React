import React, { useState } from "react";
import "./Tabs.scss";
const Tabs = () => {
  const [showTab, setShowTab] = useState(1);

  const handleShowTab = (indexTab) => {
    setShowTab(indexTab);
  };

  return (
    <>
      <section className="tabs-section --100vh --flex-center">
        <div className="container">
          <div className="tabs-heading --text-center">
            <h2 className="--line">More About Us</h2>
            <p className="--text-sm">Click the Tab button to learn more</p>
          </div>

          <div className="tabs --flex-start --bg-light">
            <div className="tabs-title">
              <button className={showTab === 1 ? "tab active-tab" : "tab"} onClick={() => handleShowTab(1)}>
                Who we are
              </button>
              <button className={showTab === 2 ? "tab active-tab" : "tab"} onClick={() => handleShowTab(2)}>
                What we do
              </button>
              <button className={showTab === 3 ? "tab active-tab" : "tab"} onClick={() => handleShowTab(3)}>
                Get in Touch
              </button>
            </div>
            <div className="tabs-content">
              <article className={showTab === 1 ? "content active-content" : "content"}>
                <h4>Who we are...</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quaerat voluptates alias sed
                  inventore eveniet sit laborum explicabo, ducimus omnis distinctio, qui, perspiciatis porro temporibus!
                  Est nam voluptatem suscipit aperiam.
                </p>
              </article>
              <article className={showTab === 2 ? "content active-content" : "content"}>
                <h4>What we do...</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quaerat voluptates alias sed
                  inventore eveniet sit laborum explicabo, ducimus omnis distinctio, qui, perspiciatis porro temporibus!
                  Est nam voluptatem suscipit aperiam.
                </p>
              </article>
              <article className={showTab === 3 ? "content active-content" : "content"}>
                <h4>Get in Touch...</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quaerat voluptates alias sed
                  inventore eveniet sit laborum explicabo, ducimus omnis distinctio, qui, perspiciatis porro temporibus!
                  Est nam voluptatem suscipit aperiam.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tabs;
