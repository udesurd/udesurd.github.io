import React from "react";
import MiniProfile from "./MiniProfile/MiniProfile";
import Posts from "../Main/Posts/Posts";

function Home () {
    return(
        <div>
            <MiniProfile Name="Rostislav Dmitriev" Bio="full-stack dev :)" Status="In love with Margo"/>
            <Posts/>
        </div>
    )
}

export default Home;