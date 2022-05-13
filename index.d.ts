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
    interface sidebar {
        /**
         * @returns boolean
         * @description Check if `viewName` is open.
         */
        isOpen: () => boolean;

        /**
         * @param channel Channel to send.
         * @param `...args` Args to send.
         * @description Send a message to `viewName`'s sidebar.
         */
        send: (channel: string, ...args: any) => void;

        /**
         * @param channel Channel to listen.
         * @param callback Callback function to execute when `channel` has been received.
         * @description Listen `channel` on `viewName`'s sidebar.
         */
        on: (channel: string, callback: (...args: any) => any) => void;

        /**
         * @param action `open` or `close` action.
         * @param callback Callback function to execute when `viewName` has been opened or closed.
         * @description Listen `viewName`'s visibility change.
         */
        onVisibilityChange: (action: 'open' | 'close', callback: (...args: any) => any) => void;
    }

    export const sidebar: {
        /**
         * @param viewName viewName.
         * @returns sidebar | null if not registered.
         * @description Get `viewName` to invoke sidebar methods.
         */
        getSidebarView: (viewName: string) => sidebar | null;
    };

    interface StatusBar {
        readonly id: string;
        readonly alignment: StatusBarAlignment;
        command: string | null;
        text: string | null;
        tooltip: string | null;
        readonly priority: number;
        color: string | null;
        backgroundColor: string | null;
        /**
         * Show the StatusBarItem in Statusbar
         */
        show: () => void;
        /**
         * Hide the StatusBarItem in Statusbar
         */
        hide: () => void;
    }
    enum StatusBarAlignment {
        Right = 0,
        Left = 1,
    }
    export const statusbar: {
        /**
         * @param id StatusBar's identifier, cannot change after created.
         * @param alignment (optional) StatusBarAlignment.Left or Right Default: Right
         * @param priority (optional) The order in Left/Right. Default:0
         * @returns `StatusBar`
         */
        createStatusBarItem(id: string, alignment?: StatusBarAlignment, priority?: number): StatusBar;
    };
}
interface ISaltDogPDFView {
    id: string;
}
