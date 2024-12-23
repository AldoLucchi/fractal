import React, { FC } from "react";
import NftSearchForm from "./NftSearchForm";

export interface HeroSearchFormProps {
  className?: string;
}

const HeroSearchForm: FC<HeroSearchFormProps> = ({ className }) => {
  return (
    <div
      className={`nc-HeroSearchForm w-full max-w-4xl py-5 lg:py-0 ${className}`}
    >
      <NftSearchForm />
    </div>
  );
};

export default HeroSearchForm;
