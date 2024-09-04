// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAnnouncementsServiceAnnouncementSubscriptions(args: GetAnnouncementsServiceAnnouncementSubscriptionsArgs, opts?: pulumi.InvokeOptions): Promise<GetAnnouncementsServiceAnnouncementSubscriptionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getAnnouncementsServiceAnnouncementSubscriptions:getAnnouncementsServiceAnnouncementSubscriptions", {
        "compartmentId": args.compartmentId,
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "state": args.state,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAnnouncementsServiceAnnouncementSubscriptions.
 */
export interface GetAnnouncementsServiceAnnouncementSubscriptionsArgs {
    compartmentId: string;
    displayName?: string;
    filters?: inputs.GetAnnouncementsServiceAnnouncementSubscriptionsFilter[];
    id?: string;
    state?: string;
}

/**
 * A collection of values returned by getAnnouncementsServiceAnnouncementSubscriptions.
 */
export interface GetAnnouncementsServiceAnnouncementSubscriptionsResult {
    readonly announcementSubscriptionCollections: outputs.GetAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollection[];
    readonly compartmentId: string;
    readonly displayName?: string;
    readonly filters?: outputs.GetAnnouncementsServiceAnnouncementSubscriptionsFilter[];
    readonly id?: string;
    readonly state?: string;
}
export function getAnnouncementsServiceAnnouncementSubscriptionsOutput(args: GetAnnouncementsServiceAnnouncementSubscriptionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAnnouncementsServiceAnnouncementSubscriptionsResult> {
    return pulumi.output(args).apply((a: any) => getAnnouncementsServiceAnnouncementSubscriptions(a, opts))
}

/**
 * A collection of arguments for invoking getAnnouncementsServiceAnnouncementSubscriptions.
 */
export interface GetAnnouncementsServiceAnnouncementSubscriptionsOutputArgs {
    compartmentId: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetAnnouncementsServiceAnnouncementSubscriptionsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
}
