export const strToCapitalize = (val: string): string =>
  val[0].toUpperCase() + val.substr(1)

export const slugToString = (str: string): string =>
  strToCapitalize(str.split('-').join(' '))

export default {
  slugToString,
}
