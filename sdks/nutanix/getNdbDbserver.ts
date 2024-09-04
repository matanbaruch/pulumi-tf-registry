// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNdbDbserver(args?: GetNdbDbserverArgs, opts?: pulumi.InvokeOptions): Promise<GetNdbDbserverResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("nutanix:index/getNdbDbserver:getNdbDbserver", {
        "dbserverClusterId": args.dbserverClusterId,
        "id": args.id,
        "ip": args.ip,
        "name": args.name,
        "nxClusterId": args.nxClusterId,
        "tags": args.tags,
        "vmClusterId": args.vmClusterId,
        "vmClusterName": args.vmClusterName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNdbDbserver.
 */
export interface GetNdbDbserverArgs {
    dbserverClusterId?: string;
    id?: string;
    ip?: string;
    name?: string;
    nxClusterId?: string;
    tags?: inputs.GetNdbDbserverTag[];
    vmClusterId?: string;
    vmClusterName?: string;
}

/**
 * A collection of values returned by getNdbDbserver.
 */
export interface GetNdbDbserverResult {
    readonly accessKeyId: string;
    readonly accessLevel: string;
    readonly associatedTimeMachineIds: string[];
    readonly clientId: string;
    readonly clustered: boolean;
    readonly databaseType: string;
    readonly dateCreated: string;
    readonly dateModified: string;
    readonly dbserverClusterId: string;
    readonly dbserverInvalidEaState: boolean;
    readonly description: string;
    readonly eraDriveId: string;
    readonly eraVersion: string;
    readonly fqdns: string;
    readonly id: string;
    readonly ip?: string;
    readonly ipAddresses: string[];
    readonly isServerDriven: boolean;
    readonly macAddresses: string[];
    readonly name: string;
    readonly nxClusterId?: string;
    readonly properties: outputs.GetNdbDbserverProperty[];
    readonly protectionDomainId: string;
    readonly queryCount: number;
    readonly status: string;
    readonly tags?: outputs.GetNdbDbserverTag[];
    readonly type: string;
    readonly validDiagnosticBundleState: boolean;
    readonly vmClusterId?: string;
    readonly vmClusterName: string;
    readonly vmClusterUuid: string;
    readonly vmInfos: outputs.GetNdbDbserverVmInfo[];
    readonly vmTimezone: string;
    readonly windowsDbServer: boolean;
    readonly workingDirectory: string;
}
export function getNdbDbserverOutput(args?: GetNdbDbserverOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNdbDbserverResult> {
    return pulumi.output(args).apply((a: any) => getNdbDbserver(a, opts))
}

/**
 * A collection of arguments for invoking getNdbDbserver.
 */
export interface GetNdbDbserverOutputArgs {
    dbserverClusterId?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    ip?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nxClusterId?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetNdbDbserverTagArgs>[]>;
    vmClusterId?: pulumi.Input<string>;
    vmClusterName?: pulumi.Input<string>;
}
