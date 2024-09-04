// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getContainerinfraClustertemplateV1(args: GetContainerinfraClustertemplateV1Args, opts?: pulumi.InvokeOptions): Promise<GetContainerinfraClustertemplateV1Result> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("nhncloud:index/getContainerinfraClustertemplateV1:getContainerinfraClustertemplateV1", {
        "id": args.id,
        "name": args.name,
        "region": args.region,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getContainerinfraClustertemplateV1.
 */
export interface GetContainerinfraClustertemplateV1Args {
    id?: string;
    name: string;
    region?: string;
}

/**
 * A collection of values returned by getContainerinfraClustertemplateV1.
 */
export interface GetContainerinfraClustertemplateV1Result {
    readonly apiserverPort: number;
    readonly clusterDistro: string;
    readonly coe: string;
    readonly createdAt: string;
    readonly dnsNameserver: string;
    readonly dockerStorageDriver: string;
    readonly dockerVolumeSize: number;
    readonly externalNetworkId: string;
    readonly fixedNetwork: string;
    readonly fixedSubnet: string;
    readonly flavor: string;
    readonly floatingIpEnabled: boolean;
    readonly hidden: boolean;
    readonly httpProxy: string;
    readonly httpsProxy: string;
    readonly id: string;
    readonly image: string;
    readonly insecureRegistry: string;
    readonly keypairId: string;
    readonly labels: {[key: string]: string};
    readonly masterFlavor: string;
    readonly masterLbEnabled: boolean;
    readonly name: string;
    readonly networkDriver: string;
    readonly noProxy: string;
    readonly projectId: string;
    readonly public: boolean;
    readonly region: string;
    readonly registryEnabled: boolean;
    readonly serverType: string;
    readonly tlsDisabled: boolean;
    readonly updatedAt: string;
    readonly userId: string;
    readonly volumeDriver: string;
}
export function getContainerinfraClustertemplateV1Output(args: GetContainerinfraClustertemplateV1OutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetContainerinfraClustertemplateV1Result> {
    return pulumi.output(args).apply((a: any) => getContainerinfraClustertemplateV1(a, opts))
}

/**
 * A collection of arguments for invoking getContainerinfraClustertemplateV1.
 */
export interface GetContainerinfraClustertemplateV1OutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    region?: pulumi.Input<string>;
}
