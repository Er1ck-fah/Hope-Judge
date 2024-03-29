import Event_Rubriq from "../models/event_rubriq.js";
import Organ_Event from "../models/organ_event.js";
import Rubriq_Categorie from "../models/rubriq_cat.js";

// === Organisation - Evenement === //
export async function GetOrganisationEvent(req, res) {
  try {
    const organ_event = await Organ_Event.find({});
    res.send(organ_event).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
export async function GetOrganisationEventById(req, res) {
  const { id } = req.params;
  try {
    const organ_event = await Organ_Event.find({ organisation: id });
    res.send(organ_event).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
export async function OrganisationEvent(req, res) {
  const { organisation, evenement, date_affectation } = req.body;

  try {
    const org_event = new Organ_Event({
      organisation,
      evenement,
      date_affectation,
    });
    await org_event.save();
    res.status(200).send(org_event);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
export async function UpdateOrganisationEvent(req, res) {
  const { id } = req.params;
  const { organisation, evenement, date_affectation } = req.body;

  try {
    const org_event = await Organ_Event.findByIdAndUpdate(
      id,
      { organisation, evenement, date_affectation },
      { new: true }
    );
    await org_event.save();
    res.status(200).send(org_event);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

// === Evenement -- Rubrique === //
export async function GetEventRubrique(req, res) {
  try {
    const event_rubriq = await Event_Rubriq.find({});
    res.send(event_rubriq).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
export async function GetEventRubriqueById(req, res) {
  const { id } = req.params;
  try {
    const event_rubriq = await Event_Rubriq.find({ evenement: id });
    res.send(event_rubriq).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
export async function EventRubrique(req, res) {
  const { evenement, rubrique, date_affectation } = req.body;

  try {
    const event_rubriq = new Event_Rubriq({
      evenement,
      rubrique,
      date_affectation,
    });
    await event_rubriq.save();
    res.status(200).send(event_rubriq);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
export async function UpdateEventRubrique(req, res) {
  const { id } = req.params;
  const { evenement, rubrique, date_affectation } = req.body;

  try {
    const event_rubriq = await Event_Rubriq.findByIdAndUpdate(
      id,
      { evenement, rubrique, date_affectation },
      { new: true }
    );
    res.status(200).send(event_rubriq);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

// == Rubrique -- Categorie  == //

export async function GetRubriqueCategorie(req, res) {
  try {
    const rubriq_categorie = await Rubriq_Categorie.find({});
    res.send(rubriq_categorie).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
export async function GetRubriqueCategorieById(req, res) {
  const { id } = req.params;
  try {
    const rubriq_cat = await Rubriq_Categorie.find({ rubrique: id });
    res.send(rubriq_cat).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
export async function RubriqueCategorie(req, res) {
  const { evenement, rubrique, date_affectation } = req.body;

  try {
    const rubriq_cat = new Rubrique_Categorie({
      rubrique,
      categorie,
      date_affectation,
    });
    await rubriq_cat.save();
    res.status(200).send(rubriq_cat);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
export async function UpdateRubriqueCategorie(req, res) {
  const { id } = req.params;
  const { rubrique, categorie, date_affectation } = req.body;

  try {
    const rubriq_cat = await Rubriq_Categorie.findByIdAndUpdate(
      id,
      { rubrique, categorie, date_affectation },
      { new: true }
    );
    res.status(200).send(rubriq_cat);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
