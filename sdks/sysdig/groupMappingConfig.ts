// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class GroupMappingConfig extends pulumi.CustomResource {
    /**
     * Get an existing GroupMappingConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GroupMappingConfigState, opts?: pulumi.CustomResourceOptions): GroupMappingConfig {
        return new GroupMappingConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sysdig:index/groupMappingConfig:GroupMappingConfig';

    /**
     * Returns true if the given object is an instance of GroupMappingConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GroupMappingConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GroupMappingConfig.__pulumiType;
    }

    public readonly differentTeamSameRoleStrategy!: pulumi.Output<string>;
    public readonly noMappingStrategy!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.GroupMappingConfigTimeouts | undefined>;

    /**
     * Create a GroupMappingConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GroupMappingConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GroupMappingConfigArgs | GroupMappingConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GroupMappingConfigState | undefined;
            resourceInputs["differentTeamSameRoleStrategy"] = state ? state.differentTeamSameRoleStrategy : undefined;
            resourceInputs["noMappingStrategy"] = state ? state.noMappingStrategy : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as GroupMappingConfigArgs | undefined;
            if ((!args || args.differentTeamSameRoleStrategy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'differentTeamSameRoleStrategy'");
            }
            if ((!args || args.noMappingStrategy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'noMappingStrategy'");
            }
            resourceInputs["differentTeamSameRoleStrategy"] = args ? args.differentTeamSameRoleStrategy : undefined;
            resourceInputs["noMappingStrategy"] = args ? args.noMappingStrategy : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GroupMappingConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GroupMappingConfig resources.
 */
export interface GroupMappingConfigState {
    differentTeamSameRoleStrategy?: pulumi.Input<string>;
    noMappingStrategy?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GroupMappingConfigTimeouts>;
}

/**
 * The set of arguments for constructing a GroupMappingConfig resource.
 */
export interface GroupMappingConfigArgs {
    differentTeamSameRoleStrategy: pulumi.Input<string>;
    noMappingStrategy: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GroupMappingConfigTimeouts>;
}
