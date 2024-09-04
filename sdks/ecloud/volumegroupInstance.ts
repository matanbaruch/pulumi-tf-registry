// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VolumegroupInstance extends pulumi.CustomResource {
    /**
     * Get an existing VolumegroupInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VolumegroupInstanceState, opts?: pulumi.CustomResourceOptions): VolumegroupInstance {
        return new VolumegroupInstance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ecloud:index/volumegroupInstance:VolumegroupInstance';

    /**
     * Returns true if the given object is an instance of VolumegroupInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VolumegroupInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VolumegroupInstance.__pulumiType;
    }

    public readonly instanceId!: pulumi.Output<string>;
    public readonly volumeGroupId!: pulumi.Output<string>;

    /**
     * Create a VolumegroupInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VolumegroupInstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VolumegroupInstanceArgs | VolumegroupInstanceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VolumegroupInstanceState | undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["volumeGroupId"] = state ? state.volumeGroupId : undefined;
        } else {
            const args = argsOrState as VolumegroupInstanceArgs | undefined;
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            if ((!args || args.volumeGroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'volumeGroupId'");
            }
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["volumeGroupId"] = args ? args.volumeGroupId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VolumegroupInstance.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VolumegroupInstance resources.
 */
export interface VolumegroupInstanceState {
    instanceId?: pulumi.Input<string>;
    volumeGroupId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VolumegroupInstance resource.
 */
export interface VolumegroupInstanceArgs {
    instanceId: pulumi.Input<string>;
    volumeGroupId: pulumi.Input<string>;
}
