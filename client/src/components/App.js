import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
  );
}

export default App;
