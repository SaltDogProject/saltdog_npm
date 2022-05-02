declare module 'saltdog' {
    interface commands {
        /**
         * @param command command to register to context.
         * @param execFn  Function execute when `command` has been invoked
         * @description Register a global command to Saltdog
         */
        registerCommand: (command: string, execFn: (...args: any) => any) => any;
        /**
         * @param command command to run.
         * @param args  Params in `registerCommand`'s execFn.
         * @description Execute a global command in Saltdog.
         */
        executeCommand: (command: string, ...args: any) => any;
    }
    /**
     * @description SaltDog Commands
     */
    export const commands: commands;

    interface reader {
        /**
         * @param fn Callback function when text select on reader.
         * @description Listen text select events on all reader.
         */
        onTextSelect: (fn: (text: string) => any) => any;
    }
    /**
     * @description Saltdog reader Object.
     */
    export const reader: reader;
    /**
     * @returns ISaltDogPDFView | null
     * @description `PDFView` instence if current tab is a pdf tab, else return `null`.
     */
    export const getCurrentPDFView: () => ISaltDogPDFView | null;
}
interface ISaltDogPDFView {
    id: string;
}
