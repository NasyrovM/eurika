
export class arrayUtils {
  public static split = (stringArray :string[], separator  = ',') :string =>
    (stringArray.length)
      ? stringArray.reduce((all, item) => all + separator + item, '').substring(separator.length)
      : '';
}
