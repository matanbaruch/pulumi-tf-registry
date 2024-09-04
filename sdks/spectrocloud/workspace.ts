// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Workspace extends pulumi.CustomResource {
    /**
     * Get an existing Workspace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WorkspaceState, opts?: pulumi.CustomResourceOptions): Workspace {
        return new Workspace(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'spectrocloud:index/workspace:Workspace';

    /**
     * Returns true if the given object is an instance of Workspace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Workspace {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Workspace.__pulumiType;
    }

    /**
     * The backup policy for the cluster. If not specified, no backups will be taken.
     */
    public readonly backupPolicy!: pulumi.Output<outputs.WorkspaceBackupPolicy | undefined>;
    /**
     * The RBAC binding for the cluster.
     */
    public readonly clusterRbacBindings!: pulumi.Output<outputs.WorkspaceClusterRbacBinding[] | undefined>;
    public readonly clusters!: pulumi.Output<outputs.WorkspaceCluster[]>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    /**
     * The namespaces for the cluster.
     */
    public readonly namespaces!: pulumi.Output<outputs.WorkspaceNamespace[] | undefined>;
    public readonly tags!: pulumi.Output<string[] | undefined>;

    /**
     * Create a Workspace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkspaceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WorkspaceArgs | WorkspaceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WorkspaceState | undefined;
            resourceInputs["backupPolicy"] = state ? state.backupPolicy : undefined;
            resourceInputs["clusterRbacBindings"] = state ? state.clusterRbacBindings : undefined;
            resourceInputs["clusters"] = state ? state.clusters : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["namespaces"] = state ? state.namespaces : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as WorkspaceArgs | undefined;
            if ((!args || args.clusters === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusters'");
            }
            resourceInputs["backupPolicy"] = args ? args.backupPolicy : undefined;
            resourceInputs["clusterRbacBindings"] = args ? args.clusterRbacBindings : undefined;
            resourceInputs["clusters"] = args ? args.clusters : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["namespaces"] = args ? args.namespaces : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Workspace.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Workspace resources.
 */
export interface WorkspaceState {
    /**
     * The backup policy for the cluster. If not specified, no backups will be taken.
     */
    backupPolicy?: pulumi.Input<inputs.WorkspaceBackupPolicy>;
    /**
     * The RBAC binding for the cluster.
     */
    clusterRbacBindings?: pulumi.Input<pulumi.Input<inputs.WorkspaceClusterRbacBinding>[]>;
    clusters?: pulumi.Input<pulumi.Input<inputs.WorkspaceCluster>[]>;
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * The namespaces for the cluster.
     */
    namespaces?: pulumi.Input<pulumi.Input<inputs.WorkspaceNamespace>[]>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a Workspace resource.
 */
export interface WorkspaceArgs {
    /**
     * The backup policy for the cluster. If not specified, no backups will be taken.
     */
    backupPolicy?: pulumi.Input<inputs.WorkspaceBackupPolicy>;
    /**
     * The RBAC binding for the cluster.
     */
    clusterRbacBindings?: pulumi.Input<pulumi.Input<inputs.WorkspaceClusterRbacBinding>[]>;
    clusters: pulumi.Input<pulumi.Input<inputs.WorkspaceCluster>[]>;
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * The namespaces for the cluster.
     */
    namespaces?: pulumi.Input<pulumi.Input<inputs.WorkspaceNamespace>[]>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}
