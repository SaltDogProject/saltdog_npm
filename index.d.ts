declare module 'saltdog' {
    /**
     * @description SaltDog Commands
     */
    interface commands {
        /**
         * @param command command to register to context.
         * @param execFn  Function execute when `command` has been invoked
         * @description Register a global command to Saltdog
         */
        registerCommand: (command: string, execFn: (...args: any)=>any) => any;
        /**
         * @param command command to run.
         * @param args  Params in `registerCommand`'s execFn.
         * @description Execute a global command in Saltdog.
         */
        executeCommand:(command:string, ...args:any)=>any;
    }
    export const commands:commands;
    /**
     * @returns ISaltDogPDFView | null
     * @description `PDFView` instence if current tab is a pdf tab, else return `null`.
     */
    export const getCurrentPDFView: () => ISaltDogPDFView | null;
}
interface ISaltDogPDFView {
    id: string;
}
