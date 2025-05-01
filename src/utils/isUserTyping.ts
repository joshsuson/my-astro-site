export default function isUserTyping() {
  return (
    document.activeElement &&
    (/input|textarea|select/i.test(document.activeElement.tagName) ||
      document.activeElement.hasAttribute("contenteditable"))
  );
}
