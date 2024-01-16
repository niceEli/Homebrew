export default async function delay(ms) {
  new Promise((res) => setTimeout(res, ms));
}