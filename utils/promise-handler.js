const handle = promise => {
  return promise.then(res => [null, res]).catch(err => [err, null]);
};

export default handle;
