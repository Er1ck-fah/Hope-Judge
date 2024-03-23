import express from "express";
import {
  AddPays,
  DeletePays,
  GetPays,
  UpdatePays,
} from "../controllers/pays.js";
import {
  AddOrganisations,
  DeleteOrganisations,
  GetOrganisations,
  UpdateOrganisations,
} from "../controllers/organisation.js";
import {
  AddEvenements,
  DeleteEvenements,
  GetEvenements,
  UpdateEvenements,
} from "../controllers/evenement.js";
import {
  AddRubriques,
  DeleteRubriques,
  GetRubriques,
  UpdateRubriques,
} from "../controllers/rubrique.js";
import {
  AddCategories,
  DeleteCategories,
  GetCategories,
  UpdateCategories,
} from "../controllers/categorie.js";
import {
  EventRubrique,
  GetEventRubrique,
  GetEventRubriqueById,
  GetOrganisationEvent,
  GetOrganisationEventById,
  OrganisationEvent,
  UpdateEventRubrique,
  UpdateOrganisationEvent,
} from "../controllers/associationTable.js";

const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: [],
      message: "Welcome to our Dashboard!",
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
});

//== CRUD  PAYS ==
router.get("/pays", GetPays);
router.post("/pays", AddPays);
router.put("/pays/:id", UpdatePays);
router.delete("/pays/:id", DeletePays);
//== CRUD  ORGANISATION ==
router.get("/organisation", GetOrganisations);
router.post("/organisation", AddOrganisations);
router.put("/organisation/:id", UpdateOrganisations);
router.delete("/organisation/:id", DeleteOrganisations);
//== CRUD  EVENEMENT ==
router.get("/evenement", GetEvenements);
router.post("/evenement", AddEvenements);
router.put("/evenement/:id", UpdateEvenements);
router.delete("/evenement/:id", DeleteEvenements);
//== CRUD  RUBRIQUE ==
router.get("/rubrique", GetRubriques);
router.post("/rubrique", AddRubriques);
router.put("/rubrique/:id", UpdateRubriques);
router.delete("/rubrique/:id", DeleteRubriques);
//== CRUD  CATEGORIE ==
router.get("/categorie", GetCategories);
router.post("/categorie", AddCategories);
router.put("/categorie/:id", UpdateCategories);
router.delete("/categorie/:id", DeleteCategories);

//== CRUD  ORGANISATION-EVENEMENT ==
router.get("/org_ent", GetOrganisationEvent);
router.get("/org_ent/:id", GetOrganisationEventById);
router.post("/org_ent", OrganisationEvent);
router.put("/org_ent/:id", UpdateOrganisationEvent);

//== CRUD  EVENEMENT-RUBRIQUE ==
router.get("/event_rubriq", GetEventRubrique);
router.get("/event_rubriq/:id", GetEventRubriqueById);
router.post("/event_rubriq", EventRubrique);
router.put("/event_rubriq/:id", UpdateEventRubrique);

export default router;
