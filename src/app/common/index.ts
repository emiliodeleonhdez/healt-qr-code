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

export const clientUrl =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_APP_URL_DEV
    : process.env.NEXT_PUBLIC_APP_URL;

export const mongoUri =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_MONGODB_URI_DEV
    : process.env.NEXT_PUBLIC_MONGODB_URI;
