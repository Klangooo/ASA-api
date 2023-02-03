import { Router } from "express";
import { CompanyController } from "./controller/companyController";
import { AirportListController } from "./controller/airportListController";
import { ConsultFlightController } from "./controller/consultFlightController";
import { RegisterUserController } from "./controller/registerUserController";

const registerUserController = new RegisterUserController();
const airportListController = new AirportListController();
const companyController = new CompanyController();
const consultFlightController = new ConsultFlightController();

const router = Router();

router.post("/userCreate", registerUserController.create);
router.post("/userLogin", registerUserController.login);
router.post("/userValidation", registerUserController.validation);
router.post("/userLogout", registerUserController.logout);

router.post("/airportCreate", airportListController.create);
router.post("/airportList", airportListController.listByAirline);

router.post("/companyCreate", companyController.create);

router.post("/flightCreate", consultFlightController.create);
router.post("/flightListByOrigin", consultFlightController.listByOrigin);
router.post("/flightListByAirlineDate", consultFlightController.listByAirlineDate);
router.post("/flightListByPrice", consultFlightController.listByPrice);
router.post("/flightReservation", consultFlightController.reservation);

export { router };
