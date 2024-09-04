// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatabaseManagementNamedCredential(args: GetDatabaseManagementNamedCredentialArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseManagementNamedCredentialResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDatabaseManagementNamedCredential:getDatabaseManagementNamedCredential", {
        "namedCredentialId": args.namedCredentialId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatabaseManagementNamedCredential.
 */
export interface GetDatabaseManagementNamedCredentialArgs {
    namedCredentialId: string;
}

/**
 * A collection of values returned by getDatabaseManagementNamedCredential.
 */
export interface GetDatabaseManagementNamedCredentialResult {
    readonly associatedResource: string;
    readonly compartmentId: string;
    readonly contents: outputs.GetDatabaseManagementNamedCredentialContent[];
    readonly definedTags: {[key: string]: string};
    readonly description: string;
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly lifecycleDetails: string;
    readonly name: string;
    readonly namedCredentialId: string;
    readonly scope: string;
    readonly state: string;
    readonly systemTags: {[key: string]: string};
    readonly timeCreated: string;
    readonly timeUpdated: string;
    readonly type: string;
}
export function getDatabaseManagementNamedCredentialOutput(args: GetDatabaseManagementNamedCredentialOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseManagementNamedCredentialResult> {
    return pulumi.output(args).apply((a: any) => getDatabaseManagementNamedCredential(a, opts))
}

/**
 * A collection of arguments for invoking getDatabaseManagementNamedCredential.
 */
export interface GetDatabaseManagementNamedCredentialOutputArgs {
    namedCredentialId: pulumi.Input<string>;
}
