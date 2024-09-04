// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class OrganizationDefaultSettings extends pulumi.CustomResource {
    /**
     * Get an existing OrganizationDefaultSettings resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OrganizationDefaultSettingsState, opts?: pulumi.CustomResourceOptions): OrganizationDefaultSettings {
        return new OrganizationDefaultSettings(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tfe:index/organizationDefaultSettings:OrganizationDefaultSettings';

    /**
     * Returns true if the given object is an instance of OrganizationDefaultSettings.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OrganizationDefaultSettings {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OrganizationDefaultSettings.__pulumiType;
    }

    public readonly defaultAgentPoolId!: pulumi.Output<string | undefined>;
    public readonly defaultExecutionMode!: pulumi.Output<string>;
    public readonly organization!: pulumi.Output<string>;

    /**
     * Create a OrganizationDefaultSettings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OrganizationDefaultSettingsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OrganizationDefaultSettingsArgs | OrganizationDefaultSettingsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OrganizationDefaultSettingsState | undefined;
            resourceInputs["defaultAgentPoolId"] = state ? state.defaultAgentPoolId : undefined;
            resourceInputs["defaultExecutionMode"] = state ? state.defaultExecutionMode : undefined;
            resourceInputs["organization"] = state ? state.organization : undefined;
        } else {
            const args = argsOrState as OrganizationDefaultSettingsArgs | undefined;
            if ((!args || args.defaultExecutionMode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'defaultExecutionMode'");
            }
            resourceInputs["defaultAgentPoolId"] = args ? args.defaultAgentPoolId : undefined;
            resourceInputs["defaultExecutionMode"] = args ? args.defaultExecutionMode : undefined;
            resourceInputs["organization"] = args ? args.organization : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OrganizationDefaultSettings.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OrganizationDefaultSettings resources.
 */
export interface OrganizationDefaultSettingsState {
    defaultAgentPoolId?: pulumi.Input<string>;
    defaultExecutionMode?: pulumi.Input<string>;
    organization?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a OrganizationDefaultSettings resource.
 */
export interface OrganizationDefaultSettingsArgs {
    defaultAgentPoolId?: pulumi.Input<string>;
    defaultExecutionMode: pulumi.Input<string>;
    organization?: pulumi.Input<string>;
}
