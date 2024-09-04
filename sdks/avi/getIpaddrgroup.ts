// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIpaddrgroup(args?: GetIpaddrgroupArgs, opts?: pulumi.InvokeOptions): Promise<GetIpaddrgroupResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("avi:index/getIpaddrgroup:getIpaddrgroup", {
        "id": args.id,
        "name": args.name,
        "tenantRef": args.tenantRef,
        "uuid": args.uuid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIpaddrgroup.
 */
export interface GetIpaddrgroupArgs {
    id?: string;
    name?: string;
    tenantRef?: string;
    uuid?: string;
}

/**
 * A collection of values returned by getIpaddrgroup.
 */
export interface GetIpaddrgroupResult {
    readonly addrs: outputs.GetIpaddrgroupAddr[];
    readonly configpbAttributes: outputs.GetIpaddrgroupConfigpbAttribute[];
    readonly countryCodes: string[];
    readonly description: string;
    readonly id: string;
    readonly ipPorts: outputs.GetIpaddrgroupIpPort[];
    readonly marathonAppName: string;
    readonly marathonServicePort: string;
    readonly markers: outputs.GetIpaddrgroupMarker[];
    readonly name: string;
    readonly prefixes: outputs.GetIpaddrgroupPrefix[];
    readonly ranges: outputs.GetIpaddrgroupRange[];
    readonly tenantRef: string;
    readonly uuid: string;
}
export function getIpaddrgroupOutput(args?: GetIpaddrgroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIpaddrgroupResult> {
    return pulumi.output(args).apply((a: any) => getIpaddrgroup(a, opts))
}

/**
 * A collection of arguments for invoking getIpaddrgroup.
 */
export interface GetIpaddrgroupOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tenantRef?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}
