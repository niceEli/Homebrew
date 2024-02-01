export function run(enumPath: string) {
  let realPath = "";
  for (let i = 0; i < String(enumPath).length; i++) {
    const element = String(enumPath).charAt(i);
    if (element == "_") {
      realPath += "/";
    } else {
      realPath += element;
    }
  }
  return realPath;
}
