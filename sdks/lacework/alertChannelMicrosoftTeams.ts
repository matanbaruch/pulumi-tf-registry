// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class AlertChannelMicrosoftTeams extends pulumi.CustomResource {
    /**
     * Get an existing AlertChannelMicrosoftTeams resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AlertChannelMicrosoftTeamsState, opts?: pulumi.CustomResourceOptions): AlertChannelMicrosoftTeams {
        return new AlertChannelMicrosoftTeams(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'lacework:index/alertChannelMicrosoftTeams:AlertChannelMicrosoftTeams';

    /**
     * Returns true if the given object is an instance of AlertChannelMicrosoftTeams.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AlertChannelMicrosoftTeams {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AlertChannelMicrosoftTeams.__pulumiType;
    }

    public /*out*/ readonly createdOrUpdatedBy!: pulumi.Output<string>;
    public /*out*/ readonly createdOrUpdatedTime!: pulumi.Output<string>;
    /**
     * The state of the external integration
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * The unique identifier of the integration
     */
    public /*out*/ readonly intgGuid!: pulumi.Output<string>;
    /**
     * The name of the alert channel
     */
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly orgLevel!: pulumi.Output<boolean>;
    /**
     * Whether to test the integration of an alert channel upon creation and modification
     */
    public readonly testIntegration!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly typeName!: pulumi.Output<string>;
    /**
     * The webhook url for the integration
     */
    public readonly webhookUrl!: pulumi.Output<string>;

    /**
     * Create a AlertChannelMicrosoftTeams resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AlertChannelMicrosoftTeamsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AlertChannelMicrosoftTeamsArgs | AlertChannelMicrosoftTeamsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AlertChannelMicrosoftTeamsState | undefined;
            resourceInputs["createdOrUpdatedBy"] = state ? state.createdOrUpdatedBy : undefined;
            resourceInputs["createdOrUpdatedTime"] = state ? state.createdOrUpdatedTime : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["intgGuid"] = state ? state.intgGuid : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["orgLevel"] = state ? state.orgLevel : undefined;
            resourceInputs["testIntegration"] = state ? state.testIntegration : undefined;
            resourceInputs["typeName"] = state ? state.typeName : undefined;
            resourceInputs["webhookUrl"] = state ? state.webhookUrl : undefined;
        } else {
            const args = argsOrState as AlertChannelMicrosoftTeamsArgs | undefined;
            if ((!args || args.webhookUrl === undefined) && !opts.urn) {
                throw new Error("Missing required property 'webhookUrl'");
            }
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["testIntegration"] = args ? args.testIntegration : undefined;
            resourceInputs["webhookUrl"] = args ? args.webhookUrl : undefined;
            resourceInputs["createdOrUpdatedBy"] = undefined /*out*/;
            resourceInputs["createdOrUpdatedTime"] = undefined /*out*/;
            resourceInputs["intgGuid"] = undefined /*out*/;
            resourceInputs["orgLevel"] = undefined /*out*/;
            resourceInputs["typeName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AlertChannelMicrosoftTeams.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AlertChannelMicrosoftTeams resources.
 */
export interface AlertChannelMicrosoftTeamsState {
    createdOrUpdatedBy?: pulumi.Input<string>;
    createdOrUpdatedTime?: pulumi.Input<string>;
    /**
     * The state of the external integration
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The unique identifier of the integration
     */
    intgGuid?: pulumi.Input<string>;
    /**
     * The name of the alert channel
     */
    name?: pulumi.Input<string>;
    orgLevel?: pulumi.Input<boolean>;
    /**
     * Whether to test the integration of an alert channel upon creation and modification
     */
    testIntegration?: pulumi.Input<boolean>;
    typeName?: pulumi.Input<string>;
    /**
     * The webhook url for the integration
     */
    webhookUrl?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AlertChannelMicrosoftTeams resource.
 */
export interface AlertChannelMicrosoftTeamsArgs {
    /**
     * The state of the external integration
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The name of the alert channel
     */
    name?: pulumi.Input<string>;
    /**
     * Whether to test the integration of an alert channel upon creation and modification
     */
    testIntegration?: pulumi.Input<boolean>;
    /**
     * The webhook url for the integration
     */
    webhookUrl: pulumi.Input<string>;
}
