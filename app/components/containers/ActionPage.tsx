import { ReactNode } from "react";
import Phone from "../phone/Phone";
import PhoneContainer from "./PhoneContainer";
import { LinkProps } from "@/app/types/profileDetails";
import PageContainer from "./PageContainer";
import ActionContainer from "./ActionContainer";
import { ProfileDetailsProps } from "@/app/types/profileDetails";

interface ActionPageProps {
  headerComponent?: ReactNode;
  actionComponent: ReactNode;
  saveComponent?: ReactNode;
  links: LinkProps[];
  profileDetails?: ProfileDetailsProps;
}

export default function ActionPage(props: ActionPageProps) {
  return (
    <PageContainer>
      <PhoneContainer>
        <Phone
          profileLinks={props.links}
          profileDetails={props.profileDetails}
        />
      </PhoneContainer>
      <ActionContainer
        headerComponent={props.headerComponent}
        actionComponent={props.actionComponent}
        saveComponent={props.saveComponent}
      />
    </PageContainer>
  );
}
