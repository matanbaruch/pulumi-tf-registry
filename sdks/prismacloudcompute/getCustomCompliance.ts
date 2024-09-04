// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCustomCompliance(args: GetCustomComplianceArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomComplianceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("prismacloudcompute:index/getCustomCompliance:getCustomCompliance", {
        "name": args.name,
        "script": args.script,
        "severity": args.severity,
        "title": args.title,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCustomCompliance.
 */
export interface GetCustomComplianceArgs {
    name: string;
    script?: string;
    severity?: string;
    title?: string;
}

/**
 * A collection of values returned by getCustomCompliance.
 */
export interface GetCustomComplianceResult {
    readonly id: string;
    readonly name: string;
    readonly prismaId: number;
    readonly script?: string;
    readonly severity?: string;
    readonly title?: string;
}
export function getCustomComplianceOutput(args: GetCustomComplianceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCustomComplianceResult> {
    return pulumi.output(args).apply((a: any) => getCustomCompliance(a, opts))
}

/**
 * A collection of arguments for invoking getCustomCompliance.
 */
export interface GetCustomComplianceOutputArgs {
    name: pulumi.Input<string>;
    script?: pulumi.Input<string>;
    severity?: pulumi.Input<string>;
    title?: pulumi.Input<string>;
}
