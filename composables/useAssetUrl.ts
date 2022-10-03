export default function generateImgSrc(path: string) {
  const asset = import(path)
  return asset.then(({ default: url }) => url)
}
