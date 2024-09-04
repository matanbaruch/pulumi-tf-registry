// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getApprunnerService(args: GetApprunnerServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetApprunnerServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getApprunnerService:getApprunnerService", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getApprunnerService.
 */
export interface GetApprunnerServiceArgs {
    id: string;
}

/**
 * A collection of values returned by getApprunnerService.
 */
export interface GetApprunnerServiceResult {
    readonly autoScalingConfigurationArn: string;
    readonly encryptionConfiguration: outputs.GetApprunnerServiceEncryptionConfiguration;
    readonly healthCheckConfiguration: outputs.GetApprunnerServiceHealthCheckConfiguration;
    readonly id: string;
    readonly instanceConfiguration: outputs.GetApprunnerServiceInstanceConfiguration;
    readonly networkConfiguration: outputs.GetApprunnerServiceNetworkConfiguration;
    readonly observabilityConfiguration: outputs.GetApprunnerServiceObservabilityConfiguration;
    readonly serviceArn: string;
    readonly serviceId: string;
    readonly serviceName: string;
    readonly serviceUrl: string;
    readonly sourceConfiguration: outputs.GetApprunnerServiceSourceConfiguration;
    readonly status: string;
    readonly tags: outputs.GetApprunnerServiceTag[];
}
export function getApprunnerServiceOutput(args: GetApprunnerServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApprunnerServiceResult> {
    return pulumi.output(args).apply((a: any) => getApprunnerService(a, opts))
}

/**
 * A collection of arguments for invoking getApprunnerService.
 */
export interface GetApprunnerServiceOutputArgs {
    id: pulumi.Input<string>;
}
