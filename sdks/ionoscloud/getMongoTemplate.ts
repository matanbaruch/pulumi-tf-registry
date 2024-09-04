// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMongoTemplate(args?: GetMongoTemplateArgs, opts?: pulumi.InvokeOptions): Promise<GetMongoTemplateResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ionoscloud:index/getMongoTemplate:getMongoTemplate", {
        "id": args.id,
        "name": args.name,
        "partialMatch": args.partialMatch,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMongoTemplate.
 */
export interface GetMongoTemplateArgs {
    id?: string;
    name?: string;
    partialMatch?: boolean;
    timeouts?: inputs.GetMongoTemplateTimeouts;
}

/**
 * A collection of values returned by getMongoTemplate.
 */
export interface GetMongoTemplateResult {
    readonly cores: number;
    readonly edition: string;
    readonly id: string;
    readonly name: string;
    readonly partialMatch?: boolean;
    readonly ram: number;
    readonly storageSize: number;
    readonly timeouts?: outputs.GetMongoTemplateTimeouts;
}
export function getMongoTemplateOutput(args?: GetMongoTemplateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMongoTemplateResult> {
    return pulumi.output(args).apply((a: any) => getMongoTemplate(a, opts))
}

/**
 * A collection of arguments for invoking getMongoTemplate.
 */
export interface GetMongoTemplateOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    partialMatch?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.GetMongoTemplateTimeoutsArgs>;
}
