// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCloudProjectKube(args: GetCloudProjectKubeArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudProjectKubeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ovh:index/getCloudProjectKube:getCloudProjectKube", {
        "customizationApiservers": args.customizationApiservers,
        "customizationKubeProxy": args.customizationKubeProxy,
        "customizations": args.customizations,
        "id": args.id,
        "kubeId": args.kubeId,
        "kubeProxyMode": args.kubeProxyMode,
        "name": args.name,
        "region": args.region,
        "serviceName": args.serviceName,
        "updatePolicy": args.updatePolicy,
        "version": args.version,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCloudProjectKube.
 */
export interface GetCloudProjectKubeArgs {
    customizationApiservers?: inputs.GetCloudProjectKubeCustomizationApiserver[];
    customizationKubeProxy?: inputs.GetCloudProjectKubeCustomizationKubeProxy;
    /**
     * @deprecated Deprecated
     */
    customizations?: inputs.GetCloudProjectKubeCustomization[];
    id?: string;
    kubeId: string;
    kubeProxyMode?: string;
    name?: string;
    region?: string;
    serviceName: string;
    updatePolicy?: string;
    version?: string;
}

/**
 * A collection of values returned by getCloudProjectKube.
 */
export interface GetCloudProjectKubeResult {
    readonly controlPlaneIsUpToDate: boolean;
    readonly customizationApiservers?: outputs.GetCloudProjectKubeCustomizationApiserver[];
    readonly customizationKubeProxy?: outputs.GetCloudProjectKubeCustomizationKubeProxy;
    /**
     * @deprecated Deprecated
     */
    readonly customizations?: outputs.GetCloudProjectKubeCustomization[];
    readonly id: string;
    readonly isUpToDate: boolean;
    readonly kubeId: string;
    readonly kubeProxyMode?: string;
    readonly loadBalancersSubnetId: string;
    readonly name?: string;
    readonly nextUpgradeVersions: string[];
    readonly nodesSubnetId: string;
    readonly nodesUrl: string;
    readonly privateNetworkId: string;
    readonly region?: string;
    readonly serviceName: string;
    readonly status: string;
    readonly updatePolicy?: string;
    readonly url: string;
    readonly version?: string;
}
export function getCloudProjectKubeOutput(args: GetCloudProjectKubeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudProjectKubeResult> {
    return pulumi.output(args).apply((a: any) => getCloudProjectKube(a, opts))
}

/**
 * A collection of arguments for invoking getCloudProjectKube.
 */
export interface GetCloudProjectKubeOutputArgs {
    customizationApiservers?: pulumi.Input<pulumi.Input<inputs.GetCloudProjectKubeCustomizationApiserverArgs>[]>;
    customizationKubeProxy?: pulumi.Input<inputs.GetCloudProjectKubeCustomizationKubeProxyArgs>;
    /**
     * @deprecated Deprecated
     */
    customizations?: pulumi.Input<pulumi.Input<inputs.GetCloudProjectKubeCustomizationArgs>[]>;
    id?: pulumi.Input<string>;
    kubeId: pulumi.Input<string>;
    kubeProxyMode?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    serviceName: pulumi.Input<string>;
    updatePolicy?: pulumi.Input<string>;
    version?: pulumi.Input<string>;
}
