import React from "react";
import RegistrationProcess from "../registration/components/RegistrationProcess";
import Payment from "../registration/components/Payment";
import RegButton from "../registration/components/RegButton";
import Form from "../registration/components/Form";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <RegistrationProcess />
      <Payment />
      <div className="text-2xl font-semibold md:mx-auto">
        Player Registration fee 200tk
      </div>
      <RegButton>
        <Form />
      </RegButton>
    </>
  );
};

export default page;
