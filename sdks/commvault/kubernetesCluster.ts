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
    public static readonly __pulumiType = 'commvault:index/kubernetesCluster:KubernetesCluster';

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

    public readonly accessnodes!: pulumi.Output<outputs.KubernetesClusterAccessnode[] | undefined>;
    /**
     * Request definition changing activity control options for cluster
     */
    public readonly activitycontrols!: pulumi.Output<outputs.KubernetesClusterActivitycontrol[] | undefined>;
    /**
     * API Server Endpoint of the cluster
     */
    public readonly apiserver!: pulumi.Output<string>;
    /**
     * ETCD Protection options for a cluster
     */
    public readonly etcdprotections!: pulumi.Output<outputs.KubernetesClusterEtcdprotection[] | undefined>;
    /**
     * Name of the Kubernetes Cluster
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Request definition for cluster advanced options
     */
    public readonly options!: pulumi.Output<outputs.KubernetesClusterOption[] | undefined>;
    public readonly regions!: pulumi.Output<outputs.KubernetesClusterRegion[] | undefined>;
    /**
     * Name of the Service Account to authenticate with the cluster
     */
    public readonly serviceaccount!: pulumi.Output<string>;
    /**
     * Secret token to authenticate with the cluster
     */
    public readonly servicetoken!: pulumi.Output<string>;
    /**
     * The Service Type of the Kubernetes cluster [ONPREM, AKS]
     */
    public readonly servicetype!: pulumi.Output<string>;
    /**
     * Modify or add tags on the cluster
     */
    public readonly tags!: pulumi.Output<outputs.KubernetesClusterTag[] | undefined>;

    /**
     * Create a KubernetesCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: KubernetesClusterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KubernetesClusterArgs | KubernetesClusterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as KubernetesClusterState | undefined;
            resourceInputs["accessnodes"] = state ? state.accessnodes : undefined;
            resourceInputs["activitycontrols"] = state ? state.activitycontrols : undefined;
            resourceInputs["apiserver"] = state ? state.apiserver : undefined;
            resourceInputs["etcdprotections"] = state ? state.etcdprotections : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["options"] = state ? state.options : undefined;
            resourceInputs["regions"] = state ? state.regions : undefined;
            resourceInputs["serviceaccount"] = state ? state.serviceaccount : undefined;
            resourceInputs["servicetoken"] = state ? state.servicetoken : undefined;
            resourceInputs["servicetype"] = state ? state.servicetype : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as KubernetesClusterArgs | undefined;
            resourceInputs["accessnodes"] = args ? args.accessnodes : undefined;
            resourceInputs["activitycontrols"] = args ? args.activitycontrols : undefined;
            resourceInputs["apiserver"] = args ? args.apiserver : undefined;
            resourceInputs["etcdprotections"] = args ? args.etcdprotections : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["options"] = args ? args.options : undefined;
            resourceInputs["regions"] = args ? args.regions : undefined;
            resourceInputs["serviceaccount"] = args ? args.serviceaccount : undefined;
            resourceInputs["servicetoken"] = args ? args.servicetoken : undefined;
            resourceInputs["servicetype"] = args ? args.servicetype : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(KubernetesCluster.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering KubernetesCluster resources.
 */
export interface KubernetesClusterState {
    accessnodes?: pulumi.Input<pulumi.Input<inputs.KubernetesClusterAccessnode>[]>;
    /**
     * Request definition changing activity control options for cluster
     */
    activitycontrols?: pulumi.Input<pulumi.Input<inputs.KubernetesClusterActivitycontrol>[]>;
    /**
     * API Server Endpoint of the cluster
     */
    apiserver?: pulumi.Input<string>;
    /**
     * ETCD Protection options for a cluster
     */
    etcdprotections?: pulumi.Input<pulumi.Input<inputs.KubernetesClusterEtcdprotection>[]>;
    /**
     * Name of the Kubernetes Cluster
     */
    name?: pulumi.Input<string>;
    /**
     * Request definition for cluster advanced options
     */
    options?: pulumi.Input<pulumi.Input<inputs.KubernetesClusterOption>[]>;
    regions?: pulumi.Input<pulumi.Input<inputs.KubernetesClusterRegion>[]>;
    /**
     * Name of the Service Account to authenticate with the cluster
     */
    serviceaccount?: pulumi.Input<string>;
    /**
     * Secret token to authenticate with the cluster
     */
    servicetoken?: pulumi.Input<string>;
    /**
     * The Service Type of the Kubernetes cluster [ONPREM, AKS]
     */
    servicetype?: pulumi.Input<string>;
    /**
     * Modify or add tags on the cluster
     */
    tags?: pulumi.Input<pulumi.Input<inputs.KubernetesClusterTag>[]>;
}

/**
 * The set of arguments for constructing a KubernetesCluster resource.
 */
export interface KubernetesClusterArgs {
    accessnodes?: pulumi.Input<pulumi.Input<inputs.KubernetesClusterAccessnode>[]>;
    /**
     * Request definition changing activity control options for cluster
     */
    activitycontrols?: pulumi.Input<pulumi.Input<inputs.KubernetesClusterActivitycontrol>[]>;
    /**
     * API Server Endpoint of the cluster
     */
    apiserver?: pulumi.Input<string>;
    /**
     * ETCD Protection options for a cluster
     */
    etcdprotections?: pulumi.Input<pulumi.Input<inputs.KubernetesClusterEtcdprotection>[]>;
    /**
     * Name of the Kubernetes Cluster
     */
    name?: pulumi.Input<string>;
    /**
     * Request definition for cluster advanced options
     */
    options?: pulumi.Input<pulumi.Input<inputs.KubernetesClusterOption>[]>;
    regions?: pulumi.Input<pulumi.Input<inputs.KubernetesClusterRegion>[]>;
    /**
     * Name of the Service Account to authenticate with the cluster
     */
    serviceaccount?: pulumi.Input<string>;
    /**
     * Secret token to authenticate with the cluster
     */
    servicetoken?: pulumi.Input<string>;
    /**
     * The Service Type of the Kubernetes cluster [ONPREM, AKS]
     */
    servicetype?: pulumi.Input<string>;
    /**
     * Modify or add tags on the cluster
     */
    tags?: pulumi.Input<pulumi.Input<inputs.KubernetesClusterTag>[]>;
}
