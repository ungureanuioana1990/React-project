export type User = {
  id:number;
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
  };
};
