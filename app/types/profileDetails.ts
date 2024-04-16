export interface ProfileDetailsProps {
  email: string;
  name: string;
  picture: string;
}

export interface ProfileProps {
  id: string;
  auth0Id: string;
  email: string;
  name: string;
  picture: string;
  links: LinkProps[];
}

export interface LinkProps {
  id: string;
  platform: string;
  url: string;
}
