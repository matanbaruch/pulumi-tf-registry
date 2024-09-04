// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getKafka(args: GetKafkaArgs, opts?: pulumi.InvokeOptions): Promise<GetKafkaResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aiven:index/getKafka:getKafka", {
        "id": args.id,
        "project": args.project,
        "serviceName": args.serviceName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getKafka.
 */
export interface GetKafkaArgs {
    id?: string;
    project: string;
    serviceName: string;
}

/**
 * A collection of values returned by getKafka.
 */
export interface GetKafkaResult {
    readonly additionalDiskSpace: string;
    readonly cloudName: string;
    readonly components: outputs.GetKafkaComponent[];
    readonly defaultAcl: boolean;
    readonly diskSpace: string;
    readonly diskSpaceCap: string;
    readonly diskSpaceDefault: string;
    readonly diskSpaceStep: string;
    readonly diskSpaceUsed: string;
    readonly id: string;
    readonly kafkaUserConfigs: outputs.GetKafkaKafkaUserConfig[];
    readonly kafkas: outputs.GetKafkaKafka[];
    readonly karapace: boolean;
    readonly maintenanceWindowDow: string;
    readonly maintenanceWindowTime: string;
    readonly plan: string;
    readonly project: string;
    readonly projectVpcId: string;
    readonly serviceHost: string;
    readonly serviceIntegrations: outputs.GetKafkaServiceIntegration[];
    readonly serviceName: string;
    readonly servicePassword: string;
    readonly servicePort: number;
    readonly serviceType: string;
    readonly serviceUri: string;
    readonly serviceUsername: string;
    readonly state: string;
    readonly staticIps: string[];
    readonly tags: outputs.GetKafkaTag[];
    readonly techEmails: outputs.GetKafkaTechEmail[];
    readonly terminationProtection: boolean;
}
export function getKafkaOutput(args: GetKafkaOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKafkaResult> {
    return pulumi.output(args).apply((a: any) => getKafka(a, opts))
}

/**
 * A collection of arguments for invoking getKafka.
 */
export interface GetKafkaOutputArgs {
    id?: pulumi.Input<string>;
    project: pulumi.Input<string>;
    serviceName: pulumi.Input<string>;
}
