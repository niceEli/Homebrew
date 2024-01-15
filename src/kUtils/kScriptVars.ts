export function getVar(name: string) {
  return JSON.parse(sessionStorage.getItem("kScriptVars"))[name];
}
export function setVar(name: string, value: any) {
  sessionStorage.setItem(
    "kScriptVars",
    JSON.stringify(
      (JSON.parse(sessionStorage.getItem("kScriptVars"))[name] = value)
    )
  );
}
