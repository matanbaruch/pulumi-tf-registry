// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getL3outHsrpInterfaceProfile(args: GetL3outHsrpInterfaceProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetL3outHsrpInterfaceProfileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aci:index/getL3outHsrpInterfaceProfile:getL3outHsrpInterfaceProfile", {
        "annotation": args.annotation,
        "description": args.description,
        "id": args.id,
        "logicalInterfaceProfileDn": args.logicalInterfaceProfileDn,
        "nameAlias": args.nameAlias,
        "version": args.version,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getL3outHsrpInterfaceProfile.
 */
export interface GetL3outHsrpInterfaceProfileArgs {
    annotation?: string;
    description?: string;
    id?: string;
    logicalInterfaceProfileDn: string;
    nameAlias?: string;
    version?: string;
}

/**
 * A collection of values returned by getL3outHsrpInterfaceProfile.
 */
export interface GetL3outHsrpInterfaceProfileResult {
    readonly annotation: string;
    readonly description: string;
    readonly id: string;
    readonly logicalInterfaceProfileDn: string;
    readonly nameAlias: string;
    readonly version: string;
}
export function getL3outHsrpInterfaceProfileOutput(args: GetL3outHsrpInterfaceProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetL3outHsrpInterfaceProfileResult> {
    return pulumi.output(args).apply((a: any) => getL3outHsrpInterfaceProfile(a, opts))
}

/**
 * A collection of arguments for invoking getL3outHsrpInterfaceProfile.
 */
export interface GetL3outHsrpInterfaceProfileOutputArgs {
    annotation?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    logicalInterfaceProfileDn: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    version?: pulumi.Input<string>;
}
