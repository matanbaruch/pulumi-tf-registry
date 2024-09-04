// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getKafkaConnect(args: GetKafkaConnectArgs, opts?: pulumi.InvokeOptions): Promise<GetKafkaConnectResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aiven:index/getKafkaConnect:getKafkaConnect", {
        "id": args.id,
        "project": args.project,
        "serviceName": args.serviceName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getKafkaConnect.
 */
export interface GetKafkaConnectArgs {
    id?: string;
    project: string;
    serviceName: string;
}

/**
 * A collection of values returned by getKafkaConnect.
 */
export interface GetKafkaConnectResult {
    readonly additionalDiskSpace: string;
    readonly cloudName: string;
    readonly components: outputs.GetKafkaConnectComponent[];
    readonly diskSpace: string;
    readonly diskSpaceCap: string;
    readonly diskSpaceDefault: string;
    readonly diskSpaceStep: string;
    readonly diskSpaceUsed: string;
    readonly id: string;
    readonly kafkaConnectUserConfigs: outputs.GetKafkaConnectKafkaConnectUserConfig[];
    readonly maintenanceWindowDow: string;
    readonly maintenanceWindowTime: string;
    readonly plan: string;
    readonly project: string;
    readonly projectVpcId: string;
    readonly serviceHost: string;
    readonly serviceIntegrations: outputs.GetKafkaConnectServiceIntegration[];
    readonly serviceName: string;
    readonly servicePassword: string;
    readonly servicePort: number;
    readonly serviceType: string;
    readonly serviceUri: string;
    readonly serviceUsername: string;
    readonly state: string;
    readonly staticIps: string[];
    readonly tags: outputs.GetKafkaConnectTag[];
    readonly techEmails: outputs.GetKafkaConnectTechEmail[];
    readonly terminationProtection: boolean;
}
export function getKafkaConnectOutput(args: GetKafkaConnectOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKafkaConnectResult> {
    return pulumi.output(args).apply((a: any) => getKafkaConnect(a, opts))
}

/**
 * A collection of arguments for invoking getKafkaConnect.
 */
export interface GetKafkaConnectOutputArgs {
    id?: pulumi.Input<string>;
    project: pulumi.Input<string>;
    serviceName: pulumi.Input<string>;
}
