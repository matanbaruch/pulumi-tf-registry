// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getLaunchTemplate(args?: GetLaunchTemplateArgs, opts?: pulumi.InvokeOptions): Promise<GetLaunchTemplateResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getLaunchTemplate:getLaunchTemplate", {
        "filters": args.filters,
        "id": args.id,
        "name": args.name,
        "tags": args.tags,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLaunchTemplate.
 */
export interface GetLaunchTemplateArgs {
    filters?: inputs.GetLaunchTemplateFilter[];
    id?: string;
    name?: string;
    tags?: {[key: string]: string};
    timeouts?: inputs.GetLaunchTemplateTimeouts;
}

/**
 * A collection of values returned by getLaunchTemplate.
 */
export interface GetLaunchTemplateResult {
    readonly arn: string;
    readonly blockDeviceMappings: outputs.GetLaunchTemplateBlockDeviceMapping[];
    readonly capacityReservationSpecifications: outputs.GetLaunchTemplateCapacityReservationSpecification[];
    readonly cpuOptions: outputs.GetLaunchTemplateCpuOption[];
    readonly creditSpecifications: outputs.GetLaunchTemplateCreditSpecification[];
    readonly defaultVersion: number;
    readonly description: string;
    readonly disableApiStop: boolean;
    readonly disableApiTermination: boolean;
    readonly ebsOptimized: string;
    readonly elasticGpuSpecifications: outputs.GetLaunchTemplateElasticGpuSpecification[];
    readonly elasticInferenceAccelerators: outputs.GetLaunchTemplateElasticInferenceAccelerator[];
    readonly enclaveOptions: outputs.GetLaunchTemplateEnclaveOption[];
    readonly filters?: outputs.GetLaunchTemplateFilter[];
    readonly hibernationOptions: outputs.GetLaunchTemplateHibernationOption[];
    readonly iamInstanceProfiles: outputs.GetLaunchTemplateIamInstanceProfile[];
    readonly id: string;
    readonly imageId: string;
    readonly instanceInitiatedShutdownBehavior: string;
    readonly instanceMarketOptions: outputs.GetLaunchTemplateInstanceMarketOption[];
    readonly instanceRequirements: outputs.GetLaunchTemplateInstanceRequirement[];
    readonly instanceType: string;
    readonly kernelId: string;
    readonly keyName: string;
    readonly latestVersion: number;
    readonly licenseSpecifications: outputs.GetLaunchTemplateLicenseSpecification[];
    readonly maintenanceOptions: outputs.GetLaunchTemplateMaintenanceOption[];
    readonly metadataOptions: outputs.GetLaunchTemplateMetadataOption[];
    readonly monitorings: outputs.GetLaunchTemplateMonitoring[];
    readonly name: string;
    readonly networkInterfaces: outputs.GetLaunchTemplateNetworkInterface[];
    readonly placements: outputs.GetLaunchTemplatePlacement[];
    readonly privateDnsNameOptions: outputs.GetLaunchTemplatePrivateDnsNameOption[];
    readonly ramDiskId: string;
    readonly securityGroupNames: string[];
    readonly tagSpecifications: outputs.GetLaunchTemplateTagSpecification[];
    readonly tags: {[key: string]: string};
    readonly timeouts?: outputs.GetLaunchTemplateTimeouts;
    readonly userData: string;
    readonly vpcSecurityGroupIds: string[];
}
export function getLaunchTemplateOutput(args?: GetLaunchTemplateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLaunchTemplateResult> {
    return pulumi.output(args).apply((a: any) => getLaunchTemplate(a, opts))
}

/**
 * A collection of arguments for invoking getLaunchTemplate.
 */
export interface GetLaunchTemplateOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetLaunchTemplateFilterArgs>[]>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.GetLaunchTemplateTimeoutsArgs>;
}
