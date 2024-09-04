// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMysql(args: GetMysqlArgs, opts?: pulumi.InvokeOptions): Promise<GetMysqlResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aiven:index/getMysql:getMysql", {
        "id": args.id,
        "project": args.project,
        "serviceName": args.serviceName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMysql.
 */
export interface GetMysqlArgs {
    id?: string;
    project: string;
    serviceName: string;
}

/**
 * A collection of values returned by getMysql.
 */
export interface GetMysqlResult {
    readonly additionalDiskSpace: string;
    readonly cloudName: string;
    readonly components: outputs.GetMysqlComponent[];
    readonly diskSpace: string;
    readonly diskSpaceCap: string;
    readonly diskSpaceDefault: string;
    readonly diskSpaceStep: string;
    readonly diskSpaceUsed: string;
    readonly id: string;
    readonly maintenanceWindowDow: string;
    readonly maintenanceWindowTime: string;
    readonly mysqlUserConfigs: outputs.GetMysqlMysqlUserConfig[];
    readonly mysqls: outputs.GetMysqlMysql[];
    readonly plan: string;
    readonly project: string;
    readonly projectVpcId: string;
    readonly serviceHost: string;
    readonly serviceIntegrations: outputs.GetMysqlServiceIntegration[];
    readonly serviceName: string;
    readonly servicePassword: string;
    readonly servicePort: number;
    readonly serviceType: string;
    readonly serviceUri: string;
    readonly serviceUsername: string;
    readonly state: string;
    readonly staticIps: string[];
    readonly tags: outputs.GetMysqlTag[];
    readonly techEmails: outputs.GetMysqlTechEmail[];
    readonly terminationProtection: boolean;
}
export function getMysqlOutput(args: GetMysqlOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMysqlResult> {
    return pulumi.output(args).apply((a: any) => getMysql(a, opts))
}

/**
 * A collection of arguments for invoking getMysql.
 */
export interface GetMysqlOutputArgs {
    id?: pulumi.Input<string>;
    project: pulumi.Input<string>;
    serviceName: pulumi.Input<string>;
}
