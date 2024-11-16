const HandleNoResourceException = (req, res, next) => {
  const error = new Error(`no resource for ${req.method} ${req.url}`);
  error.status = 404;
  next(error);
};

const ExecuteRouter = (router, next) => {
  try {
    router();
  } catch (err) {
    next(err);
  }
};

export { HandleNoResourceException, ExecuteRouter };
