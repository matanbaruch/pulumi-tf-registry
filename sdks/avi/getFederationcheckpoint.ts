// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFederationcheckpoint(args?: GetFederationcheckpointArgs, opts?: pulumi.InvokeOptions): Promise<GetFederationcheckpointResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("avi:index/getFederationcheckpoint:getFederationcheckpoint", {
        "id": args.id,
        "name": args.name,
        "tenantRef": args.tenantRef,
        "uuid": args.uuid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFederationcheckpoint.
 */
export interface GetFederationcheckpointArgs {
    id?: string;
    name?: string;
    tenantRef?: string;
    uuid?: string;
}

/**
 * A collection of values returned by getFederationcheckpoint.
 */
export interface GetFederationcheckpointResult {
    readonly configpbAttributes: outputs.GetFederationcheckpointConfigpbAttribute[];
    readonly date: string;
    readonly description: string;
    readonly id: string;
    readonly isFederated: string;
    readonly name: string;
    readonly tenantRef: string;
    readonly uuid: string;
}
export function getFederationcheckpointOutput(args?: GetFederationcheckpointOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFederationcheckpointResult> {
    return pulumi.output(args).apply((a: any) => getFederationcheckpoint(a, opts))
}

/**
 * A collection of arguments for invoking getFederationcheckpoint.
 */
export interface GetFederationcheckpointOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tenantRef?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}
