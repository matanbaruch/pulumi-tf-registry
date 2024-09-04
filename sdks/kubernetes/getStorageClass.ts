// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getStorageClass(args: GetStorageClassArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageClassResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("kubernetes:index/getStorageClass:getStorageClass", {
        "allowVolumeExpansion": args.allowVolumeExpansion,
        "allowedTopologies": args.allowedTopologies,
        "id": args.id,
        "metadata": args.metadata,
        "mountOptions": args.mountOptions,
        "parameters": args.parameters,
        "reclaimPolicy": args.reclaimPolicy,
        "volumeBindingMode": args.volumeBindingMode,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getStorageClass.
 */
export interface GetStorageClassArgs {
    allowVolumeExpansion?: boolean;
    allowedTopologies?: inputs.GetStorageClassAllowedTopologies;
    id?: string;
    metadata: inputs.GetStorageClassMetadata;
    mountOptions?: string[];
    parameters?: {[key: string]: string};
    reclaimPolicy?: string;
    volumeBindingMode?: string;
}

/**
 * A collection of values returned by getStorageClass.
 */
export interface GetStorageClassResult {
    readonly allowVolumeExpansion: boolean;
    readonly allowedTopologies?: outputs.GetStorageClassAllowedTopologies;
    readonly id: string;
    readonly metadata: outputs.GetStorageClassMetadata;
    readonly mountOptions: string[];
    readonly parameters: {[key: string]: string};
    readonly reclaimPolicy: string;
    readonly storageProvisioner: string;
    readonly volumeBindingMode: string;
}
export function getStorageClassOutput(args: GetStorageClassOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStorageClassResult> {
    return pulumi.output(args).apply((a: any) => getStorageClass(a, opts))
}

/**
 * A collection of arguments for invoking getStorageClass.
 */
export interface GetStorageClassOutputArgs {
    allowVolumeExpansion?: pulumi.Input<boolean>;
    allowedTopologies?: pulumi.Input<inputs.GetStorageClassAllowedTopologiesArgs>;
    id?: pulumi.Input<string>;
    metadata: pulumi.Input<inputs.GetStorageClassMetadataArgs>;
    mountOptions?: pulumi.Input<pulumi.Input<string>[]>;
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    reclaimPolicy?: pulumi.Input<string>;
    volumeBindingMode?: pulumi.Input<string>;
}
