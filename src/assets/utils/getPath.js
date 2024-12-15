function getPathName(path) {
  const newPath = path.split('/');
  return newPath[newPath.length - 1];
}

export default getPathName;