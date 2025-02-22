export const api_url = process.env.APP_DEV_URL!;
export const apiPrefix = "api/";

export enum API_COLLECTION {
  users = "users/",
}

export enum UserFieldLabel {
  NOMBRE = "Nombre",
  APELLIDO = "Apellido",
  FECHA_NACIMIENTO = "Fecha de Nacimiento",
  TELEFONO = "Teléfono",
  TIPO_SANGRE = "Tipo de Sangre",
  ALERGIAS = "Alergias",
  CONDICIONES_PREEXISTENTES = "Condiciones Preexistentes",
  TRATAMIENTO_ACTUAL = "Tratamiento Actual",
  CONTACTOS_EMERGENCIA = "Contactos de Emergencia",
  POLIZA_SEGURO_MEDICO = "Póliza de Seguro Médico",
  VERSION = "Versión",
}

export const clientUrl = process.env.NODE_ENV === "development" ? "http://localhost:3000/" : process.env.PROD_URL
export const mongoUri = process.env.NODE_ENV === "development" ? process.env.MONGODB_URI_DEV : process.env.MONGODB_URI
