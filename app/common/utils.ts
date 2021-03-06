interface StringToNumber { [key: string]: number }
interface NumberToString { [key: number]: string }
interface StringToString { [key: string]: string }

/**
 * Swap keys for values
 * @param {numberToString} obj
 * @returns {stringToNumber}
 */
export function kvSwap(obj: NumberToString): StringToNumber
export function kvSwap(obj: StringToNumber): NumberToString
export function kvSwap(obj: StringToString): StringToString
export function kvSwap(obj: StringToNumber | NumberToString | StringToString): any {
  return Object
    .entries(obj)
    .reduce((acc, [key, value]) => {
      return { ...acc, [value]: key }
    }, {})
}

export const assertNever = (_x: never) => undefined
