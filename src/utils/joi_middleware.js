module.exports = (schema, property = "body") => {
  return (req, res, next) => {
    const options = {
      abortEarly: true,
      allowUnknown: true,
      convert: true
    };

    const { error } = schema.validate(req[property], options);
    const valid = error == null;

    if (valid) {
      return next();
    } else {
      const { details } = error;
      const message = details.map((err) => err.message).join(",");

      return res.status(200).json({ success: false, message: message });
    }
  };
};
