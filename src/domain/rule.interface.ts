export enum OPERATOR {
    REGEX = 'REGEX',
    EQUAL = 'EQUAL'
}

export interface rule {
    propertyName: string;
    operator: OPERATOR;
    value: string;
}