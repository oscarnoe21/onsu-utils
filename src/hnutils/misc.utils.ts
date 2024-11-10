export class MiscUtil {
    /**
   * 
   * @param list
   * @param value 
   * @param separator 
   * @returns 
   */
  public static existsInList(list: string, value: string, separator: string): boolean {
    const values = list.split(separator);
    for (let i = 0; i < values.length; i++) {
      if (values[i] === value) {
        return true;
      }
    }
    return false;
  }

  /**
   * 
   * @param input 
   * @returns 
   */
  public static isNullOrWhitespace(input: string | null | undefined): boolean {
    return !input || !input.trim();
  }

}
