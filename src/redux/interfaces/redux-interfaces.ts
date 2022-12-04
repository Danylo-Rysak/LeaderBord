export interface ILeader {
  place?: number;
  position?: number | undefined;
  name: string;
  score: number;
}

export interface ILeadersState {
  days: ILeader[][];
  loading: boolean;
  hasErrors: boolean;
  editLeaderId: number;
  pageSize: number[];
  currentPage: number;
  allLeaders: ILeader[];
  topLeaders: ILeader[];
}

export interface IModalState {
  isOpen: boolean;
  inscription: string;
}
