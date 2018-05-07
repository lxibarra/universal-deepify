import { indexArrayRegxp, arrayBrackets } from './regex.expressions';

export const getIndexFromPropName = (propertyName) => parseInt([...propertyName.match(indexArrayRegxp)][0].replace(arrayBrackets, ''), 10);
