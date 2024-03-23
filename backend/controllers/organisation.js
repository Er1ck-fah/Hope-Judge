import Organisations from "../models/organisation.js";

// Get list of country
export async function GetOrganisations(req, res) {
  try {
    const organisation = await Organisations.find({});
    res.send(organisation).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

// Create a new country
export async function AddOrganisations(req, res) {
  const { code_organisation, nom_organisation, description_organisation } =
    req.body;

  try {
    const organisation = new Organisations({
      code_organisation,
      nom_organisation,
      description_organisation,
    });
    await organisation.save();
    res.status(200).send(organisation);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

// Update Country information by id
export async function UpdateOrganisations(req, res) {
  const { id } = req.params;
  const { code_organisation, nom_organisation, description_organisation } =
    req.body;

  try {
    const organisation = await Organisations.findByIdAndUpdate(
      id,
      { code_organisation, nom_organisation, description_organisation },
      { new: true }
    );
    res.status(200).send(organisation);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

// Delete Country information by id
export async function DeleteOrganisations(req, res) {
  const { id } = req.params;
  try {
    const organisation = await Organisations.findByIdAndDelete(id);
    res.status(200).send(organisation);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
