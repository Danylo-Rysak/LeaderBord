import React from 'react';
import {
  GroupImg,
  HighestScorersContainer,
  Icon,
  Info,
  Inscription,
  Name,
  TopLeader,
  TopLeaders,
} from './HighestScorersStyles';
import groupImg from './../../icons/group.svg';
import { useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../redux/store';
import leaderImg from '../../icons/leader.svg';

export const HighestScorers: React.FC = () => {
  const { topLeaders } = useAppSelector((state: RootState) => state.leadersData);
  const topLeader = topLeaders.map((leader, i) => (
    <div key={i}>
      <Icon src={leaderImg} alt="userIcon" />
      <TopLeaders>
        {leader.name} - {leader.score}
      </TopLeaders>
    </div>
  ));

  return (
    <HighestScorersContainer>
      <Info>
        <Name>All-time highest scorers</Name>
        <Inscription>You can be among the leaders already today</Inscription>
        <TopLeader>{topLeader}</TopLeader>
      </Info>
      <GroupImg src={groupImg} alt="group" />
    </HighestScorersContainer>
  );
};
