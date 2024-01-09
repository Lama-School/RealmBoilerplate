import Realm from "realm";

export const HistoricalAsymetricSchema = {
  name: "HistoricalAsymetric",
  properties: {
    _id: "objectId",
    chargestatus: "string?",
    creation: "date?",
    detectionmode: "string?",
    docstatus: "int?",
    finger_temperature: "float",
    hr: "int",
    hrv: "int",
    modified: "date?",
    modified_by: "string?",
    motion: "int",
    owner: "string?",
    ox: "int",
    raw_heart_rate: "string?",
    sn: "int?",
    steps: "int",
    ts: "int",
    user: "string",
    uuid: "int?",
    wearstatus: "string?",
  },
  primaryKey: "_id",
};
