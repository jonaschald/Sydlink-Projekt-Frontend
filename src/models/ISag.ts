enum SagsKategori {
  Internet = "Internet",
  Fiber = "Fiber",
  WiFi = "WiFi",
  Router = "Router",
  Fakturering = "Fakturering",
  Andet = "Andet"
}

enum SagsStatus {
  Ny = "Ny",
  UnderBehandling = "UnderBehandling",
  AfventerKunden = "AfventerKunden",
  Løst = "Løst",
  Lukket = "Lukket"
}

enum SagsPrioritet {
  Haster = "Haster",
  Normal = "Normal",
  KanVente = "KanVente"
}

interface ISag {
  sagId: number;
  titel: string;
  beskrivelse: string;

  kategori: SagsKategori;
  status: SagsStatus;
  prioritet: SagsPrioritet;

  oprettet: Date;

  kundeId: number;
  kunde: IKunde | null;
  medarbejderId: number | null;
  medarbejder: IMedarbejder | null;

  beskeder: IBesked[]
}
