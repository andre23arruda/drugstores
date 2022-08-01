import { DrugstoreProps } from "./Drugstore"

export type MedicineProps = {
	id: number,
	name: string,
	in_stock: boolean,
	drugstore: DrugstoreProps,
}
