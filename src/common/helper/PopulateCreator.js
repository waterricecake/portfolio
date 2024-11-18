const setPathPopulate = (pathName, getPathPopulates) => {
  const populate = {
    path: pathName,
  };
  const pathPopulates = getPathPopulates();
  if (pathPopulates) {
    populate['populate'] = pathPopulates;
  }
  return populate;
};

const getPopulates = (pathPopulates) => {
  const populates = [];
  for (const key in pathPopulates) {
    populates.push(setPathPopulate(key, pathPopulates[key]));
  }
  return populates;
};

export default getPopulates;
