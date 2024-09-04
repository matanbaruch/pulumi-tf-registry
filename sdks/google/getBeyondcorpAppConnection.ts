// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getBeyondcorpAppConnection(args: GetBeyondcorpAppConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetBeyondcorpAppConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google:index/getBeyondcorpAppConnection:getBeyondcorpAppConnection", {
        "id": args.id,
        "name": args.name,
        "project": args.project,
        "region": args.region,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBeyondcorpAppConnection.
 */
export interface GetBeyondcorpAppConnectionArgs {
    id?: string;
    name: string;
    project?: string;
    region?: string;
}

/**
 * A collection of values returned by getBeyondcorpAppConnection.
 */
export interface GetBeyondcorpAppConnectionResult {
    readonly applicationEndpoints: outputs.GetBeyondcorpAppConnectionApplicationEndpoint[];
    readonly connectors: string[];
    readonly displayName: string;
    readonly effectiveLabels: {[key: string]: string};
    readonly gateways: outputs.GetBeyondcorpAppConnectionGateway[];
    readonly id: string;
    readonly labels: {[key: string]: string};
    readonly name: string;
    readonly project?: string;
    readonly region?: string;
    readonly terraformLabels: {[key: string]: string};
    readonly type: string;
}
export function getBeyondcorpAppConnectionOutput(args: GetBeyondcorpAppConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBeyondcorpAppConnectionResult> {
    return pulumi.output(args).apply((a: any) => getBeyondcorpAppConnection(a, opts))
}

/**
 * A collection of arguments for invoking getBeyondcorpAppConnection.
 */
export interface GetBeyondcorpAppConnectionOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
}
