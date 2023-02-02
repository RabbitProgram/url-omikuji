const isSmartPhone = () => {
  return (
    window.matchMedia && window.matchMedia("(max-device-width: 640px)").matches
  );
};

export const Utils = {
  isSmartPhone,
};
