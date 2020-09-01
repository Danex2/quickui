import React from "react";

export const useSubmitting = () => {
  const [submitting, setSubmitting] = React.useState(false);

  return {
    submitting,
    setSubmitting,
  };
};
