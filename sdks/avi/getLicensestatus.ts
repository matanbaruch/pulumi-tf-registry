// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getLicensestatus(args?: GetLicensestatusArgs, opts?: pulumi.InvokeOptions): Promise<GetLicensestatusResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("avi:index/getLicensestatus:getLicensestatus", {
        "id": args.id,
        "uuid": args.uuid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLicensestatus.
 */
export interface GetLicensestatusArgs {
    id?: string;
    uuid?: string;
}

/**
 * A collection of values returned by getLicensestatus.
 */
export interface GetLicensestatusResult {
    readonly configpbAttributes: outputs.GetLicensestatusConfigpbAttribute[];
    readonly id: string;
    readonly saasStatuses: outputs.GetLicensestatusSaasStatus[];
    readonly serviceUpdates: outputs.GetLicensestatusServiceUpdate[];
    readonly tenantUuid: string;
    readonly uuid: string;
}
export function getLicensestatusOutput(args?: GetLicensestatusOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLicensestatusResult> {
    return pulumi.output(args).apply((a: any) => getLicensestatus(a, opts))
}

/**
 * A collection of arguments for invoking getLicensestatus.
 */
export interface GetLicensestatusOutputArgs {
    id?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}
