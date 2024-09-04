// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class InstanceState extends pulumi.CustomResource {
    /**
     * Get an existing InstanceState resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InstanceStateState, opts?: pulumi.CustomResourceOptions): InstanceState {
        return new InstanceState(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ucloud:index/instanceState:InstanceState';

    /**
     * Returns true if the given object is an instance of InstanceState.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is InstanceState {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InstanceState.__pulumiType;
    }

    public readonly force!: pulumi.Output<boolean | undefined>;
    public readonly instanceId!: pulumi.Output<string>;
    public readonly state!: pulumi.Output<string>;

    /**
     * Create a InstanceState resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InstanceStateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: InstanceStateArgs | InstanceStateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as InstanceStateState | undefined;
            resourceInputs["force"] = state ? state.force : undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
        } else {
            const args = argsOrState as InstanceStateArgs | undefined;
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            if ((!args || args.state === undefined) && !opts.urn) {
                throw new Error("Missing required property 'state'");
            }
            resourceInputs["force"] = args ? args.force : undefined;
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(InstanceState.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering InstanceState resources.
 */
export interface InstanceStateState {
    force?: pulumi.Input<boolean>;
    instanceId?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a InstanceState resource.
 */
export interface InstanceStateArgs {
    force?: pulumi.Input<boolean>;
    instanceId: pulumi.Input<string>;
    state: pulumi.Input<string>;
}
