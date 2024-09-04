// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ManagementHaFullSync extends pulumi.CustomResource {
    /**
     * Get an existing ManagementHaFullSync resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ManagementHaFullSyncState, opts?: pulumi.CustomResourceOptions): ManagementHaFullSync {
        return new ManagementHaFullSync(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'checkpoint:index/managementHaFullSync:ManagementHaFullSync';

    /**
     * Returns true if the given object is an instance of ManagementHaFullSync.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagementHaFullSync {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagementHaFullSync.__pulumiType;
    }

    /**
     * Peer name (Multi Domain Server, Domain Server or Security Management Server).
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Command asynchronous task unique identifier.
     */
    public /*out*/ readonly taskId!: pulumi.Output<string>;
    /**
     * Peer unique identifier (Multi Domain Server, Domain Server or Security Management Server).
     */
    public readonly uid!: pulumi.Output<string | undefined>;

    /**
     * Create a ManagementHaFullSync resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ManagementHaFullSyncArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ManagementHaFullSyncArgs | ManagementHaFullSyncState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ManagementHaFullSyncState | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["taskId"] = state ? state.taskId : undefined;
            resourceInputs["uid"] = state ? state.uid : undefined;
        } else {
            const args = argsOrState as ManagementHaFullSyncArgs | undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["uid"] = args ? args.uid : undefined;
            resourceInputs["taskId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ManagementHaFullSync.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ManagementHaFullSync resources.
 */
export interface ManagementHaFullSyncState {
    /**
     * Peer name (Multi Domain Server, Domain Server or Security Management Server).
     */
    name?: pulumi.Input<string>;
    /**
     * Command asynchronous task unique identifier.
     */
    taskId?: pulumi.Input<string>;
    /**
     * Peer unique identifier (Multi Domain Server, Domain Server or Security Management Server).
     */
    uid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ManagementHaFullSync resource.
 */
export interface ManagementHaFullSyncArgs {
    /**
     * Peer name (Multi Domain Server, Domain Server or Security Management Server).
     */
    name?: pulumi.Input<string>;
    /**
     * Peer unique identifier (Multi Domain Server, Domain Server or Security Management Server).
     */
    uid?: pulumi.Input<string>;
}
