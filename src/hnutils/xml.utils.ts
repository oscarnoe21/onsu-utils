export class XMLUtils {
    /**
 * 
 * @param xmlpath Ruta En formato Xpath que se quiere recuperar
 * @param xmlString XML completo del cual se quiere recuperar el valor
 * @param mappings Variables de NamesPAces en formato de objeto, que estan en el nodo que se recuperara
 * @returns 
 */
    static getValueNodeXml(
        xmlpath: string,
        xmlString: string,
        mappings: any,
    ): any {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const DOMParser = require('xmldom').DOMParser;
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const xpath = require('xpath');
        const doc = new DOMParser().parseFromString(xmlString);
        const select = xpath.useNamespaces(mappings);

        const nodes = select(xmlpath, doc);
        if (nodes.length > 0) {
            const value = nodes[0].firstChild.nodeValue;
            return value;
        } else {
            return '';
        }
    }

    /**
   *
   * @param xmlpath
   * @param xmlString
   * @param mappings
   * @returns
   */
  static getValueNodeXmlArray(
    xmlpath: string,
    xmlString: string,
    mappings: any,
  ): Array<any> {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const DOMParser = require('xmldom').DOMParser;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const xpath = require('xpath');
    const doc = new DOMParser().parseFromString(xmlString);
    const select = xpath.useNamespaces(mappings);

    const nodes = select(xmlpath, doc);
    const arraObject = new Array(0);

    if (nodes.length > 0) {
      nodes.forEach((n: { firstChild: { nodeValue: any; }; }) => {
        arraObject.push(n.firstChild.nodeValue);
      });
    }
    return arraObject;
  }
}
