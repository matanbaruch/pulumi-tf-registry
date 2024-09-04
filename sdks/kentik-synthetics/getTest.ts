// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getTest(args: GetTestArgs, opts?: pulumi.InvokeOptions): Promise<GetTestResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("kentik-synthetics:index/getTest:getTest", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTest.
 */
export interface GetTestArgs {
    id: string;
}

/**
 * A collection of values returned by getTest.
 */
export interface GetTestResult {
    readonly cdate: string;
    readonly createdBies: outputs.GetTestCreatedBy[];
    readonly edate: string;
    readonly expiresOn: string;
    readonly id: string;
    readonly lastUpdatedBies: outputs.GetTestLastUpdatedBy[];
    readonly name: string;
    readonly settings: outputs.GetTestSetting[];
    readonly status: string;
    readonly type: string;
}
export function getTestOutput(args: GetTestOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTestResult> {
    return pulumi.output(args).apply((a: any) => getTest(a, opts))
}

/**
 * A collection of arguments for invoking getTest.
 */
export interface GetTestOutputArgs {
    id: pulumi.Input<string>;
}
