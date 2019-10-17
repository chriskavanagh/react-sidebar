import React from "react";
import { DivLine, Button } from "../styled/Closebutton";

const CloseButton = ({ click }) => {
  return (
    <Button>
      <DivLine className="toggle-button__line" />
      <DivLine className="toggle-button__line" />
      <DivLine className="toggle-button__line" />
    </Button>
  );
};

export default CloseButton;
