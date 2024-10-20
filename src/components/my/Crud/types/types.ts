import { IBreadcrumb } from "../../breadcrumb";

export type Field = {
  name: string;
  label: string;
  classHead?: string;
  classBody?: string;
  format?: string;
};

export type CrudType = {
  endPoint: string;
  emptyObject: Record<string, any>;
  fields: Field[];
  FormWrapper: React.FC<any>;
  validationSchema: any;
  displayMenu: string;
} & IBreadcrumb;


type ListItem = {
  [key: string]: any;
};

export type GridProps = {
  list: ListItem[]; 
  fields: Field[];
  enableBtnActions?: boolean; 
  loadShow: (item: ListItem) => void; 
  handleDelete: (item: ListItem) => void; 
};