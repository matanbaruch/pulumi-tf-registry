// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSchema(args: GetSchemaArgs, opts?: pulumi.InvokeOptions): Promise<GetSchemaResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("mso:index/getSchema:getSchema", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSchema.
 */
export interface GetSchemaArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getSchema.
 */
export interface GetSchemaResult {
    readonly description: string;
    readonly id: string;
    readonly name: string;
    /**
     * @deprecated Deprecated
     */
    readonly templateName: string;
    readonly templates: outputs.GetSchemaTemplate[];
    /**
     * @deprecated Deprecated
     */
    readonly tenantId: string;
}
export function getSchemaOutput(args: GetSchemaOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSchemaResult> {
    return pulumi.output(args).apply((a: any) => getSchema(a, opts))
}

/**
 * A collection of arguments for invoking getSchema.
 */
export interface GetSchemaOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
