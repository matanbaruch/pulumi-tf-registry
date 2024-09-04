// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class EventhubNamespaceAuthorizationRule extends pulumi.CustomResource {
    /**
     * Get an existing EventhubNamespaceAuthorizationRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EventhubNamespaceAuthorizationRuleState, opts?: pulumi.CustomResourceOptions): EventhubNamespaceAuthorizationRule {
        return new EventhubNamespaceAuthorizationRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/eventhubNamespaceAuthorizationRule:EventhubNamespaceAuthorizationRule';

    /**
     * Returns true if the given object is an instance of EventhubNamespaceAuthorizationRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EventhubNamespaceAuthorizationRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EventhubNamespaceAuthorizationRule.__pulumiType;
    }

    public readonly listen!: pulumi.Output<boolean | undefined>;
    public readonly manage!: pulumi.Output<boolean | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly namespaceName!: pulumi.Output<string>;
    public /*out*/ readonly primaryConnectionString!: pulumi.Output<string>;
    public /*out*/ readonly primaryConnectionStringAlias!: pulumi.Output<string>;
    public /*out*/ readonly primaryKey!: pulumi.Output<string>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public /*out*/ readonly secondaryConnectionString!: pulumi.Output<string>;
    public /*out*/ readonly secondaryConnectionStringAlias!: pulumi.Output<string>;
    public /*out*/ readonly secondaryKey!: pulumi.Output<string>;
    public readonly send!: pulumi.Output<boolean | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.EventhubNamespaceAuthorizationRuleTimeouts | undefined>;

    /**
     * Create a EventhubNamespaceAuthorizationRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EventhubNamespaceAuthorizationRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EventhubNamespaceAuthorizationRuleArgs | EventhubNamespaceAuthorizationRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EventhubNamespaceAuthorizationRuleState | undefined;
            resourceInputs["listen"] = state ? state.listen : undefined;
            resourceInputs["manage"] = state ? state.manage : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["namespaceName"] = state ? state.namespaceName : undefined;
            resourceInputs["primaryConnectionString"] = state ? state.primaryConnectionString : undefined;
            resourceInputs["primaryConnectionStringAlias"] = state ? state.primaryConnectionStringAlias : undefined;
            resourceInputs["primaryKey"] = state ? state.primaryKey : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["secondaryConnectionString"] = state ? state.secondaryConnectionString : undefined;
            resourceInputs["secondaryConnectionStringAlias"] = state ? state.secondaryConnectionStringAlias : undefined;
            resourceInputs["secondaryKey"] = state ? state.secondaryKey : undefined;
            resourceInputs["send"] = state ? state.send : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as EventhubNamespaceAuthorizationRuleArgs | undefined;
            if ((!args || args.namespaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["listen"] = args ? args.listen : undefined;
            resourceInputs["manage"] = args ? args.manage : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["namespaceName"] = args ? args.namespaceName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["send"] = args ? args.send : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["primaryConnectionString"] = undefined /*out*/;
            resourceInputs["primaryConnectionStringAlias"] = undefined /*out*/;
            resourceInputs["primaryKey"] = undefined /*out*/;
            resourceInputs["secondaryConnectionString"] = undefined /*out*/;
            resourceInputs["secondaryConnectionStringAlias"] = undefined /*out*/;
            resourceInputs["secondaryKey"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["primaryConnectionString", "primaryConnectionStringAlias", "primaryKey", "secondaryConnectionString", "secondaryConnectionStringAlias", "secondaryKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(EventhubNamespaceAuthorizationRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EventhubNamespaceAuthorizationRule resources.
 */
export interface EventhubNamespaceAuthorizationRuleState {
    listen?: pulumi.Input<boolean>;
    manage?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    namespaceName?: pulumi.Input<string>;
    primaryConnectionString?: pulumi.Input<string>;
    primaryConnectionStringAlias?: pulumi.Input<string>;
    primaryKey?: pulumi.Input<string>;
    resourceGroupName?: pulumi.Input<string>;
    secondaryConnectionString?: pulumi.Input<string>;
    secondaryConnectionStringAlias?: pulumi.Input<string>;
    secondaryKey?: pulumi.Input<string>;
    send?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.EventhubNamespaceAuthorizationRuleTimeouts>;
}

/**
 * The set of arguments for constructing a EventhubNamespaceAuthorizationRule resource.
 */
export interface EventhubNamespaceAuthorizationRuleArgs {
    listen?: pulumi.Input<boolean>;
    manage?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    namespaceName: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    send?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.EventhubNamespaceAuthorizationRuleTimeouts>;
}
