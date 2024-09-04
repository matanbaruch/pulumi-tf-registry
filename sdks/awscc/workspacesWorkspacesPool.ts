// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class WorkspacesWorkspacesPool extends pulumi.CustomResource {
    /**
     * Get an existing WorkspacesWorkspacesPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WorkspacesWorkspacesPoolState, opts?: pulumi.CustomResourceOptions): WorkspacesWorkspacesPool {
        return new WorkspacesWorkspacesPool(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/workspacesWorkspacesPool:WorkspacesWorkspacesPool';

    /**
     * Returns true if the given object is an instance of WorkspacesWorkspacesPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WorkspacesWorkspacesPool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WorkspacesWorkspacesPool.__pulumiType;
    }

    public readonly applicationSettings!: pulumi.Output<outputs.WorkspacesWorkspacesPoolApplicationSettings>;
    public readonly bundleId!: pulumi.Output<string>;
    public readonly capacity!: pulumi.Output<outputs.WorkspacesWorkspacesPoolCapacity>;
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string>;
    public readonly directoryId!: pulumi.Output<string>;
    public /*out*/ readonly poolArn!: pulumi.Output<string>;
    public /*out*/ readonly poolId!: pulumi.Output<string>;
    public readonly poolName!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<outputs.WorkspacesWorkspacesPoolTag[]>;
    public readonly timeoutSettings!: pulumi.Output<outputs.WorkspacesWorkspacesPoolTimeoutSettings>;

    /**
     * Create a WorkspacesWorkspacesPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkspacesWorkspacesPoolArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WorkspacesWorkspacesPoolArgs | WorkspacesWorkspacesPoolState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WorkspacesWorkspacesPoolState | undefined;
            resourceInputs["applicationSettings"] = state ? state.applicationSettings : undefined;
            resourceInputs["bundleId"] = state ? state.bundleId : undefined;
            resourceInputs["capacity"] = state ? state.capacity : undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["directoryId"] = state ? state.directoryId : undefined;
            resourceInputs["poolArn"] = state ? state.poolArn : undefined;
            resourceInputs["poolId"] = state ? state.poolId : undefined;
            resourceInputs["poolName"] = state ? state.poolName : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeoutSettings"] = state ? state.timeoutSettings : undefined;
        } else {
            const args = argsOrState as WorkspacesWorkspacesPoolArgs | undefined;
            if ((!args || args.bundleId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bundleId'");
            }
            if ((!args || args.capacity === undefined) && !opts.urn) {
                throw new Error("Missing required property 'capacity'");
            }
            if ((!args || args.directoryId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'directoryId'");
            }
            if ((!args || args.poolName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'poolName'");
            }
            resourceInputs["applicationSettings"] = args ? args.applicationSettings : undefined;
            resourceInputs["bundleId"] = args ? args.bundleId : undefined;
            resourceInputs["capacity"] = args ? args.capacity : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["directoryId"] = args ? args.directoryId : undefined;
            resourceInputs["poolName"] = args ? args.poolName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeoutSettings"] = args ? args.timeoutSettings : undefined;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["poolArn"] = undefined /*out*/;
            resourceInputs["poolId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WorkspacesWorkspacesPool.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WorkspacesWorkspacesPool resources.
 */
export interface WorkspacesWorkspacesPoolState {
    applicationSettings?: pulumi.Input<inputs.WorkspacesWorkspacesPoolApplicationSettings>;
    bundleId?: pulumi.Input<string>;
    capacity?: pulumi.Input<inputs.WorkspacesWorkspacesPoolCapacity>;
    createdAt?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    directoryId?: pulumi.Input<string>;
    poolArn?: pulumi.Input<string>;
    poolId?: pulumi.Input<string>;
    poolName?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.WorkspacesWorkspacesPoolTag>[]>;
    timeoutSettings?: pulumi.Input<inputs.WorkspacesWorkspacesPoolTimeoutSettings>;
}

/**
 * The set of arguments for constructing a WorkspacesWorkspacesPool resource.
 */
export interface WorkspacesWorkspacesPoolArgs {
    applicationSettings?: pulumi.Input<inputs.WorkspacesWorkspacesPoolApplicationSettings>;
    bundleId: pulumi.Input<string>;
    capacity: pulumi.Input<inputs.WorkspacesWorkspacesPoolCapacity>;
    description?: pulumi.Input<string>;
    directoryId: pulumi.Input<string>;
    poolName: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.WorkspacesWorkspacesPoolTag>[]>;
    timeoutSettings?: pulumi.Input<inputs.WorkspacesWorkspacesPoolTimeoutSettings>;
}
