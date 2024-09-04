// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAccessPackageCatalog(args?: GetAccessPackageCatalogArgs, opts?: pulumi.InvokeOptions): Promise<GetAccessPackageCatalogResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azuread:index/getAccessPackageCatalog:getAccessPackageCatalog", {
        "displayName": args.displayName,
        "id": args.id,
        "objectId": args.objectId,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAccessPackageCatalog.
 */
export interface GetAccessPackageCatalogArgs {
    displayName?: string;
    id?: string;
    objectId?: string;
    timeouts?: inputs.GetAccessPackageCatalogTimeouts;
}

/**
 * A collection of values returned by getAccessPackageCatalog.
 */
export interface GetAccessPackageCatalogResult {
    readonly description: string;
    readonly displayName: string;
    readonly externallyVisible: boolean;
    readonly id: string;
    readonly objectId: string;
    readonly published: boolean;
    readonly timeouts?: outputs.GetAccessPackageCatalogTimeouts;
}
export function getAccessPackageCatalogOutput(args?: GetAccessPackageCatalogOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAccessPackageCatalogResult> {
    return pulumi.output(args).apply((a: any) => getAccessPackageCatalog(a, opts))
}

/**
 * A collection of arguments for invoking getAccessPackageCatalog.
 */
export interface GetAccessPackageCatalogOutputArgs {
    displayName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    objectId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetAccessPackageCatalogTimeoutsArgs>;
}
