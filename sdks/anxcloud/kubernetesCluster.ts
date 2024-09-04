// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class KubernetesCluster extends pulumi.CustomResource {
    /**
     * Get an existing KubernetesCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KubernetesClusterState, opts?: pulumi.CustomResourceOptions): KubernetesCluster {
        return new KubernetesCluster(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'anxcloud:index/kubernetesCluster:KubernetesCluster';

    /**
     * Returns true if the given object is an instance of KubernetesCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KubernetesCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KubernetesCluster.__pulumiType;
    }

    /**
     * Enable autoscaling for this cluster. Defaults to false if unset. > You will need to explicitly configure your node pools
     * for autoscaling. Please check the provided [autoscaling
     * documentation](https://engine.anexia-it.com/docs/en/module/kubernetes/user-guide/autoscaling) for details.
     */
    public readonly enableAutoscaling!: pulumi.Output<boolean | undefined>;
    /**
     * If enabled, Service VMs are set up as LBaaS hosts enabling K8s services of type LoadBalancer.
     */
    public readonly enableLbaas!: pulumi.Output<boolean | undefined>;
    /**
     * If enabled, Service VMs are configured as NAT gateways connecting the internal cluster network to the internet.
     */
    public readonly enableNatGateways!: pulumi.Output<boolean | undefined>;
    /**
     * External IPv4 prefix.
     */
    public readonly externalIpv4Prefix!: pulumi.Output<string>;
    /**
     * External IPv6 prefix.
     */
    public readonly externalIpv6Prefix!: pulumi.Output<string>;
    /**
     * Internal IPv4 prefix.
     */
    public readonly internalIpv4Prefix!: pulumi.Output<string>;
    /**
     * Cluster location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Cluster name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Deploy Service VMs providing load balancers and outbound masquerade.
     */
    public readonly needsServiceVms!: pulumi.Output<boolean | undefined>;
    /**
     * Set of tags attached to the resource.
     */
    public readonly tags!: pulumi.Output<string[]>;
    public readonly timeouts!: pulumi.Output<outputs.KubernetesClusterTimeouts | undefined>;
    /**
     * Kubernetes version.
     */
    public readonly version!: pulumi.Output<string>;

    /**
     * Create a KubernetesCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KubernetesClusterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KubernetesClusterArgs | KubernetesClusterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as KubernetesClusterState | undefined;
            resourceInputs["enableAutoscaling"] = state ? state.enableAutoscaling : undefined;
            resourceInputs["enableLbaas"] = state ? state.enableLbaas : undefined;
            resourceInputs["enableNatGateways"] = state ? state.enableNatGateways : undefined;
            resourceInputs["externalIpv4Prefix"] = state ? state.externalIpv4Prefix : undefined;
            resourceInputs["externalIpv6Prefix"] = state ? state.externalIpv6Prefix : undefined;
            resourceInputs["internalIpv4Prefix"] = state ? state.internalIpv4Prefix : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["needsServiceVms"] = state ? state.needsServiceVms : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as KubernetesClusterArgs | undefined;
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            resourceInputs["enableAutoscaling"] = args ? args.enableAutoscaling : undefined;
            resourceInputs["enableLbaas"] = args ? args.enableLbaas : undefined;
            resourceInputs["enableNatGateways"] = args ? args.enableNatGateways : undefined;
            resourceInputs["externalIpv4Prefix"] = args ? args.externalIpv4Prefix : undefined;
            resourceInputs["externalIpv6Prefix"] = args ? args.externalIpv6Prefix : undefined;
            resourceInputs["internalIpv4Prefix"] = args ? args.internalIpv4Prefix : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["needsServiceVms"] = args ? args.needsServiceVms : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(KubernetesCluster.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering KubernetesCluster resources.
 */
export interface KubernetesClusterState {
    /**
     * Enable autoscaling for this cluster. Defaults to false if unset. > You will need to explicitly configure your node pools
     * for autoscaling. Please check the provided [autoscaling
     * documentation](https://engine.anexia-it.com/docs/en/module/kubernetes/user-guide/autoscaling) for details.
     */
    enableAutoscaling?: pulumi.Input<boolean>;
    /**
     * If enabled, Service VMs are set up as LBaaS hosts enabling K8s services of type LoadBalancer.
     */
    enableLbaas?: pulumi.Input<boolean>;
    /**
     * If enabled, Service VMs are configured as NAT gateways connecting the internal cluster network to the internet.
     */
    enableNatGateways?: pulumi.Input<boolean>;
    /**
     * External IPv4 prefix.
     */
    externalIpv4Prefix?: pulumi.Input<string>;
    /**
     * External IPv6 prefix.
     */
    externalIpv6Prefix?: pulumi.Input<string>;
    /**
     * Internal IPv4 prefix.
     */
    internalIpv4Prefix?: pulumi.Input<string>;
    /**
     * Cluster location.
     */
    location?: pulumi.Input<string>;
    /**
     * Cluster name.
     */
    name?: pulumi.Input<string>;
    /**
     * Deploy Service VMs providing load balancers and outbound masquerade.
     */
    needsServiceVms?: pulumi.Input<boolean>;
    /**
     * Set of tags attached to the resource.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.KubernetesClusterTimeouts>;
    /**
     * Kubernetes version.
     */
    version?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a KubernetesCluster resource.
 */
export interface KubernetesClusterArgs {
    /**
     * Enable autoscaling for this cluster. Defaults to false if unset. > You will need to explicitly configure your node pools
     * for autoscaling. Please check the provided [autoscaling
     * documentation](https://engine.anexia-it.com/docs/en/module/kubernetes/user-guide/autoscaling) for details.
     */
    enableAutoscaling?: pulumi.Input<boolean>;
    /**
     * If enabled, Service VMs are set up as LBaaS hosts enabling K8s services of type LoadBalancer.
     */
    enableLbaas?: pulumi.Input<boolean>;
    /**
     * If enabled, Service VMs are configured as NAT gateways connecting the internal cluster network to the internet.
     */
    enableNatGateways?: pulumi.Input<boolean>;
    /**
     * External IPv4 prefix.
     */
    externalIpv4Prefix?: pulumi.Input<string>;
    /**
     * External IPv6 prefix.
     */
    externalIpv6Prefix?: pulumi.Input<string>;
    /**
     * Internal IPv4 prefix.
     */
    internalIpv4Prefix?: pulumi.Input<string>;
    /**
     * Cluster location.
     */
    location: pulumi.Input<string>;
    /**
     * Cluster name.
     */
    name?: pulumi.Input<string>;
    /**
     * Deploy Service VMs providing load balancers and outbound masquerade.
     */
    needsServiceVms?: pulumi.Input<boolean>;
    /**
     * Set of tags attached to the resource.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.KubernetesClusterTimeouts>;
    /**
     * Kubernetes version.
     */
    version?: pulumi.Input<string>;
}
