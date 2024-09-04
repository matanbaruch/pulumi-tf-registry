// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class LkeCluster extends pulumi.CustomResource {
    /**
     * Get an existing LkeCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LkeClusterState, opts?: pulumi.CustomResourceOptions): LkeCluster {
        return new LkeCluster(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'linode:index/lkeCluster:LkeCluster';

    /**
     * Returns true if the given object is an instance of LkeCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LkeCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LkeCluster.__pulumiType;
    }

    /**
     * The API endpoints for the cluster.
     */
    public /*out*/ readonly apiEndpoints!: pulumi.Output<string[]>;
    /**
     * Defines settings for the Kubernetes Control Plane.
     */
    public readonly controlPlane!: pulumi.Output<outputs.LkeClusterControlPlane | undefined>;
    /**
     * The dashboard URL of the cluster.
     */
    public /*out*/ readonly dashboardUrl!: pulumi.Output<string>;
    /**
     * An array of tags indicating that node pools having those tags are defined with a separate nodepool resource, rather than
     * inside the current cluster resource.
     */
    public readonly externalPoolTags!: pulumi.Output<string[] | undefined>;
    /**
     * The desired Kubernetes version for this Kubernetes cluster in the format of <major>.<minor>. The latest supported patch
     * version will be deployed.
     */
    public readonly k8sVersion!: pulumi.Output<string>;
    /**
     * The Base64-encoded Kubeconfig for the cluster.
     */
    public /*out*/ readonly kubeconfig!: pulumi.Output<string>;
    /**
     * The unique label for the cluster.
     */
    public readonly label!: pulumi.Output<string>;
    /**
     * A node pool in the cluster.
     */
    public readonly pools!: pulumi.Output<outputs.LkeClusterPool[]>;
    /**
     * This cluster's location.
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * The status of the cluster.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * An array of tags applied to this object. Tags are for organizational purposes only.
     */
    public readonly tags!: pulumi.Output<string[]>;
    public readonly timeouts!: pulumi.Output<outputs.LkeClusterTimeouts | undefined>;

    /**
     * Create a LkeCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LkeClusterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LkeClusterArgs | LkeClusterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LkeClusterState | undefined;
            resourceInputs["apiEndpoints"] = state ? state.apiEndpoints : undefined;
            resourceInputs["controlPlane"] = state ? state.controlPlane : undefined;
            resourceInputs["dashboardUrl"] = state ? state.dashboardUrl : undefined;
            resourceInputs["externalPoolTags"] = state ? state.externalPoolTags : undefined;
            resourceInputs["k8sVersion"] = state ? state.k8sVersion : undefined;
            resourceInputs["kubeconfig"] = state ? state.kubeconfig : undefined;
            resourceInputs["label"] = state ? state.label : undefined;
            resourceInputs["pools"] = state ? state.pools : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as LkeClusterArgs | undefined;
            if ((!args || args.k8sVersion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'k8sVersion'");
            }
            if ((!args || args.label === undefined) && !opts.urn) {
                throw new Error("Missing required property 'label'");
            }
            if ((!args || args.pools === undefined) && !opts.urn) {
                throw new Error("Missing required property 'pools'");
            }
            if ((!args || args.region === undefined) && !opts.urn) {
                throw new Error("Missing required property 'region'");
            }
            resourceInputs["controlPlane"] = args ? args.controlPlane : undefined;
            resourceInputs["externalPoolTags"] = args ? args.externalPoolTags : undefined;
            resourceInputs["k8sVersion"] = args ? args.k8sVersion : undefined;
            resourceInputs["label"] = args ? args.label : undefined;
            resourceInputs["pools"] = args ? args.pools : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["apiEndpoints"] = undefined /*out*/;
            resourceInputs["dashboardUrl"] = undefined /*out*/;
            resourceInputs["kubeconfig"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["kubeconfig"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(LkeCluster.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LkeCluster resources.
 */
export interface LkeClusterState {
    /**
     * The API endpoints for the cluster.
     */
    apiEndpoints?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Defines settings for the Kubernetes Control Plane.
     */
    controlPlane?: pulumi.Input<inputs.LkeClusterControlPlane>;
    /**
     * The dashboard URL of the cluster.
     */
    dashboardUrl?: pulumi.Input<string>;
    /**
     * An array of tags indicating that node pools having those tags are defined with a separate nodepool resource, rather than
     * inside the current cluster resource.
     */
    externalPoolTags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The desired Kubernetes version for this Kubernetes cluster in the format of <major>.<minor>. The latest supported patch
     * version will be deployed.
     */
    k8sVersion?: pulumi.Input<string>;
    /**
     * The Base64-encoded Kubeconfig for the cluster.
     */
    kubeconfig?: pulumi.Input<string>;
    /**
     * The unique label for the cluster.
     */
    label?: pulumi.Input<string>;
    /**
     * A node pool in the cluster.
     */
    pools?: pulumi.Input<pulumi.Input<inputs.LkeClusterPool>[]>;
    /**
     * This cluster's location.
     */
    region?: pulumi.Input<string>;
    /**
     * The status of the cluster.
     */
    status?: pulumi.Input<string>;
    /**
     * An array of tags applied to this object. Tags are for organizational purposes only.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.LkeClusterTimeouts>;
}

/**
 * The set of arguments for constructing a LkeCluster resource.
 */
export interface LkeClusterArgs {
    /**
     * Defines settings for the Kubernetes Control Plane.
     */
    controlPlane?: pulumi.Input<inputs.LkeClusterControlPlane>;
    /**
     * An array of tags indicating that node pools having those tags are defined with a separate nodepool resource, rather than
     * inside the current cluster resource.
     */
    externalPoolTags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The desired Kubernetes version for this Kubernetes cluster in the format of <major>.<minor>. The latest supported patch
     * version will be deployed.
     */
    k8sVersion: pulumi.Input<string>;
    /**
     * The unique label for the cluster.
     */
    label: pulumi.Input<string>;
    /**
     * A node pool in the cluster.
     */
    pools: pulumi.Input<pulumi.Input<inputs.LkeClusterPool>[]>;
    /**
     * This cluster's location.
     */
    region: pulumi.Input<string>;
    /**
     * An array of tags applied to this object. Tags are for organizational purposes only.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.LkeClusterTimeouts>;
}
