// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class BoundaryCluster extends pulumi.CustomResource {
    /**
     * Get an existing BoundaryCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BoundaryClusterState, opts?: pulumi.CustomResourceOptions): BoundaryCluster {
        return new BoundaryCluster(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'hcp:index/boundaryCluster:BoundaryCluster';

    /**
     * Returns true if the given object is an instance of BoundaryCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BoundaryCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BoundaryCluster.__pulumiType;
    }

    /**
     * The ID of the Boundary cluster
     */
    public readonly clusterId!: pulumi.Output<string>;
    /**
     * A unique URL identifying the Boundary cluster.
     */
    public /*out*/ readonly clusterUrl!: pulumi.Output<string>;
    /**
     * The time that the Boundary cluster was created.
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * The maintenance window configuration for when cluster upgrades can take place.
     */
    public readonly maintenanceWindowConfig!: pulumi.Output<outputs.BoundaryClusterMaintenanceWindowConfig | undefined>;
    /**
     * The password of the initial admin user. This must be at least 8 characters in length. Note that this may show up in
     * logs, and it will be stored in the state file.
     */
    public readonly password!: pulumi.Output<string>;
    /**
     * The ID of the HCP project where the Boundary cluster is located. If not specified, the project specified in the HCP
     * Provider config block will be used, if configured. If a project is not configured in the HCP Provider config block, the
     * oldest project in the organization will be used.
     */
    public readonly projectId!: pulumi.Output<string>;
    /**
     * The state of the Boundary cluster.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * The tier that the HCP Boundary cluster will be provisioned as, 'Standard' or 'Plus'.
     */
    public readonly tier!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.BoundaryClusterTimeouts | undefined>;
    /**
     * The username of the initial admin user. This must be at least 3 characters in length, alphanumeric, hyphen, or period.
     */
    public readonly username!: pulumi.Output<string>;

    /**
     * Create a BoundaryCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BoundaryClusterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BoundaryClusterArgs | BoundaryClusterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BoundaryClusterState | undefined;
            resourceInputs["clusterId"] = state ? state.clusterId : undefined;
            resourceInputs["clusterUrl"] = state ? state.clusterUrl : undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["maintenanceWindowConfig"] = state ? state.maintenanceWindowConfig : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["tier"] = state ? state.tier : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as BoundaryClusterArgs | undefined;
            if ((!args || args.clusterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterId'");
            }
            if ((!args || args.password === undefined) && !opts.urn) {
                throw new Error("Missing required property 'password'");
            }
            if ((!args || args.tier === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tier'");
            }
            if ((!args || args.username === undefined) && !opts.urn) {
                throw new Error("Missing required property 'username'");
            }
            resourceInputs["clusterId"] = args ? args.clusterId : undefined;
            resourceInputs["maintenanceWindowConfig"] = args ? args.maintenanceWindowConfig : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["tier"] = args ? args.tier : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
            resourceInputs["clusterUrl"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(BoundaryCluster.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BoundaryCluster resources.
 */
export interface BoundaryClusterState {
    /**
     * The ID of the Boundary cluster
     */
    clusterId?: pulumi.Input<string>;
    /**
     * A unique URL identifying the Boundary cluster.
     */
    clusterUrl?: pulumi.Input<string>;
    /**
     * The time that the Boundary cluster was created.
     */
    createdAt?: pulumi.Input<string>;
    /**
     * The maintenance window configuration for when cluster upgrades can take place.
     */
    maintenanceWindowConfig?: pulumi.Input<inputs.BoundaryClusterMaintenanceWindowConfig>;
    /**
     * The password of the initial admin user. This must be at least 8 characters in length. Note that this may show up in
     * logs, and it will be stored in the state file.
     */
    password?: pulumi.Input<string>;
    /**
     * The ID of the HCP project where the Boundary cluster is located. If not specified, the project specified in the HCP
     * Provider config block will be used, if configured. If a project is not configured in the HCP Provider config block, the
     * oldest project in the organization will be used.
     */
    projectId?: pulumi.Input<string>;
    /**
     * The state of the Boundary cluster.
     */
    state?: pulumi.Input<string>;
    /**
     * The tier that the HCP Boundary cluster will be provisioned as, 'Standard' or 'Plus'.
     */
    tier?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.BoundaryClusterTimeouts>;
    /**
     * The username of the initial admin user. This must be at least 3 characters in length, alphanumeric, hyphen, or period.
     */
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a BoundaryCluster resource.
 */
export interface BoundaryClusterArgs {
    /**
     * The ID of the Boundary cluster
     */
    clusterId: pulumi.Input<string>;
    /**
     * The maintenance window configuration for when cluster upgrades can take place.
     */
    maintenanceWindowConfig?: pulumi.Input<inputs.BoundaryClusterMaintenanceWindowConfig>;
    /**
     * The password of the initial admin user. This must be at least 8 characters in length. Note that this may show up in
     * logs, and it will be stored in the state file.
     */
    password: pulumi.Input<string>;
    /**
     * The ID of the HCP project where the Boundary cluster is located. If not specified, the project specified in the HCP
     * Provider config block will be used, if configured. If a project is not configured in the HCP Provider config block, the
     * oldest project in the organization will be used.
     */
    projectId?: pulumi.Input<string>;
    /**
     * The tier that the HCP Boundary cluster will be provisioned as, 'Standard' or 'Plus'.
     */
    tier: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.BoundaryClusterTimeouts>;
    /**
     * The username of the initial admin user. This must be at least 3 characters in length, alphanumeric, hyphen, or period.
     */
    username: pulumi.Input<string>;
}
