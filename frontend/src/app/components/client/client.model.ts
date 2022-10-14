export interface Client {
  id?: number;
  type?: 1;
  name: string;
  cpfCnpj: number | null;
  nameFantasy?: string;
  cep: number | null;
  adress: string;
  bairro: string;
  city: string;
  cellphone: number | null;
  email: string;
}
