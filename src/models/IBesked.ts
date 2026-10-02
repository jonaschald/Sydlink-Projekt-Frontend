interface IBesked {
  beskedId: number;
  titel: string;
  sagsNummer: number;
  beskeden: string;
  oprettet: Date;
  sag: ISag | null;
  kundeId: number | null;
  kunde: IKunde | null;
  medarbejderId: number | null;
  medarbejder: string
}
