function validateAssignmentData(req, res, next) {
  console.log("Request body:", req.body);
  if (!req.body) {
    return res
      .status(400)
      .json({ message: "Request body is missing or empty" });
  }

  const { title, description, categories } = req.body;

  if (!title || title.length > 35) {
    return res
      .status(400)
      .json({ message: "Title must not be over 35 characters" });
  }

  if (!description || description.length > 150) {
    return res
      .status(400)
      .json({ message: "Description must not exceed 150 characters" });
  }

  if (!Array.isArray(categories) || categories.length === 0) {
    return res.status(400).json({
      message: "Categories must be an array with at least 1 value",
    });
  }

  next();
}

export default validateAssignmentData;
