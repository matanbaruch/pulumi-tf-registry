// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getTsfApplication(args?: GetTsfApplicationArgs, opts?: pulumi.InvokeOptions): Promise<GetTsfApplicationResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getTsfApplication:getTsfApplication", {
        "applicationIdLists": args.applicationIdLists,
        "applicationResourceTypeLists": args.applicationResourceTypeLists,
        "applicationType": args.applicationType,
        "id": args.id,
        "microserviceType": args.microserviceType,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTsfApplication.
 */
export interface GetTsfApplicationArgs {
    applicationIdLists?: string[];
    applicationResourceTypeLists?: string[];
    applicationType?: string;
    id?: string;
    microserviceType?: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getTsfApplication.
 */
export interface GetTsfApplicationResult {
    readonly applicationIdLists?: string[];
    readonly applicationResourceTypeLists?: string[];
    readonly applicationType?: string;
    readonly id: string;
    readonly microserviceType?: string;
    readonly resultOutputFile?: string;
    readonly results: outputs.GetTsfApplicationResult[];
}
export function getTsfApplicationOutput(args?: GetTsfApplicationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTsfApplicationResult> {
    return pulumi.output(args).apply((a: any) => getTsfApplication(a, opts))
}

/**
 * A collection of arguments for invoking getTsfApplication.
 */
export interface GetTsfApplicationOutputArgs {
    applicationIdLists?: pulumi.Input<pulumi.Input<string>[]>;
    applicationResourceTypeLists?: pulumi.Input<pulumi.Input<string>[]>;
    applicationType?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    microserviceType?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
