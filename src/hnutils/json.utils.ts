import { isArray, isObject } from "class-validator";

export class JsonUtils {

  /**
   * 
   * @param objJsonString 
   * @param jsonPath 
   * @param value 
   * @returns 
   */
  static apply(objJsonString: string, jsonPath: string, value: any): any {
    const jsonpath = require('jsonpath');
    jsonpath.apply(objJsonString, jsonPath, value);
    return objJsonString;
  }

  /**
   * 
   * @param jsonPath 
   * @param responseLoginus 
   * @param evaluateNumber 
   * @returns 
   */
  static getJsonValue(
    jsonPath: string,
    responseLoginus: any,
    evaluateNumber: boolean,
  ): string {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const jp = require('jsonpath');
    const value = jp.query(responseLoginus, jsonPath);
    let retorno: any = '';
    if (isArray(value) && value.length > 0) {
      for (const element of value) {
        const str: string = element + '';
        if (/^\d+$/.exec(str) && evaluateNumber) {
          retorno = str;
          break;
        }

        if (!evaluateNumber) {
          retorno = value[0];
          break;
        }
      }
    } else if (isObject(value)) {
      retorno = value;
    }
    return retorno;
  }
}
