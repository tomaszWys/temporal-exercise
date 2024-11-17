export enum OPERATOR {
  REGEX = 'REGEX',
  EQUAL = 'EQUAL',
}

export interface Rule {
  propertyName: string;
  operator: OPERATOR;
  value: string;
}
