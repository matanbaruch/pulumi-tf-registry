// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class AlertProfile extends pulumi.CustomResource {
    /**
     * Get an existing AlertProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AlertProfileState, opts?: pulumi.CustomResourceOptions): AlertProfile {
        return new AlertProfile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ciscomcd:index/alertProfile:AlertProfile';

    /**
     * Returns true if the given object is an instance of AlertProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AlertProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AlertProfile.__pulumiType;
    }

    public readonly description!: pulumi.Output<string | undefined>;
    public readonly index!: pulumi.Output<string | undefined>;
    public readonly integrationKey!: pulumi.Output<string | undefined>;
    public readonly integrationUrl!: pulumi.Output<string | undefined>;
    public readonly logAnalyticsLogType!: pulumi.Output<string | undefined>;
    public readonly logAnalyticsWorkspaceId!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly profileId!: pulumi.Output<number>;
    public readonly skipVerify!: pulumi.Output<boolean | undefined>;
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a AlertProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AlertProfileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AlertProfileArgs | AlertProfileState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AlertProfileState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["index"] = state ? state.index : undefined;
            resourceInputs["integrationKey"] = state ? state.integrationKey : undefined;
            resourceInputs["integrationUrl"] = state ? state.integrationUrl : undefined;
            resourceInputs["logAnalyticsLogType"] = state ? state.logAnalyticsLogType : undefined;
            resourceInputs["logAnalyticsWorkspaceId"] = state ? state.logAnalyticsWorkspaceId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["profileId"] = state ? state.profileId : undefined;
            resourceInputs["skipVerify"] = state ? state.skipVerify : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as AlertProfileArgs | undefined;
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["index"] = args ? args.index : undefined;
            resourceInputs["integrationKey"] = args ? args.integrationKey : undefined;
            resourceInputs["integrationUrl"] = args ? args.integrationUrl : undefined;
            resourceInputs["logAnalyticsLogType"] = args ? args.logAnalyticsLogType : undefined;
            resourceInputs["logAnalyticsWorkspaceId"] = args ? args.logAnalyticsWorkspaceId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["skipVerify"] = args ? args.skipVerify : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["profileId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AlertProfile.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AlertProfile resources.
 */
export interface AlertProfileState {
    description?: pulumi.Input<string>;
    index?: pulumi.Input<string>;
    integrationKey?: pulumi.Input<string>;
    integrationUrl?: pulumi.Input<string>;
    logAnalyticsLogType?: pulumi.Input<string>;
    logAnalyticsWorkspaceId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    profileId?: pulumi.Input<number>;
    skipVerify?: pulumi.Input<boolean>;
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AlertProfile resource.
 */
export interface AlertProfileArgs {
    description?: pulumi.Input<string>;
    index?: pulumi.Input<string>;
    integrationKey?: pulumi.Input<string>;
    integrationUrl?: pulumi.Input<string>;
    logAnalyticsLogType?: pulumi.Input<string>;
    logAnalyticsWorkspaceId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    skipVerify?: pulumi.Input<boolean>;
    type: pulumi.Input<string>;
}
