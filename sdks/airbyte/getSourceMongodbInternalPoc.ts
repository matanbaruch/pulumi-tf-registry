// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourceMongodbInternalPoc(args: GetSourceMongodbInternalPocArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMongodbInternalPocResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceMongodbInternalPoc:getSourceMongodbInternalPoc", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceMongodbInternalPoc.
 */
export interface GetSourceMongodbInternalPocArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceMongodbInternalPoc.
 */
export interface GetSourceMongodbInternalPocResult {
    readonly configuration: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceMongodbInternalPocOutput(args: GetSourceMongodbInternalPocOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSourceMongodbInternalPocResult> {
    return pulumi.output(args).apply((a: any) => getSourceMongodbInternalPoc(a, opts))
}

/**
 * A collection of arguments for invoking getSourceMongodbInternalPoc.
 */
export interface GetSourceMongodbInternalPocOutputArgs {
    sourceId: pulumi.Input<string>;
}
