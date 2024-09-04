// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class EssScalinggroupVserverGroups extends pulumi.CustomResource {
    /**
     * Get an existing EssScalinggroupVserverGroups resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EssScalinggroupVserverGroupsState, opts?: pulumi.CustomResourceOptions): EssScalinggroupVserverGroups {
        return new EssScalinggroupVserverGroups(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/essScalinggroupVserverGroups:EssScalinggroupVserverGroups';

    /**
     * Returns true if the given object is an instance of EssScalinggroupVserverGroups.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EssScalinggroupVserverGroups {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EssScalinggroupVserverGroups.__pulumiType;
    }

    public readonly force!: pulumi.Output<boolean | undefined>;
    public readonly scalingGroupId!: pulumi.Output<string>;
    public readonly vserverGroups!: pulumi.Output<outputs.EssScalinggroupVserverGroupsVserverGroup[]>;

    /**
     * Create a EssScalinggroupVserverGroups resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EssScalinggroupVserverGroupsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EssScalinggroupVserverGroupsArgs | EssScalinggroupVserverGroupsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EssScalinggroupVserverGroupsState | undefined;
            resourceInputs["force"] = state ? state.force : undefined;
            resourceInputs["scalingGroupId"] = state ? state.scalingGroupId : undefined;
            resourceInputs["vserverGroups"] = state ? state.vserverGroups : undefined;
        } else {
            const args = argsOrState as EssScalinggroupVserverGroupsArgs | undefined;
            if ((!args || args.scalingGroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scalingGroupId'");
            }
            if ((!args || args.vserverGroups === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vserverGroups'");
            }
            resourceInputs["force"] = args ? args.force : undefined;
            resourceInputs["scalingGroupId"] = args ? args.scalingGroupId : undefined;
            resourceInputs["vserverGroups"] = args ? args.vserverGroups : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EssScalinggroupVserverGroups.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EssScalinggroupVserverGroups resources.
 */
export interface EssScalinggroupVserverGroupsState {
    force?: pulumi.Input<boolean>;
    scalingGroupId?: pulumi.Input<string>;
    vserverGroups?: pulumi.Input<pulumi.Input<inputs.EssScalinggroupVserverGroupsVserverGroup>[]>;
}

/**
 * The set of arguments for constructing a EssScalinggroupVserverGroups resource.
 */
export interface EssScalinggroupVserverGroupsArgs {
    force?: pulumi.Input<boolean>;
    scalingGroupId: pulumi.Input<string>;
    vserverGroups: pulumi.Input<pulumi.Input<inputs.EssScalinggroupVserverGroupsVserverGroup>[]>;
}
