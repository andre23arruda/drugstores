import { DrugstoreProps } from "./Drugstore"

export type MedicineProps = {
	id: number,
	name: string,
	in_stock: boolean,
	updated_at: string,
	drugstore: DrugstoreProps,
}

export type MedicinesListProps = {
	list: MedicineProps[],
}
