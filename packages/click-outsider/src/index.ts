export interface elementActionType {
  element: HTMLElement;
  callback?: () => unknown;
}

class clickOutside {
  static elementActions: elementActionType[] = [];

  static {
    const isBrowser = typeof window !== "undefined";
    console.log(isBrowser);
    isBrowser && this.init();
  }

  static init() {
    document.addEventListener("click", (event: MouseEvent) => {
      clickOutside.elementActions.forEach((elementAction) => {
        if (!elementAction.element.contains(event.target as Node)) {
          elementAction.callback?.();
        }
      });
    });
  }

  static add(
    element: elementActionType["element"],
    callback?: elementActionType["callback"]
  ) {
    clickOutside.elementActions.push({ element, callback });
  }

  static remove(element: elementActionType["element"]) {
    clickOutside.elementActions = clickOutside.elementActions.filter(
      (elementAction) => elementAction.element !== element
    );
  }
}

export default clickOutside;
