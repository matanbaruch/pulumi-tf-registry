// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class TeamPermissionSetting extends pulumi.CustomResource {
    /**
     * Get an existing TeamPermissionSetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TeamPermissionSettingState, opts?: pulumi.CustomResourceOptions): TeamPermissionSetting {
        return new TeamPermissionSetting(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'datadog:index/teamPermissionSetting:TeamPermissionSetting';

    /**
     * Returns true if the given object is an instance of TeamPermissionSetting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TeamPermissionSetting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TeamPermissionSetting.__pulumiType;
    }

    /**
     * The identifier for the action. Valid values are `manage_membership`, `edit`.
     */
    public readonly action!: pulumi.Output<string>;
    /**
     * ID of the team the team permission setting is associated with.
     */
    public readonly teamId!: pulumi.Output<string>;
    /**
     * The action value. Valid values are dependent on the action. `manage_membership` action allows `admins`, `members`,
     * `organization`, `user_access_manage` values. `edit` action allows `admins`, `members`, `teams_manage` values.
     */
    public readonly value!: pulumi.Output<string>;

    /**
     * Create a TeamPermissionSetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TeamPermissionSettingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TeamPermissionSettingArgs | TeamPermissionSettingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TeamPermissionSettingState | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["teamId"] = state ? state.teamId : undefined;
            resourceInputs["value"] = state ? state.value : undefined;
        } else {
            const args = argsOrState as TeamPermissionSettingArgs | undefined;
            if ((!args || args.action === undefined) && !opts.urn) {
                throw new Error("Missing required property 'action'");
            }
            if ((!args || args.teamId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'teamId'");
            }
            if ((!args || args.value === undefined) && !opts.urn) {
                throw new Error("Missing required property 'value'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["teamId"] = args ? args.teamId : undefined;
            resourceInputs["value"] = args ? args.value : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TeamPermissionSetting.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TeamPermissionSetting resources.
 */
export interface TeamPermissionSettingState {
    /**
     * The identifier for the action. Valid values are `manage_membership`, `edit`.
     */
    action?: pulumi.Input<string>;
    /**
     * ID of the team the team permission setting is associated with.
     */
    teamId?: pulumi.Input<string>;
    /**
     * The action value. Valid values are dependent on the action. `manage_membership` action allows `admins`, `members`,
     * `organization`, `user_access_manage` values. `edit` action allows `admins`, `members`, `teams_manage` values.
     */
    value?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TeamPermissionSetting resource.
 */
export interface TeamPermissionSettingArgs {
    /**
     * The identifier for the action. Valid values are `manage_membership`, `edit`.
     */
    action: pulumi.Input<string>;
    /**
     * ID of the team the team permission setting is associated with.
     */
    teamId: pulumi.Input<string>;
    /**
     * The action value. Valid values are dependent on the action. `manage_membership` action allows `admins`, `members`,
     * `organization`, `user_access_manage` values. `edit` action allows `admins`, `members`, `teams_manage` values.
     */
    value: pulumi.Input<string>;
}
