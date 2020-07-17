const Items = require("./items.model");

const getItem = async (req, res, next) => {
  try {
    const data = await Items.findAll();
    return res.status(201).json(data);
  } catch (err) {
    next(err);
  }
};
const createItem = async (req, res, next) => {
  try {
    const { price, image, title, description } = req.body;
    const item = await Items.create({
      price,
      image,
      title,
      description,
    });
    return res.status(201).json({
      price: item.price,
      image: item.image,
      title: item.title,
      description: item.description,
      id: item.id,
    });
  } catch (err) {
    next(err);
  }
};

const updateItem = async (req, res, next) => {
    const id = req.params.id;

  try {
    const data = req.body;
    console.log(data);
    await Items.update(data, {
      where: {
        id: id,
      },
    }).then((item) => {
      res.status(200).json({ status: "success" });
      console.log("Обновленный объект", item);
    });
  } catch (err) {
    next(err);
  }
};

const deleteItem = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Items.destroy({
      where: {
        id: id,
      },
    })
    // .then((item) => {
        res.status(204).json({ status: "success" });
        // console.log("Обновленный объект", item);
      // });
  } catch (err) {
    next(err);
  }
};

module.exports = { getItem, createItem, updateItem, deleteItem };
