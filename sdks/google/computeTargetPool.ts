// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ComputeTargetPool extends pulumi.CustomResource {
    /**
     * Get an existing ComputeTargetPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ComputeTargetPoolState, opts?: pulumi.CustomResourceOptions): ComputeTargetPool {
        return new ComputeTargetPool(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/computeTargetPool:ComputeTargetPool';

    /**
     * Returns true if the given object is an instance of ComputeTargetPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComputeTargetPool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComputeTargetPool.__pulumiType;
    }

    /**
     * URL to the backup target pool. Must also set failover_ratio.
     */
    public readonly backupPool!: pulumi.Output<string | undefined>;
    /**
     * Textual description field.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Ratio (0 to 1) of failed nodes before using the backup pool (which must also be set).
     */
    public readonly failoverRatio!: pulumi.Output<number | undefined>;
    /**
     * List of zero or one health check name or self_link. Only legacy google.ComputeHttpHealthCheck is supported.
     */
    public readonly healthChecks!: pulumi.Output<string[] | undefined>;
    public readonly instances!: pulumi.Output<string[]>;
    /**
     * A unique name for the resource, required by GCE. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
     */
    public readonly project!: pulumi.Output<string>;
    /**
     * Where the target pool resides. Defaults to project region.
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * The URI of the created resource.
     */
    public /*out*/ readonly selfLink!: pulumi.Output<string>;
    /**
     * How to distribute load. Options are "NONE" (no affinity). "CLIENT_IP" (hash of the source/dest addresses / ports), and
     * "CLIENT_IP_PROTO" also includes the protocol (default "NONE").
     */
    public readonly sessionAffinity!: pulumi.Output<string | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.ComputeTargetPoolTimeouts | undefined>;

    /**
     * Create a ComputeTargetPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ComputeTargetPoolArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ComputeTargetPoolArgs | ComputeTargetPoolState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ComputeTargetPoolState | undefined;
            resourceInputs["backupPool"] = state ? state.backupPool : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["failoverRatio"] = state ? state.failoverRatio : undefined;
            resourceInputs["healthChecks"] = state ? state.healthChecks : undefined;
            resourceInputs["instances"] = state ? state.instances : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["selfLink"] = state ? state.selfLink : undefined;
            resourceInputs["sessionAffinity"] = state ? state.sessionAffinity : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ComputeTargetPoolArgs | undefined;
            resourceInputs["backupPool"] = args ? args.backupPool : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["failoverRatio"] = args ? args.failoverRatio : undefined;
            resourceInputs["healthChecks"] = args ? args.healthChecks : undefined;
            resourceInputs["instances"] = args ? args.instances : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["sessionAffinity"] = args ? args.sessionAffinity : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["selfLink"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ComputeTargetPool.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ComputeTargetPool resources.
 */
export interface ComputeTargetPoolState {
    /**
     * URL to the backup target pool. Must also set failover_ratio.
     */
    backupPool?: pulumi.Input<string>;
    /**
     * Textual description field.
     */
    description?: pulumi.Input<string>;
    /**
     * Ratio (0 to 1) of failed nodes before using the backup pool (which must also be set).
     */
    failoverRatio?: pulumi.Input<number>;
    /**
     * List of zero or one health check name or self_link. Only legacy google.ComputeHttpHealthCheck is supported.
     */
    healthChecks?: pulumi.Input<pulumi.Input<string>[]>;
    instances?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A unique name for the resource, required by GCE. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
     */
    project?: pulumi.Input<string>;
    /**
     * Where the target pool resides. Defaults to project region.
     */
    region?: pulumi.Input<string>;
    /**
     * The URI of the created resource.
     */
    selfLink?: pulumi.Input<string>;
    /**
     * How to distribute load. Options are "NONE" (no affinity). "CLIENT_IP" (hash of the source/dest addresses / ports), and
     * "CLIENT_IP_PROTO" also includes the protocol (default "NONE").
     */
    sessionAffinity?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ComputeTargetPoolTimeouts>;
}

/**
 * The set of arguments for constructing a ComputeTargetPool resource.
 */
export interface ComputeTargetPoolArgs {
    /**
     * URL to the backup target pool. Must also set failover_ratio.
     */
    backupPool?: pulumi.Input<string>;
    /**
     * Textual description field.
     */
    description?: pulumi.Input<string>;
    /**
     * Ratio (0 to 1) of failed nodes before using the backup pool (which must also be set).
     */
    failoverRatio?: pulumi.Input<number>;
    /**
     * List of zero or one health check name or self_link. Only legacy google.ComputeHttpHealthCheck is supported.
     */
    healthChecks?: pulumi.Input<pulumi.Input<string>[]>;
    instances?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A unique name for the resource, required by GCE. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
     */
    project?: pulumi.Input<string>;
    /**
     * Where the target pool resides. Defaults to project region.
     */
    region?: pulumi.Input<string>;
    /**
     * How to distribute load. Options are "NONE" (no affinity). "CLIENT_IP" (hash of the source/dest addresses / ports), and
     * "CLIENT_IP_PROTO" also includes the protocol (default "NONE").
     */
    sessionAffinity?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ComputeTargetPoolTimeouts>;
}
