const Categories = require("../../api/v1/categories/model");
const { BadRequestError, NotFoundError } = require("../../errors");

const getAllCategories = async () => {
  const result = await Categories.find();

  return result;
};

const createCategories = async (req) => {
  const { name } = req.body;
  const check = await Categories.findOne({ name });

  if (check) throw new BadRequestError("Kategori nama duplikat");

  const result = await Categories.create({ name });

  return result;
};

const getOneCategories = async (req) => {
  const { id } = req.params;
  const result = await Categories.findOne({ _id: id });

  if (!result)
    throw new NotFoundError(`Kategori dengan id: ${id} tidak ditemukan`);

  return result;
};

const updateCategories = async (req) => {
  const { id } = req.params;
  const { name } = req.body;
  const check = await Categories.findOne({
    name,
    _id: { $ne: id },
  });

  if (check) throw new BadRequestError("Kategori nama duplikat");

  const result = await Categories.findOneAndUpdate(
    { _id: id },
    { name },
    { new: true, runValidators: true }
  );

  if (!result)
    throw new NotFoundError(`Kategori dengan id: ${id} tidak ditemukan`);

  return result;
};

const deleteCategories = async (req) => {
    const { id } = req.params;
  
    const category = await Categories.findById(id);
    if (!category) {
      throw new NotFoundError(`Kategori dengan id: ${id} tidak ditemukan`);
    }
  
    await Categories.deleteOne({ _id: id });
    return category;
  };

module.exports = {
  getAllCategories,
  createCategories,
  getOneCategories,
  updateCategories,
  deleteCategories,
};
