import Categories from "../models/categorie.js";

// Get list of Element
export async function GetCategories(req, res) {
  try {
    const categorie = await Categories.find({});
    res.send(categorie).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

// Create a new Element
export async function AddCategories(req, res) {
  const { code_categorie, nom_categorie, description_categorie } = req.body;

  try {
    const categorie = new Categories({
      code_categorie,
      nom_categorie,
      description_categorie,
    });
    await categorie.save();
    res.status(200).send(categorie);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

// Update Element information by id
export async function UpdateCategories(req, res) {
  const { id } = req.params;
  const { code_categorie, nom_categorie, description_categorie } = req.body;

  try {
    const categorie = await Categories.findByIdAndUpdate(
      id,
      { code_categorie, nom_categorie, description_categorie },
      { new: true }
    );
    res.status(200).send(categorie);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

// Delete Element information by id
export async function DeleteCategories(req, res) {
  const { id } = req.params;
  try {
    const categorie = await Categories.findByIdAndDelete(id);
    res.status(200).send(categorie);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
