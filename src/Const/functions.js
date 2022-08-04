export const toggleAttr = (selector, condition, attribute, value) => {
	condition && selector?.setAttribute(attribute, value);
	!condition && selector?.removeAttribute(attribute, value);
}