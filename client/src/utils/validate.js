export const validateString = (str, strType) => {
  let errorText = "";
  const urlPattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  switch (strType) {
    case "url":
      if (!str) {
        errorText = "You must enter a URL";
      } else {
        errorText = !!urlPattern.test(str) ? "" : "You must enter a valid URL";
      }
      break;
    case "alias":
      if (!str) {
        errorText = "You must enter an alias";
      }
      break;
    default:
      break;
  }
  return errorText;
};
