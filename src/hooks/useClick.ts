const useClick = () => {
  const onLinkClick = (link: string) => {
    if (typeof window !== "undefined") {
      window.open(link, "_blank");
    }
  };
  return { onLinkClick };
};

export default useClick;
