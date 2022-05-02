import { createContext } from "react";
import SHOP_DATA from "./shopdata";

const CollectionsContext = createContext(SHOP_DATA) // this collections context store the value
// of shop_data

export default CollectionsContext