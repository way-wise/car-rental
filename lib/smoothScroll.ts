/**
 * Smooth scroll utility function for navigating to sections on the same page
 * @param targetId - The ID of the element to scroll to
 * @param offset - Optional offset from the top (default: 80px for navbar height)
 */
export const smoothScrollTo = (targetId: string, offset: number = 80) => {
  const element = document.getElementById(targetId);

  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

/**
 * Handle navigation with smooth scroll for same-page links
 * @param href - The href attribute from the link
 * @param offset - Optional offset from the top
 */
export const handleSmoothScroll = (href: string, offset: number = 80) => {
  // Check if it's a hash link (starts with #)
  if (href.startsWith("#")) {
    const targetId = href.substring(1); // Remove the # symbol
    smoothScrollTo(targetId, offset);
    return true; // Indicates smooth scroll was handled
  }
  return false; // Indicates this is not a hash link
};
