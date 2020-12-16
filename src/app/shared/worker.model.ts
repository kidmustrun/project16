export interface MyWorker {
  id?: number;
  name: string;
  surname: string;
  type: number;
  phone: string;
}

export enum MyWorkerType {
  programmer,
  designer,
  copywriter,
  manager,
}

export let MyWorkersDatabase: MyWorker[] = [
  { id: 1, name: 'Иван', surname: 'Иванов', type: 0, phone: '89206474001' },
  { id: 2, name: 'Петр', surname: 'Петров', type: 1, phone: '89206474002' },
  { id: 3, name: 'Сидор', surname: 'Сидоров', type: 2, phone: '89206474003'},
  { id: 4, name: 'Василий', surname: 'Васильев', type: 3, phone: '89206474004'},
];
