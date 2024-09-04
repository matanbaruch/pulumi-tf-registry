// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class EdgecontainerCluster extends pulumi.CustomResource {
    /**
     * Get an existing EdgecontainerCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EdgecontainerClusterState, opts?: pulumi.CustomResourceOptions): EdgecontainerCluster {
        return new EdgecontainerCluster(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/edgecontainerCluster:EdgecontainerCluster';

    /**
     * Returns true if the given object is an instance of EdgecontainerCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EdgecontainerCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EdgecontainerCluster.__pulumiType;
    }

    /**
     * RBAC policy that will be applied and managed by GEC.
     */
    public readonly authorization!: pulumi.Output<outputs.EdgecontainerClusterAuthorization>;
    /**
     * The PEM-encoded public certificate of the cluster's CA.
     */
    public /*out*/ readonly clusterCaCertificate!: pulumi.Output<string>;
    /**
     * The configuration of the cluster control plane.
     */
    public readonly controlPlane!: pulumi.Output<outputs.EdgecontainerClusterControlPlane | undefined>;
    /**
     * Remote control plane disk encryption options. This field is only used when enabling CMEK support.
     */
    public readonly controlPlaneEncryption!: pulumi.Output<outputs.EdgecontainerClusterControlPlaneEncryption | undefined>;
    /**
     * The control plane release version.
     */
    public /*out*/ readonly controlPlaneVersion!: pulumi.Output<string>;
    /**
     * The time the cluster was created, in RFC3339 text format.
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * The default maximum number of pods per node used if a maximum value is not specified explicitly for a node pool in this
     * cluster. If unspecified, the Kubernetes default value will be used.
     */
    public readonly defaultMaxPodsPerNode!: pulumi.Output<number>;
    public /*out*/ readonly effectiveLabels!: pulumi.Output<{[key: string]: string}>;
    /**
     * The IP address of the Kubernetes API server.
     */
    public /*out*/ readonly endpoint!: pulumi.Output<string>;
    /**
     * Address pools for cluster data plane external load balancing.
     */
    public readonly externalLoadBalancerIpv4AddressPools!: pulumi.Output<string[]>;
    /**
     * Fleet related configuration. Fleets are a Google Cloud concept for logically organizing clusters, letting you use and
     * manage multi-cluster capabilities and apply consistent policies across your systems.
     */
    public readonly fleet!: pulumi.Output<outputs.EdgecontainerClusterFleet>;
    /**
     * User-defined labels for the edgecloud cluster. **Note**: This field is non-authoritative, and will only manage the
     * labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on the
     * resource.
     */
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The location of the resource.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * All the maintenance events scheduled for the cluster, including the ones ongoing, planned for the future and done in the
     * past (up to 90 days).
     */
    public /*out*/ readonly maintenanceEvents!: pulumi.Output<outputs.EdgecontainerClusterMaintenanceEvent[]>;
    /**
     * Cluster-wide maintenance policy configuration.
     */
    public readonly maintenancePolicy!: pulumi.Output<outputs.EdgecontainerClusterMaintenancePolicy | undefined>;
    /**
     * The GDCE cluster name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Fleet related configuration. Fleets are a Google Cloud concept for logically organizing clusters, letting you use and
     * manage multi-cluster capabilities and apply consistent policies across your systems.
     */
    public readonly networking!: pulumi.Output<outputs.EdgecontainerClusterNetworking>;
    /**
     * The lowest release version among all worker nodes. This field can be empty if the cluster does not have any worker
     * nodes.
     */
    public /*out*/ readonly nodeVersion!: pulumi.Output<string>;
    /**
     * The port number of the Kubernetes API server.
     */
    public /*out*/ readonly port!: pulumi.Output<number>;
    public readonly project!: pulumi.Output<string>;
    /**
     * The release channel a cluster is subscribed to. Possible values: ["RELEASE_CHANNEL_UNSPECIFIED", "NONE", "REGULAR"]
     */
    public readonly releaseChannel!: pulumi.Output<string>;
    /**
     * Indicates the status of the cluster.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Config that customers are allowed to define for GDCE system add-ons.
     */
    public readonly systemAddonsConfig!: pulumi.Output<outputs.EdgecontainerClusterSystemAddonsConfig | undefined>;
    /**
     * The target cluster version. For example: "1.5.0".
     */
    public readonly targetVersion!: pulumi.Output<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    public /*out*/ readonly terraformLabels!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.EdgecontainerClusterTimeouts | undefined>;
    /**
     * The time the cluster was last updated, in RFC3339 text format.
     */
    public /*out*/ readonly updateTime!: pulumi.Output<string>;

    /**
     * Create a EdgecontainerCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EdgecontainerClusterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EdgecontainerClusterArgs | EdgecontainerClusterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EdgecontainerClusterState | undefined;
            resourceInputs["authorization"] = state ? state.authorization : undefined;
            resourceInputs["clusterCaCertificate"] = state ? state.clusterCaCertificate : undefined;
            resourceInputs["controlPlane"] = state ? state.controlPlane : undefined;
            resourceInputs["controlPlaneEncryption"] = state ? state.controlPlaneEncryption : undefined;
            resourceInputs["controlPlaneVersion"] = state ? state.controlPlaneVersion : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["defaultMaxPodsPerNode"] = state ? state.defaultMaxPodsPerNode : undefined;
            resourceInputs["effectiveLabels"] = state ? state.effectiveLabels : undefined;
            resourceInputs["endpoint"] = state ? state.endpoint : undefined;
            resourceInputs["externalLoadBalancerIpv4AddressPools"] = state ? state.externalLoadBalancerIpv4AddressPools : undefined;
            resourceInputs["fleet"] = state ? state.fleet : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["maintenanceEvents"] = state ? state.maintenanceEvents : undefined;
            resourceInputs["maintenancePolicy"] = state ? state.maintenancePolicy : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["networking"] = state ? state.networking : undefined;
            resourceInputs["nodeVersion"] = state ? state.nodeVersion : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["releaseChannel"] = state ? state.releaseChannel : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["systemAddonsConfig"] = state ? state.systemAddonsConfig : undefined;
            resourceInputs["targetVersion"] = state ? state.targetVersion : undefined;
            resourceInputs["terraformLabels"] = state ? state.terraformLabels : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["updateTime"] = state ? state.updateTime : undefined;
        } else {
            const args = argsOrState as EdgecontainerClusterArgs | undefined;
            if ((!args || args.authorization === undefined) && !opts.urn) {
                throw new Error("Missing required property 'authorization'");
            }
            if ((!args || args.fleet === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fleet'");
            }
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.networking === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networking'");
            }
            resourceInputs["authorization"] = args ? args.authorization : undefined;
            resourceInputs["controlPlane"] = args ? args.controlPlane : undefined;
            resourceInputs["controlPlaneEncryption"] = args ? args.controlPlaneEncryption : undefined;
            resourceInputs["defaultMaxPodsPerNode"] = args ? args.defaultMaxPodsPerNode : undefined;
            resourceInputs["externalLoadBalancerIpv4AddressPools"] = args ? args.externalLoadBalancerIpv4AddressPools : undefined;
            resourceInputs["fleet"] = args ? args.fleet : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["maintenancePolicy"] = args ? args.maintenancePolicy : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networking"] = args ? args.networking : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["releaseChannel"] = args ? args.releaseChannel : undefined;
            resourceInputs["systemAddonsConfig"] = args ? args.systemAddonsConfig : undefined;
            resourceInputs["targetVersion"] = args ? args.targetVersion : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["clusterCaCertificate"] = undefined /*out*/;
            resourceInputs["controlPlaneVersion"] = undefined /*out*/;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["effectiveLabels"] = undefined /*out*/;
            resourceInputs["endpoint"] = undefined /*out*/;
            resourceInputs["maintenanceEvents"] = undefined /*out*/;
            resourceInputs["nodeVersion"] = undefined /*out*/;
            resourceInputs["port"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["terraformLabels"] = undefined /*out*/;
            resourceInputs["updateTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["clusterCaCertificate"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(EdgecontainerCluster.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EdgecontainerCluster resources.
 */
export interface EdgecontainerClusterState {
    /**
     * RBAC policy that will be applied and managed by GEC.
     */
    authorization?: pulumi.Input<inputs.EdgecontainerClusterAuthorization>;
    /**
     * The PEM-encoded public certificate of the cluster's CA.
     */
    clusterCaCertificate?: pulumi.Input<string>;
    /**
     * The configuration of the cluster control plane.
     */
    controlPlane?: pulumi.Input<inputs.EdgecontainerClusterControlPlane>;
    /**
     * Remote control plane disk encryption options. This field is only used when enabling CMEK support.
     */
    controlPlaneEncryption?: pulumi.Input<inputs.EdgecontainerClusterControlPlaneEncryption>;
    /**
     * The control plane release version.
     */
    controlPlaneVersion?: pulumi.Input<string>;
    /**
     * The time the cluster was created, in RFC3339 text format.
     */
    createTime?: pulumi.Input<string>;
    /**
     * The default maximum number of pods per node used if a maximum value is not specified explicitly for a node pool in this
     * cluster. If unspecified, the Kubernetes default value will be used.
     */
    defaultMaxPodsPerNode?: pulumi.Input<number>;
    effectiveLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The IP address of the Kubernetes API server.
     */
    endpoint?: pulumi.Input<string>;
    /**
     * Address pools for cluster data plane external load balancing.
     */
    externalLoadBalancerIpv4AddressPools?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Fleet related configuration. Fleets are a Google Cloud concept for logically organizing clusters, letting you use and
     * manage multi-cluster capabilities and apply consistent policies across your systems.
     */
    fleet?: pulumi.Input<inputs.EdgecontainerClusterFleet>;
    /**
     * User-defined labels for the edgecloud cluster. **Note**: This field is non-authoritative, and will only manage the
     * labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on the
     * resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * All the maintenance events scheduled for the cluster, including the ones ongoing, planned for the future and done in the
     * past (up to 90 days).
     */
    maintenanceEvents?: pulumi.Input<pulumi.Input<inputs.EdgecontainerClusterMaintenanceEvent>[]>;
    /**
     * Cluster-wide maintenance policy configuration.
     */
    maintenancePolicy?: pulumi.Input<inputs.EdgecontainerClusterMaintenancePolicy>;
    /**
     * The GDCE cluster name.
     */
    name?: pulumi.Input<string>;
    /**
     * Fleet related configuration. Fleets are a Google Cloud concept for logically organizing clusters, letting you use and
     * manage multi-cluster capabilities and apply consistent policies across your systems.
     */
    networking?: pulumi.Input<inputs.EdgecontainerClusterNetworking>;
    /**
     * The lowest release version among all worker nodes. This field can be empty if the cluster does not have any worker
     * nodes.
     */
    nodeVersion?: pulumi.Input<string>;
    /**
     * The port number of the Kubernetes API server.
     */
    port?: pulumi.Input<number>;
    project?: pulumi.Input<string>;
    /**
     * The release channel a cluster is subscribed to. Possible values: ["RELEASE_CHANNEL_UNSPECIFIED", "NONE", "REGULAR"]
     */
    releaseChannel?: pulumi.Input<string>;
    /**
     * Indicates the status of the cluster.
     */
    status?: pulumi.Input<string>;
    /**
     * Config that customers are allowed to define for GDCE system add-ons.
     */
    systemAddonsConfig?: pulumi.Input<inputs.EdgecontainerClusterSystemAddonsConfig>;
    /**
     * The target cluster version. For example: "1.5.0".
     */
    targetVersion?: pulumi.Input<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    terraformLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.EdgecontainerClusterTimeouts>;
    /**
     * The time the cluster was last updated, in RFC3339 text format.
     */
    updateTime?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a EdgecontainerCluster resource.
 */
export interface EdgecontainerClusterArgs {
    /**
     * RBAC policy that will be applied and managed by GEC.
     */
    authorization: pulumi.Input<inputs.EdgecontainerClusterAuthorization>;
    /**
     * The configuration of the cluster control plane.
     */
    controlPlane?: pulumi.Input<inputs.EdgecontainerClusterControlPlane>;
    /**
     * Remote control plane disk encryption options. This field is only used when enabling CMEK support.
     */
    controlPlaneEncryption?: pulumi.Input<inputs.EdgecontainerClusterControlPlaneEncryption>;
    /**
     * The default maximum number of pods per node used if a maximum value is not specified explicitly for a node pool in this
     * cluster. If unspecified, the Kubernetes default value will be used.
     */
    defaultMaxPodsPerNode?: pulumi.Input<number>;
    /**
     * Address pools for cluster data plane external load balancing.
     */
    externalLoadBalancerIpv4AddressPools?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Fleet related configuration. Fleets are a Google Cloud concept for logically organizing clusters, letting you use and
     * manage multi-cluster capabilities and apply consistent policies across your systems.
     */
    fleet: pulumi.Input<inputs.EdgecontainerClusterFleet>;
    /**
     * User-defined labels for the edgecloud cluster. **Note**: This field is non-authoritative, and will only manage the
     * labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on the
     * resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The location of the resource.
     */
    location: pulumi.Input<string>;
    /**
     * Cluster-wide maintenance policy configuration.
     */
    maintenancePolicy?: pulumi.Input<inputs.EdgecontainerClusterMaintenancePolicy>;
    /**
     * The GDCE cluster name.
     */
    name?: pulumi.Input<string>;
    /**
     * Fleet related configuration. Fleets are a Google Cloud concept for logically organizing clusters, letting you use and
     * manage multi-cluster capabilities and apply consistent policies across your systems.
     */
    networking: pulumi.Input<inputs.EdgecontainerClusterNetworking>;
    project?: pulumi.Input<string>;
    /**
     * The release channel a cluster is subscribed to. Possible values: ["RELEASE_CHANNEL_UNSPECIFIED", "NONE", "REGULAR"]
     */
    releaseChannel?: pulumi.Input<string>;
    /**
     * Config that customers are allowed to define for GDCE system add-ons.
     */
    systemAddonsConfig?: pulumi.Input<inputs.EdgecontainerClusterSystemAddonsConfig>;
    /**
     * The target cluster version. For example: "1.5.0".
     */
    targetVersion?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.EdgecontainerClusterTimeouts>;
}
