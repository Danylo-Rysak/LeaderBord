import React from 'react';
import {LeaderBord, Title} from "./styles/appStyles";
import title from "./icons/title.svg";
import {LeadersTable} from "./components/LeadersTable/LeadersTable";
import {HighestScorers} from "./components/HighestScorers/HighestScorers";

export const App: React.FC = () => {
    return (
        <LeaderBord>
            <Title src={title} alt="title"/>
            <HighestScorers/>
            <LeadersTable/>
        </LeaderBord>
    );
}

