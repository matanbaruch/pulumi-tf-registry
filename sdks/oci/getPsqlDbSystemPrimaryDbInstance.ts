// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getPsqlDbSystemPrimaryDbInstance(args: GetPsqlDbSystemPrimaryDbInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetPsqlDbSystemPrimaryDbInstanceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getPsqlDbSystemPrimaryDbInstance:getPsqlDbSystemPrimaryDbInstance", {
        "dbSystemId": args.dbSystemId,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPsqlDbSystemPrimaryDbInstance.
 */
export interface GetPsqlDbSystemPrimaryDbInstanceArgs {
    dbSystemId: string;
    id?: string;
}

/**
 * A collection of values returned by getPsqlDbSystemPrimaryDbInstance.
 */
export interface GetPsqlDbSystemPrimaryDbInstanceResult {
    readonly dbInstanceId: string;
    readonly dbSystemId: string;
    readonly id: string;
}
export function getPsqlDbSystemPrimaryDbInstanceOutput(args: GetPsqlDbSystemPrimaryDbInstanceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPsqlDbSystemPrimaryDbInstanceResult> {
    return pulumi.output(args).apply((a: any) => getPsqlDbSystemPrimaryDbInstance(a, opts))
}

/**
 * A collection of arguments for invoking getPsqlDbSystemPrimaryDbInstance.
 */
export interface GetPsqlDbSystemPrimaryDbInstanceOutputArgs {
    dbSystemId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
