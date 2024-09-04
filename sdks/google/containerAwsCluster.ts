// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ContainerAwsCluster extends pulumi.CustomResource {
    /**
     * Get an existing ContainerAwsCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ContainerAwsClusterState, opts?: pulumi.CustomResourceOptions): ContainerAwsCluster {
        return new ContainerAwsCluster(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/containerAwsCluster:ContainerAwsCluster';

    /**
     * Returns true if the given object is an instance of ContainerAwsCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ContainerAwsCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ContainerAwsCluster.__pulumiType;
    }

    /**
     * Optional. Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of
     * all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required),
     * separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with
     * alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. **Note**: This field is
     * non-authoritative, and will only manage the annotations present in your configuration. Please refer to the field
     * `effective_annotations` for all of the annotations present on the resource.
     */
    public readonly annotations!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Configuration related to the cluster RBAC settings.
     */
    public readonly authorization!: pulumi.Output<outputs.ContainerAwsClusterAuthorization>;
    /**
     * The AWS region where the cluster runs. Each Google Cloud region supports a subset of nearby AWS regions. You can call to
     * list all supported AWS regions within a given Google Cloud region.
     */
    public readonly awsRegion!: pulumi.Output<string>;
    /**
     * Configuration options for the Binary Authorization feature.
     */
    public readonly binaryAuthorization!: pulumi.Output<outputs.ContainerAwsClusterBinaryAuthorization | undefined>;
    /**
     * Configuration related to the cluster control plane.
     */
    public readonly controlPlane!: pulumi.Output<outputs.ContainerAwsClusterControlPlane>;
    /**
     * Output only. The time at which this cluster was created.
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    public /*out*/ readonly effectiveAnnotations!: pulumi.Output<{[key: string]: string}>;
    /**
     * Output only. The endpoint of the cluster's API server.
     */
    public /*out*/ readonly endpoint!: pulumi.Output<string>;
    /**
     * Allows clients to perform consistent read-modify-writes through optimistic concurrency control. May be sent on update
     * and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Fleet configuration.
     */
    public readonly fleet!: pulumi.Output<outputs.ContainerAwsClusterFleet>;
    /**
     * The location for the resource
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of this resource.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Cluster-wide networking configuration.
     */
    public readonly networking!: pulumi.Output<outputs.ContainerAwsClusterNetworking>;
    /**
     * The project for the resource
     */
    public readonly project!: pulumi.Output<string>;
    /**
     * Output only. If set, there are currently changes in flight to the cluster.
     */
    public /*out*/ readonly reconciling!: pulumi.Output<boolean>;
    /**
     * Output only. The current state of the cluster. Possible values: STATE_UNSPECIFIED, PROVISIONING, RUNNING, RECONCILING,
     * STOPPING, ERROR, DEGRADED
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ContainerAwsClusterTimeouts | undefined>;
    /**
     * Output only. A globally unique identifier for the cluster.
     */
    public /*out*/ readonly uid!: pulumi.Output<string>;
    /**
     * Output only. The time at which this cluster was last updated.
     */
    public /*out*/ readonly updateTime!: pulumi.Output<string>;
    /**
     * Output only. Workload Identity settings.
     */
    public /*out*/ readonly workloadIdentityConfigs!: pulumi.Output<outputs.ContainerAwsClusterWorkloadIdentityConfig[]>;

    /**
     * Create a ContainerAwsCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContainerAwsClusterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ContainerAwsClusterArgs | ContainerAwsClusterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ContainerAwsClusterState | undefined;
            resourceInputs["annotations"] = state ? state.annotations : undefined;
            resourceInputs["authorization"] = state ? state.authorization : undefined;
            resourceInputs["awsRegion"] = state ? state.awsRegion : undefined;
            resourceInputs["binaryAuthorization"] = state ? state.binaryAuthorization : undefined;
            resourceInputs["controlPlane"] = state ? state.controlPlane : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["effectiveAnnotations"] = state ? state.effectiveAnnotations : undefined;
            resourceInputs["endpoint"] = state ? state.endpoint : undefined;
            resourceInputs["etag"] = state ? state.etag : undefined;
            resourceInputs["fleet"] = state ? state.fleet : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["networking"] = state ? state.networking : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["reconciling"] = state ? state.reconciling : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["uid"] = state ? state.uid : undefined;
            resourceInputs["updateTime"] = state ? state.updateTime : undefined;
            resourceInputs["workloadIdentityConfigs"] = state ? state.workloadIdentityConfigs : undefined;
        } else {
            const args = argsOrState as ContainerAwsClusterArgs | undefined;
            if ((!args || args.authorization === undefined) && !opts.urn) {
                throw new Error("Missing required property 'authorization'");
            }
            if ((!args || args.awsRegion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'awsRegion'");
            }
            if ((!args || args.controlPlane === undefined) && !opts.urn) {
                throw new Error("Missing required property 'controlPlane'");
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
            resourceInputs["annotations"] = args ? args.annotations : undefined;
            resourceInputs["authorization"] = args ? args.authorization : undefined;
            resourceInputs["awsRegion"] = args ? args.awsRegion : undefined;
            resourceInputs["binaryAuthorization"] = args ? args.binaryAuthorization : undefined;
            resourceInputs["controlPlane"] = args ? args.controlPlane : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["fleet"] = args ? args.fleet : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networking"] = args ? args.networking : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["effectiveAnnotations"] = undefined /*out*/;
            resourceInputs["endpoint"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["reconciling"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["uid"] = undefined /*out*/;
            resourceInputs["updateTime"] = undefined /*out*/;
            resourceInputs["workloadIdentityConfigs"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ContainerAwsCluster.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ContainerAwsCluster resources.
 */
export interface ContainerAwsClusterState {
    /**
     * Optional. Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of
     * all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required),
     * separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with
     * alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. **Note**: This field is
     * non-authoritative, and will only manage the annotations present in your configuration. Please refer to the field
     * `effective_annotations` for all of the annotations present on the resource.
     */
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Configuration related to the cluster RBAC settings.
     */
    authorization?: pulumi.Input<inputs.ContainerAwsClusterAuthorization>;
    /**
     * The AWS region where the cluster runs. Each Google Cloud region supports a subset of nearby AWS regions. You can call to
     * list all supported AWS regions within a given Google Cloud region.
     */
    awsRegion?: pulumi.Input<string>;
    /**
     * Configuration options for the Binary Authorization feature.
     */
    binaryAuthorization?: pulumi.Input<inputs.ContainerAwsClusterBinaryAuthorization>;
    /**
     * Configuration related to the cluster control plane.
     */
    controlPlane?: pulumi.Input<inputs.ContainerAwsClusterControlPlane>;
    /**
     * Output only. The time at which this cluster was created.
     */
    createTime?: pulumi.Input<string>;
    /**
     * Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.
     */
    description?: pulumi.Input<string>;
    effectiveAnnotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Output only. The endpoint of the cluster's API server.
     */
    endpoint?: pulumi.Input<string>;
    /**
     * Allows clients to perform consistent read-modify-writes through optimistic concurrency control. May be sent on update
     * and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: pulumi.Input<string>;
    /**
     * Fleet configuration.
     */
    fleet?: pulumi.Input<inputs.ContainerAwsClusterFleet>;
    /**
     * The location for the resource
     */
    location?: pulumi.Input<string>;
    /**
     * The name of this resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Cluster-wide networking configuration.
     */
    networking?: pulumi.Input<inputs.ContainerAwsClusterNetworking>;
    /**
     * The project for the resource
     */
    project?: pulumi.Input<string>;
    /**
     * Output only. If set, there are currently changes in flight to the cluster.
     */
    reconciling?: pulumi.Input<boolean>;
    /**
     * Output only. The current state of the cluster. Possible values: STATE_UNSPECIFIED, PROVISIONING, RUNNING, RECONCILING,
     * STOPPING, ERROR, DEGRADED
     */
    state?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ContainerAwsClusterTimeouts>;
    /**
     * Output only. A globally unique identifier for the cluster.
     */
    uid?: pulumi.Input<string>;
    /**
     * Output only. The time at which this cluster was last updated.
     */
    updateTime?: pulumi.Input<string>;
    /**
     * Output only. Workload Identity settings.
     */
    workloadIdentityConfigs?: pulumi.Input<pulumi.Input<inputs.ContainerAwsClusterWorkloadIdentityConfig>[]>;
}

/**
 * The set of arguments for constructing a ContainerAwsCluster resource.
 */
export interface ContainerAwsClusterArgs {
    /**
     * Optional. Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of
     * all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required),
     * separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with
     * alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. **Note**: This field is
     * non-authoritative, and will only manage the annotations present in your configuration. Please refer to the field
     * `effective_annotations` for all of the annotations present on the resource.
     */
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Configuration related to the cluster RBAC settings.
     */
    authorization: pulumi.Input<inputs.ContainerAwsClusterAuthorization>;
    /**
     * The AWS region where the cluster runs. Each Google Cloud region supports a subset of nearby AWS regions. You can call to
     * list all supported AWS regions within a given Google Cloud region.
     */
    awsRegion: pulumi.Input<string>;
    /**
     * Configuration options for the Binary Authorization feature.
     */
    binaryAuthorization?: pulumi.Input<inputs.ContainerAwsClusterBinaryAuthorization>;
    /**
     * Configuration related to the cluster control plane.
     */
    controlPlane: pulumi.Input<inputs.ContainerAwsClusterControlPlane>;
    /**
     * Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.
     */
    description?: pulumi.Input<string>;
    /**
     * Fleet configuration.
     */
    fleet: pulumi.Input<inputs.ContainerAwsClusterFleet>;
    /**
     * The location for the resource
     */
    location: pulumi.Input<string>;
    /**
     * The name of this resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Cluster-wide networking configuration.
     */
    networking: pulumi.Input<inputs.ContainerAwsClusterNetworking>;
    /**
     * The project for the resource
     */
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ContainerAwsClusterTimeouts>;
}
