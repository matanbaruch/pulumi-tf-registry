// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class GkeonpremVmwareCluster extends pulumi.CustomResource {
    /**
     * Get an existing GkeonpremVmwareCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GkeonpremVmwareClusterState, opts?: pulumi.CustomResourceOptions): GkeonpremVmwareCluster {
        return new GkeonpremVmwareCluster(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/gkeonpremVmwareCluster:GkeonpremVmwareCluster';

    /**
     * Returns true if the given object is an instance of GkeonpremVmwareCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GkeonpremVmwareCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GkeonpremVmwareCluster.__pulumiType;
    }

    /**
     * The admin cluster this VMware User Cluster belongs to. This is the full resource name of the admin cluster's hub
     * membership. In the future, references to other resource types might be allowed if admin clusters are modeled as their
     * own resources.
     */
    public readonly adminClusterMembership!: pulumi.Output<string>;
    /**
     * Annotations on the VMware User Cluster. This field has the same restrictions as Kubernetes annotations. The total size
     * of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required),
     * separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with
     * alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. **Note**: This field is
     * non-authoritative, and will only manage the annotations present in your configuration. Please refer to the field
     * 'effective_annotations' for all of the annotations present on the resource.
     */
    public readonly annotations!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * AAGConfig specifies whether to spread VMware User Cluster nodes across at least three physical hosts in the datacenter.
     */
    public readonly antiAffinityGroups!: pulumi.Output<outputs.GkeonpremVmwareClusterAntiAffinityGroups | undefined>;
    /**
     * RBAC policy that will be applied and managed by GKE On-Prem.
     */
    public readonly authorization!: pulumi.Output<outputs.GkeonpremVmwareClusterAuthorization | undefined>;
    /**
     * Configuration for auto repairing.
     */
    public readonly autoRepairConfig!: pulumi.Output<outputs.GkeonpremVmwareClusterAutoRepairConfig | undefined>;
    /**
     * VMware User Cluster control plane nodes must have either 1 or 3 replicas.
     */
    public readonly controlPlaneNode!: pulumi.Output<outputs.GkeonpremVmwareClusterControlPlaneNode>;
    /**
     * The time at which VMware User Cluster was created.
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * VmwareDataplaneV2Config specifies configuration for Dataplane V2.
     */
    public readonly dataplaneV2!: pulumi.Output<outputs.GkeonpremVmwareClusterDataplaneV2 | undefined>;
    /**
     * The time at which VMware User Cluster was deleted.
     */
    public /*out*/ readonly deleteTime!: pulumi.Output<string>;
    /**
     * A human readable description of this VMware User Cluster.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Disable bundled ingress.
     */
    public readonly disableBundledIngress!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly effectiveAnnotations!: pulumi.Output<{[key: string]: string}>;
    /**
     * Enable control plane V2. Default to false.
     */
    public readonly enableControlPlaneV2!: pulumi.Output<boolean | undefined>;
    /**
     * The DNS name of VMware User Cluster's API server.
     */
    public /*out*/ readonly endpoint!: pulumi.Output<string>;
    /**
     * This checksum is computed by the server based on the value of other fields, and may be sent on update and delete
     * requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent
     * read-modify-writes through optimistic concurrency control.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Fleet configuration for the cluster.
     */
    public /*out*/ readonly fleets!: pulumi.Output<outputs.GkeonpremVmwareClusterFleet[]>;
    /**
     * Load Balancer configuration.
     */
    public readonly loadBalancer!: pulumi.Output<outputs.GkeonpremVmwareClusterLoadBalancer | undefined>;
    /**
     * The object name of the VMware OnPremUserCluster custom resource on the associated admin cluster. This field is used to
     * support conflicting names when enrolling existing clusters to the API. When used as a part of cluster enrollment, this
     * field will differ from the ID in the resource name. For new clusters, this field will match the user provided cluster ID
     * and be visible in the last component of the resource name. It is not modifiable. All users should use this name to
     * access their cluster using gkectl or kubectl and should expect to see the local name when viewing admin cluster
     * controller logs.
     */
    public /*out*/ readonly localName!: pulumi.Output<string>;
    /**
     * The location of the resource.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The VMware cluster name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The VMware User Cluster network configuration.
     */
    public readonly networkConfig!: pulumi.Output<outputs.GkeonpremVmwareClusterNetworkConfig | undefined>;
    /**
     * The Anthos clusters on the VMware version for your user cluster.
     */
    public readonly onPremVersion!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    /**
     * If set, there are currently changes in flight to the VMware User Cluster.
     */
    public /*out*/ readonly reconciling!: pulumi.Output<boolean>;
    /**
     * The current state of this cluster.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * ResourceStatus representing detailed cluster state.
     */
    public /*out*/ readonly statuses!: pulumi.Output<outputs.GkeonpremVmwareClusterStatus[]>;
    /**
     * Storage configuration.
     */
    public readonly storage!: pulumi.Output<outputs.GkeonpremVmwareClusterStorage | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.GkeonpremVmwareClusterTimeouts | undefined>;
    /**
     * The unique identifier of the VMware User Cluster.
     */
    public /*out*/ readonly uid!: pulumi.Output<string>;
    /**
     * The time at which VMware User Cluster was last updated.
     */
    public /*out*/ readonly updateTime!: pulumi.Output<string>;
    /**
     * Specifies upgrade policy for the cluster.
     */
    public readonly upgradePolicy!: pulumi.Output<outputs.GkeonpremVmwareClusterUpgradePolicy | undefined>;
    /**
     * ValidationCheck represents the result of the preflight check job.
     */
    public /*out*/ readonly validationChecks!: pulumi.Output<outputs.GkeonpremVmwareClusterValidationCheck[]>;
    /**
     * VmwareVCenterConfig specifies vCenter config for the user cluster. Inherited from the admin cluster.
     */
    public readonly vcenter!: pulumi.Output<outputs.GkeonpremVmwareClusterVcenter | undefined>;
    /**
     * Enable VM tracking.
     */
    public readonly vmTrackingEnabled!: pulumi.Output<boolean>;

    /**
     * Create a GkeonpremVmwareCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GkeonpremVmwareClusterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GkeonpremVmwareClusterArgs | GkeonpremVmwareClusterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GkeonpremVmwareClusterState | undefined;
            resourceInputs["adminClusterMembership"] = state ? state.adminClusterMembership : undefined;
            resourceInputs["annotations"] = state ? state.annotations : undefined;
            resourceInputs["antiAffinityGroups"] = state ? state.antiAffinityGroups : undefined;
            resourceInputs["authorization"] = state ? state.authorization : undefined;
            resourceInputs["autoRepairConfig"] = state ? state.autoRepairConfig : undefined;
            resourceInputs["controlPlaneNode"] = state ? state.controlPlaneNode : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["dataplaneV2"] = state ? state.dataplaneV2 : undefined;
            resourceInputs["deleteTime"] = state ? state.deleteTime : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["disableBundledIngress"] = state ? state.disableBundledIngress : undefined;
            resourceInputs["effectiveAnnotations"] = state ? state.effectiveAnnotations : undefined;
            resourceInputs["enableControlPlaneV2"] = state ? state.enableControlPlaneV2 : undefined;
            resourceInputs["endpoint"] = state ? state.endpoint : undefined;
            resourceInputs["etag"] = state ? state.etag : undefined;
            resourceInputs["fleets"] = state ? state.fleets : undefined;
            resourceInputs["loadBalancer"] = state ? state.loadBalancer : undefined;
            resourceInputs["localName"] = state ? state.localName : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["networkConfig"] = state ? state.networkConfig : undefined;
            resourceInputs["onPremVersion"] = state ? state.onPremVersion : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["reconciling"] = state ? state.reconciling : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["statuses"] = state ? state.statuses : undefined;
            resourceInputs["storage"] = state ? state.storage : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["uid"] = state ? state.uid : undefined;
            resourceInputs["updateTime"] = state ? state.updateTime : undefined;
            resourceInputs["upgradePolicy"] = state ? state.upgradePolicy : undefined;
            resourceInputs["validationChecks"] = state ? state.validationChecks : undefined;
            resourceInputs["vcenter"] = state ? state.vcenter : undefined;
            resourceInputs["vmTrackingEnabled"] = state ? state.vmTrackingEnabled : undefined;
        } else {
            const args = argsOrState as GkeonpremVmwareClusterArgs | undefined;
            if ((!args || args.adminClusterMembership === undefined) && !opts.urn) {
                throw new Error("Missing required property 'adminClusterMembership'");
            }
            if ((!args || args.controlPlaneNode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'controlPlaneNode'");
            }
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.onPremVersion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'onPremVersion'");
            }
            resourceInputs["adminClusterMembership"] = args ? args.adminClusterMembership : undefined;
            resourceInputs["annotations"] = args ? args.annotations : undefined;
            resourceInputs["antiAffinityGroups"] = args ? args.antiAffinityGroups : undefined;
            resourceInputs["authorization"] = args ? args.authorization : undefined;
            resourceInputs["autoRepairConfig"] = args ? args.autoRepairConfig : undefined;
            resourceInputs["controlPlaneNode"] = args ? args.controlPlaneNode : undefined;
            resourceInputs["dataplaneV2"] = args ? args.dataplaneV2 : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["disableBundledIngress"] = args ? args.disableBundledIngress : undefined;
            resourceInputs["enableControlPlaneV2"] = args ? args.enableControlPlaneV2 : undefined;
            resourceInputs["loadBalancer"] = args ? args.loadBalancer : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networkConfig"] = args ? args.networkConfig : undefined;
            resourceInputs["onPremVersion"] = args ? args.onPremVersion : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["storage"] = args ? args.storage : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["upgradePolicy"] = args ? args.upgradePolicy : undefined;
            resourceInputs["vcenter"] = args ? args.vcenter : undefined;
            resourceInputs["vmTrackingEnabled"] = args ? args.vmTrackingEnabled : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["deleteTime"] = undefined /*out*/;
            resourceInputs["effectiveAnnotations"] = undefined /*out*/;
            resourceInputs["endpoint"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["fleets"] = undefined /*out*/;
            resourceInputs["localName"] = undefined /*out*/;
            resourceInputs["reconciling"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["statuses"] = undefined /*out*/;
            resourceInputs["uid"] = undefined /*out*/;
            resourceInputs["updateTime"] = undefined /*out*/;
            resourceInputs["validationChecks"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GkeonpremVmwareCluster.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GkeonpremVmwareCluster resources.
 */
export interface GkeonpremVmwareClusterState {
    /**
     * The admin cluster this VMware User Cluster belongs to. This is the full resource name of the admin cluster's hub
     * membership. In the future, references to other resource types might be allowed if admin clusters are modeled as their
     * own resources.
     */
    adminClusterMembership?: pulumi.Input<string>;
    /**
     * Annotations on the VMware User Cluster. This field has the same restrictions as Kubernetes annotations. The total size
     * of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required),
     * separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with
     * alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. **Note**: This field is
     * non-authoritative, and will only manage the annotations present in your configuration. Please refer to the field
     * 'effective_annotations' for all of the annotations present on the resource.
     */
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * AAGConfig specifies whether to spread VMware User Cluster nodes across at least three physical hosts in the datacenter.
     */
    antiAffinityGroups?: pulumi.Input<inputs.GkeonpremVmwareClusterAntiAffinityGroups>;
    /**
     * RBAC policy that will be applied and managed by GKE On-Prem.
     */
    authorization?: pulumi.Input<inputs.GkeonpremVmwareClusterAuthorization>;
    /**
     * Configuration for auto repairing.
     */
    autoRepairConfig?: pulumi.Input<inputs.GkeonpremVmwareClusterAutoRepairConfig>;
    /**
     * VMware User Cluster control plane nodes must have either 1 or 3 replicas.
     */
    controlPlaneNode?: pulumi.Input<inputs.GkeonpremVmwareClusterControlPlaneNode>;
    /**
     * The time at which VMware User Cluster was created.
     */
    createTime?: pulumi.Input<string>;
    /**
     * VmwareDataplaneV2Config specifies configuration for Dataplane V2.
     */
    dataplaneV2?: pulumi.Input<inputs.GkeonpremVmwareClusterDataplaneV2>;
    /**
     * The time at which VMware User Cluster was deleted.
     */
    deleteTime?: pulumi.Input<string>;
    /**
     * A human readable description of this VMware User Cluster.
     */
    description?: pulumi.Input<string>;
    /**
     * Disable bundled ingress.
     */
    disableBundledIngress?: pulumi.Input<boolean>;
    effectiveAnnotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Enable control plane V2. Default to false.
     */
    enableControlPlaneV2?: pulumi.Input<boolean>;
    /**
     * The DNS name of VMware User Cluster's API server.
     */
    endpoint?: pulumi.Input<string>;
    /**
     * This checksum is computed by the server based on the value of other fields, and may be sent on update and delete
     * requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent
     * read-modify-writes through optimistic concurrency control.
     */
    etag?: pulumi.Input<string>;
    /**
     * Fleet configuration for the cluster.
     */
    fleets?: pulumi.Input<pulumi.Input<inputs.GkeonpremVmwareClusterFleet>[]>;
    /**
     * Load Balancer configuration.
     */
    loadBalancer?: pulumi.Input<inputs.GkeonpremVmwareClusterLoadBalancer>;
    /**
     * The object name of the VMware OnPremUserCluster custom resource on the associated admin cluster. This field is used to
     * support conflicting names when enrolling existing clusters to the API. When used as a part of cluster enrollment, this
     * field will differ from the ID in the resource name. For new clusters, this field will match the user provided cluster ID
     * and be visible in the last component of the resource name. It is not modifiable. All users should use this name to
     * access their cluster using gkectl or kubectl and should expect to see the local name when viewing admin cluster
     * controller logs.
     */
    localName?: pulumi.Input<string>;
    /**
     * The location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The VMware cluster name.
     */
    name?: pulumi.Input<string>;
    /**
     * The VMware User Cluster network configuration.
     */
    networkConfig?: pulumi.Input<inputs.GkeonpremVmwareClusterNetworkConfig>;
    /**
     * The Anthos clusters on the VMware version for your user cluster.
     */
    onPremVersion?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * If set, there are currently changes in flight to the VMware User Cluster.
     */
    reconciling?: pulumi.Input<boolean>;
    /**
     * The current state of this cluster.
     */
    state?: pulumi.Input<string>;
    /**
     * ResourceStatus representing detailed cluster state.
     */
    statuses?: pulumi.Input<pulumi.Input<inputs.GkeonpremVmwareClusterStatus>[]>;
    /**
     * Storage configuration.
     */
    storage?: pulumi.Input<inputs.GkeonpremVmwareClusterStorage>;
    timeouts?: pulumi.Input<inputs.GkeonpremVmwareClusterTimeouts>;
    /**
     * The unique identifier of the VMware User Cluster.
     */
    uid?: pulumi.Input<string>;
    /**
     * The time at which VMware User Cluster was last updated.
     */
    updateTime?: pulumi.Input<string>;
    /**
     * Specifies upgrade policy for the cluster.
     */
    upgradePolicy?: pulumi.Input<inputs.GkeonpremVmwareClusterUpgradePolicy>;
    /**
     * ValidationCheck represents the result of the preflight check job.
     */
    validationChecks?: pulumi.Input<pulumi.Input<inputs.GkeonpremVmwareClusterValidationCheck>[]>;
    /**
     * VmwareVCenterConfig specifies vCenter config for the user cluster. Inherited from the admin cluster.
     */
    vcenter?: pulumi.Input<inputs.GkeonpremVmwareClusterVcenter>;
    /**
     * Enable VM tracking.
     */
    vmTrackingEnabled?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a GkeonpremVmwareCluster resource.
 */
export interface GkeonpremVmwareClusterArgs {
    /**
     * The admin cluster this VMware User Cluster belongs to. This is the full resource name of the admin cluster's hub
     * membership. In the future, references to other resource types might be allowed if admin clusters are modeled as their
     * own resources.
     */
    adminClusterMembership: pulumi.Input<string>;
    /**
     * Annotations on the VMware User Cluster. This field has the same restrictions as Kubernetes annotations. The total size
     * of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required),
     * separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with
     * alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. **Note**: This field is
     * non-authoritative, and will only manage the annotations present in your configuration. Please refer to the field
     * 'effective_annotations' for all of the annotations present on the resource.
     */
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * AAGConfig specifies whether to spread VMware User Cluster nodes across at least three physical hosts in the datacenter.
     */
    antiAffinityGroups?: pulumi.Input<inputs.GkeonpremVmwareClusterAntiAffinityGroups>;
    /**
     * RBAC policy that will be applied and managed by GKE On-Prem.
     */
    authorization?: pulumi.Input<inputs.GkeonpremVmwareClusterAuthorization>;
    /**
     * Configuration for auto repairing.
     */
    autoRepairConfig?: pulumi.Input<inputs.GkeonpremVmwareClusterAutoRepairConfig>;
    /**
     * VMware User Cluster control plane nodes must have either 1 or 3 replicas.
     */
    controlPlaneNode: pulumi.Input<inputs.GkeonpremVmwareClusterControlPlaneNode>;
    /**
     * VmwareDataplaneV2Config specifies configuration for Dataplane V2.
     */
    dataplaneV2?: pulumi.Input<inputs.GkeonpremVmwareClusterDataplaneV2>;
    /**
     * A human readable description of this VMware User Cluster.
     */
    description?: pulumi.Input<string>;
    /**
     * Disable bundled ingress.
     */
    disableBundledIngress?: pulumi.Input<boolean>;
    /**
     * Enable control plane V2. Default to false.
     */
    enableControlPlaneV2?: pulumi.Input<boolean>;
    /**
     * Load Balancer configuration.
     */
    loadBalancer?: pulumi.Input<inputs.GkeonpremVmwareClusterLoadBalancer>;
    /**
     * The location of the resource.
     */
    location: pulumi.Input<string>;
    /**
     * The VMware cluster name.
     */
    name?: pulumi.Input<string>;
    /**
     * The VMware User Cluster network configuration.
     */
    networkConfig?: pulumi.Input<inputs.GkeonpremVmwareClusterNetworkConfig>;
    /**
     * The Anthos clusters on the VMware version for your user cluster.
     */
    onPremVersion: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * Storage configuration.
     */
    storage?: pulumi.Input<inputs.GkeonpremVmwareClusterStorage>;
    timeouts?: pulumi.Input<inputs.GkeonpremVmwareClusterTimeouts>;
    /**
     * Specifies upgrade policy for the cluster.
     */
    upgradePolicy?: pulumi.Input<inputs.GkeonpremVmwareClusterUpgradePolicy>;
    /**
     * VmwareVCenterConfig specifies vCenter config for the user cluster. Inherited from the admin cluster.
     */
    vcenter?: pulumi.Input<inputs.GkeonpremVmwareClusterVcenter>;
    /**
     * Enable VM tracking.
     */
    vmTrackingEnabled?: pulumi.Input<boolean>;
}
