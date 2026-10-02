interface IMedarbejder {
  medarbejderId: number;
  navn: string;
  email: string;
  kodeord: string;

  sager: ISag[];
  beskeder: IBesked[];
}
