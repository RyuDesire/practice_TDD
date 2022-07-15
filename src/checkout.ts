import { itemFactory } from "./Item";

export function checkout (itemList: String):number {
    let total = 0;

    for (const itemChar of itemList.split("")){
        const item = itemFactory(itemChar);
        total += item.getPrice();
    }
    return total;
}