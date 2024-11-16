import { OPERATOR, rule } from "./domain/rule.interface";

export const filterData = (data: Record<string, string>[], rules: rule[] = []) => {
    // to verify if shallow copy is ok
    let filteredData = [...data]
    for(const rule of rules) {
        if(rule.operator === OPERATOR.REGEX) {
            const regex = new RegExp(rule.value)
            filteredData = filteredData.filter(item => regex.test(item[rule.propertyName]) )
        } else if (rule.operator === OPERATOR.EQUAL) {
            filteredData = filteredData.filter(item => item[rule.propertyName] === rule.value)
        } else {
            throw new Error('unknown rule operator')
        }
    }
    return filteredData
}