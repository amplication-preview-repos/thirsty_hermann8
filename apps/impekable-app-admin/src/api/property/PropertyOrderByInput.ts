import { SortOrder } from "../../util/SortOrder";

export type PropertyOrderByInput = {
  additionalServices?: SortOrder;
  address?: SortOrder;
  cancellationPolicy?: SortOrder;
  createdAt?: SortOrder;
  emergencyContact?: SortOrder;
  guestCapacity?: SortOrder;
  houseRules?: SortOrder;
  id?: SortOrder;
  inventoryInstructions?: SortOrder;
  laundryAgreement?: SortOrder;
  numberOfBathrooms?: SortOrder;
  numberOfBedrooms?: SortOrder;
  principalService?: SortOrder;
  productsReposition?: SortOrder;
  propertyName?: SortOrder;
  propertyType?: SortOrder;
  qrCode?: SortOrder;
  specialInstructions?: SortOrder;
  squareMeters?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
