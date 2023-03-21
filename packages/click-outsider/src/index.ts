export interface elementActionType {
  element: HTMLElement;
  callback?: () => unknown;
}

let elementActions: elementActionType[] = [];
const clickOutside = {
  init() {
    document.addEventListener("click", (event: MouseEvent) => {
      elementActions.forEach((elementAction) => {
        if (!elementAction.element.contains(event.target as Node)) {
          elementAction.callback?.();
        }
      });
    });
  },

  add(
    element: elementActionType["element"],
    callback?: elementActionType["callback"]
  ) {
    elementActions.push({ element, callback });
  },

  remove(element: elementActionType["element"]) {
    elementActions = elementActions.filter(
      (elementAction) => elementAction.element !== element
    );
  },
};

const isBrowser = typeof window !== "undefined";
isBrowser && clickOutside.init();

export default clickOutside;
