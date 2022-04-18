declare module 'saltdog' {
    /**
     * @param command command to register to context.
     * @param execFn  Function execute when `command` has been invoked
     * @description Register a global command to Saltdog
     */
    export const registerCommand: (command: string, execFn: typeof Function) => any;

    /**
     * @returns ISaltDogPDFView | null
     * @description `PDFView` instence if current tab is a pdf tab, else return `null`.
     */
    export const getCurrentPDFView: () => ISaltDogPDFView | null;
}
interface ISaltDogPDFView {
    id: string;
}
