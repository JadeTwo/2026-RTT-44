import type { ReactNode } from "react";

export interface NotificationCardProps {
    /** The notification's short heading. */
    title: string;
    /** The notification's descriptive content. */
    message: string;
    /** When the notification was created. */
    timestamp: string | number | Date;
    /** The visual severity of the notification. */
    severity: "info" | "warning" | "error" | "success";
    // /** Called when the user dismisses the notification. */
    // onDismiss: () => void;
    // /** Optional actions displayed with the notification. */
    // actions?: {
    //     /** The text displayed on the action button. */
    //     label: string;
    //     /** Called when the action button is clicked. */
    //     onClick: () => void;
    // }[];
    // /** An optional icon displayed with the notification. */
    // icon?: ReactNode;
    // /** Automatically dismisses the notification after this many seconds. */
    // autoDismissAfterSeconds?: number;
}