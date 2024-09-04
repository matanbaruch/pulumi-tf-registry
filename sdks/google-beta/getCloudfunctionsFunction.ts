// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCloudfunctionsFunction(args: GetCloudfunctionsFunctionArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudfunctionsFunctionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google-beta:index/getCloudfunctionsFunction:getCloudfunctionsFunction", {
        "id": args.id,
        "name": args.name,
        "project": args.project,
        "region": args.region,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCloudfunctionsFunction.
 */
export interface GetCloudfunctionsFunctionArgs {
    id?: string;
    name: string;
    project?: string;
    region?: string;
}

/**
 * A collection of values returned by getCloudfunctionsFunction.
 */
export interface GetCloudfunctionsFunctionResult {
    readonly availableMemoryMb: number;
    readonly buildEnvironmentVariables: {[key: string]: string};
    readonly buildServiceAccount: string;
    readonly buildWorkerPool: string;
    readonly description: string;
    readonly dockerRegistry: string;
    readonly dockerRepository: string;
    readonly effectiveLabels: {[key: string]: string};
    readonly entryPoint: string;
    readonly environmentVariables: {[key: string]: string};
    readonly eventTriggers: outputs.GetCloudfunctionsFunctionEventTrigger[];
    readonly httpsTriggerSecurityLevel: string;
    readonly httpsTriggerUrl: string;
    readonly id: string;
    readonly ingressSettings: string;
    readonly kmsKeyName: string;
    readonly labels: {[key: string]: string};
    readonly maxInstances: number;
    readonly minInstances: number;
    readonly name: string;
    readonly project?: string;
    readonly region?: string;
    readonly runtime: string;
    readonly secretEnvironmentVariables: outputs.GetCloudfunctionsFunctionSecretEnvironmentVariable[];
    readonly secretVolumes: outputs.GetCloudfunctionsFunctionSecretVolume[];
    readonly serviceAccountEmail: string;
    readonly sourceArchiveBucket: string;
    readonly sourceArchiveObject: string;
    readonly sourceRepositories: outputs.GetCloudfunctionsFunctionSourceRepository[];
    readonly status: string;
    readonly terraformLabels: {[key: string]: string};
    readonly timeout: number;
    readonly triggerHttp: boolean;
    readonly versionId: string;
    readonly vpcConnector: string;
    readonly vpcConnectorEgressSettings: string;
}
export function getCloudfunctionsFunctionOutput(args: GetCloudfunctionsFunctionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudfunctionsFunctionResult> {
    return pulumi.output(args).apply((a: any) => getCloudfunctionsFunction(a, opts))
}

/**
 * A collection of arguments for invoking getCloudfunctionsFunction.
 */
export interface GetCloudfunctionsFunctionOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
}
