export type Team = {
  createdAt: Date;
  creationDate: Date | null;
  creator: string | null;
  description: string | null;
  id: string;
  objectives: string | null;
  status?: "Option1" | null;
  teamName: string | null;
  teamType?: "Option1" | null;
  updatedAt: Date;
};
