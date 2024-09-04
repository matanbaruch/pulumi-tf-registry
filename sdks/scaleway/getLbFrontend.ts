// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getLbFrontend(args?: GetLbFrontendArgs, opts?: pulumi.InvokeOptions): Promise<GetLbFrontendResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("scaleway:index/getLbFrontend:getLbFrontend", {
        "frontendId": args.frontendId,
        "id": args.id,
        "lbId": args.lbId,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLbFrontend.
 */
export interface GetLbFrontendArgs {
    frontendId?: string;
    id?: string;
    lbId?: string;
    name?: string;
}

/**
 * A collection of values returned by getLbFrontend.
 */
export interface GetLbFrontendResult {
    readonly acls: outputs.GetLbFrontendAcl[];
    readonly backendId: string;
    readonly certificateId: string;
    readonly certificateIds: string[];
    readonly enableHttp3: boolean;
    readonly externalAcls: boolean;
    readonly frontendId?: string;
    readonly id: string;
    readonly inboundPort: number;
    readonly lbId?: string;
    readonly name?: string;
    readonly timeoutClient: string;
}
export function getLbFrontendOutput(args?: GetLbFrontendOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLbFrontendResult> {
    return pulumi.output(args).apply((a: any) => getLbFrontend(a, opts))
}

/**
 * A collection of arguments for invoking getLbFrontend.
 */
export interface GetLbFrontendOutputArgs {
    frontendId?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    lbId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
