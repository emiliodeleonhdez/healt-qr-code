import { UserData } from "@/app/models/Users";
import { EmergencyContact } from "../EmergencyContacts";

interface IProfilePic {
  profilePicUrl?: string;
  name: string;
}

interface ICardProps {
  cardTitle: string;
  description: string | string[];
}

interface IMultipleItemsCardProps {
  cardTitle: string;
  description: EmergencyContact;
}

export type { IProfilePic, ICardProps, IMultipleItemsCardProps };
