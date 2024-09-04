// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSchemas(args: GetSchemasArgs, opts?: pulumi.InvokeOptions): Promise<GetSchemasResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("databricks:index/getSchemas:getSchemas", {
        "catalogName": args.catalogName,
        "id": args.id,
        "ids": args.ids,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSchemas.
 */
export interface GetSchemasArgs {
    catalogName: string;
    id?: string;
    ids?: string[];
}

/**
 * A collection of values returned by getSchemas.
 */
export interface GetSchemasResult {
    readonly catalogName: string;
    readonly id: string;
    readonly ids: string[];
}
export function getSchemasOutput(args: GetSchemasOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSchemasResult> {
    return pulumi.output(args).apply((a: any) => getSchemas(a, opts))
}

/**
 * A collection of arguments for invoking getSchemas.
 */
export interface GetSchemasOutputArgs {
    catalogName: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
}
