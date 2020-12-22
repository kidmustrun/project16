

export interface MyWorker {
  id?: number;
  name: string;
  surname: string;
  middlename?: string;
  type: number;
  phone: string;
  birthday: string;
  email: string;
}

export enum MyWorkerType {
  programmer,
  finance,
  delivery,
  law
}


