// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getServicePrincipals(args?: GetServicePrincipalsArgs, opts?: pulumi.InvokeOptions): Promise<GetServicePrincipalsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azuread:index/getServicePrincipals:getServicePrincipals", {
        "applicationIds": args.applicationIds,
        "clientIds": args.clientIds,
        "displayNames": args.displayNames,
        "id": args.id,
        "ignoreMissing": args.ignoreMissing,
        "objectIds": args.objectIds,
        "returnAll": args.returnAll,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getServicePrincipals.
 */
export interface GetServicePrincipalsArgs {
    /**
     * @deprecated Deprecated
     */
    applicationIds?: string[];
    clientIds?: string[];
    displayNames?: string[];
    id?: string;
    ignoreMissing?: boolean;
    objectIds?: string[];
    returnAll?: boolean;
    timeouts?: inputs.GetServicePrincipalsTimeouts;
}

/**
 * A collection of values returned by getServicePrincipals.
 */
export interface GetServicePrincipalsResult {
    /**
     * @deprecated Deprecated
     */
    readonly applicationIds: string[];
    readonly clientIds: string[];
    readonly displayNames: string[];
    readonly id: string;
    readonly ignoreMissing?: boolean;
    readonly objectIds: string[];
    readonly returnAll?: boolean;
    readonly servicePrincipals: outputs.GetServicePrincipalsServicePrincipal[];
    readonly timeouts?: outputs.GetServicePrincipalsTimeouts;
}
export function getServicePrincipalsOutput(args?: GetServicePrincipalsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServicePrincipalsResult> {
    return pulumi.output(args).apply((a: any) => getServicePrincipals(a, opts))
}

/**
 * A collection of arguments for invoking getServicePrincipals.
 */
export interface GetServicePrincipalsOutputArgs {
    /**
     * @deprecated Deprecated
     */
    applicationIds?: pulumi.Input<pulumi.Input<string>[]>;
    clientIds?: pulumi.Input<pulumi.Input<string>[]>;
    displayNames?: pulumi.Input<pulumi.Input<string>[]>;
    id?: pulumi.Input<string>;
    ignoreMissing?: pulumi.Input<boolean>;
    objectIds?: pulumi.Input<pulumi.Input<string>[]>;
    returnAll?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.GetServicePrincipalsTimeoutsArgs>;
}
