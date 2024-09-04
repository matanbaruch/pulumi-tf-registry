// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDmrCluster(args: GetDmrClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetDmrClusterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("solacebrokerappliance:index/getDmrCluster:getDmrCluster", {
        "dmrClusterName": args.dmrClusterName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDmrCluster.
 */
export interface GetDmrClusterArgs {
    dmrClusterName: string;
}

/**
 * A collection of values returned by getDmrCluster.
 */
export interface GetDmrClusterResult {
    readonly authenticationBasicEnabled: boolean;
    readonly authenticationBasicType: string;
    readonly authenticationClientCertEnabled: boolean;
    readonly directOnlyEnabled: boolean;
    readonly dmrClusterName: string;
    readonly enabled: boolean;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly nodeName: string;
    readonly tlsServerCertMaxChainDepth: number;
    readonly tlsServerCertValidateDateEnabled: boolean;
    readonly tlsServerCertValidateNameEnabled: boolean;
}
export function getDmrClusterOutput(args: GetDmrClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDmrClusterResult> {
    return pulumi.output(args).apply((a: any) => getDmrCluster(a, opts))
}

/**
 * A collection of arguments for invoking getDmrCluster.
 */
export interface GetDmrClusterOutputArgs {
    dmrClusterName: pulumi.Input<string>;
}
