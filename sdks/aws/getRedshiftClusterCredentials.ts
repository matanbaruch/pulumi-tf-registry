// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getRedshiftClusterCredentials(args: GetRedshiftClusterCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<GetRedshiftClusterCredentialsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getRedshiftClusterCredentials:getRedshiftClusterCredentials", {
        "autoCreate": args.autoCreate,
        "clusterIdentifier": args.clusterIdentifier,
        "dbGroups": args.dbGroups,
        "dbName": args.dbName,
        "dbUser": args.dbUser,
        "durationSeconds": args.durationSeconds,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRedshiftClusterCredentials.
 */
export interface GetRedshiftClusterCredentialsArgs {
    autoCreate?: boolean;
    clusterIdentifier: string;
    dbGroups?: string[];
    dbName?: string;
    dbUser: string;
    durationSeconds?: number;
    id?: string;
}

/**
 * A collection of values returned by getRedshiftClusterCredentials.
 */
export interface GetRedshiftClusterCredentialsResult {
    readonly autoCreate?: boolean;
    readonly clusterIdentifier: string;
    readonly dbGroups?: string[];
    readonly dbName?: string;
    readonly dbPassword: string;
    readonly dbUser: string;
    readonly durationSeconds?: number;
    readonly expiration: string;
    readonly id: string;
}
export function getRedshiftClusterCredentialsOutput(args: GetRedshiftClusterCredentialsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRedshiftClusterCredentialsResult> {
    return pulumi.output(args).apply((a: any) => getRedshiftClusterCredentials(a, opts))
}

/**
 * A collection of arguments for invoking getRedshiftClusterCredentials.
 */
export interface GetRedshiftClusterCredentialsOutputArgs {
    autoCreate?: pulumi.Input<boolean>;
    clusterIdentifier: pulumi.Input<string>;
    dbGroups?: pulumi.Input<pulumi.Input<string>[]>;
    dbName?: pulumi.Input<string>;
    dbUser: pulumi.Input<string>;
    durationSeconds?: pulumi.Input<number>;
    id?: pulumi.Input<string>;
}
