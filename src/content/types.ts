export type StatusState =
  | 'success'
  | 'cancelled'
  | 'progress'
  | 'failing'
  | 'skip'
  | 'pending';

export type StatusItem = {
  status?: StatusState;
  icon?: string;
  message?: string;
  note?: string;
  path?: string;
  detailsLink?: string;
  required?: boolean;
};

export type DisplayType = 'hierarchy' | 'grouped';
