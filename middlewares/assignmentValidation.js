function assignmentsValidation(req, res, next) {
  const { title, description, categories } = req.body;

  if (!title || typeof title !== "string" || title.length > 35) {
    return res
      .status(400)
      .json({ message: "Title must be a string and not exceed 35 characters" });
  }

  if (
    !description ||
    typeof description !== "string" ||
    description.length > 150
  ) {
    return res.status(400).json({
      message: "Description must be a string and not exceed 150 characters",
    });
  }

  if (!categories || !Array.isArray(categories) || categories.length === 0) {
    return res
      .status(400)
      .json({ message: "Categories must be an array with at least 1 value" });
  }
  console.log(
    `Do data validation on request: ${req.method} ${req.originalUrl}`
  );
  next();
}
export default assignmentsValidation;
