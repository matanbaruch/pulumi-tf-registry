// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ConsumptionBudgetSubscription extends pulumi.CustomResource {
    /**
     * Get an existing ConsumptionBudgetSubscription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ConsumptionBudgetSubscriptionState, opts?: pulumi.CustomResourceOptions): ConsumptionBudgetSubscription {
        return new ConsumptionBudgetSubscription(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/consumptionBudgetSubscription:ConsumptionBudgetSubscription';

    /**
     * Returns true if the given object is an instance of ConsumptionBudgetSubscription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ConsumptionBudgetSubscription {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ConsumptionBudgetSubscription.__pulumiType;
    }

    public readonly amount!: pulumi.Output<number>;
    public readonly etag!: pulumi.Output<string>;
    public readonly filter!: pulumi.Output<outputs.ConsumptionBudgetSubscriptionFilter | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly notifications!: pulumi.Output<outputs.ConsumptionBudgetSubscriptionNotification[]>;
    public readonly subscriptionId!: pulumi.Output<string>;
    public readonly timeGrain!: pulumi.Output<string | undefined>;
    public readonly timePeriod!: pulumi.Output<outputs.ConsumptionBudgetSubscriptionTimePeriod>;
    public readonly timeouts!: pulumi.Output<outputs.ConsumptionBudgetSubscriptionTimeouts | undefined>;

    /**
     * Create a ConsumptionBudgetSubscription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConsumptionBudgetSubscriptionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ConsumptionBudgetSubscriptionArgs | ConsumptionBudgetSubscriptionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ConsumptionBudgetSubscriptionState | undefined;
            resourceInputs["amount"] = state ? state.amount : undefined;
            resourceInputs["etag"] = state ? state.etag : undefined;
            resourceInputs["filter"] = state ? state.filter : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notifications"] = state ? state.notifications : undefined;
            resourceInputs["subscriptionId"] = state ? state.subscriptionId : undefined;
            resourceInputs["timeGrain"] = state ? state.timeGrain : undefined;
            resourceInputs["timePeriod"] = state ? state.timePeriod : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ConsumptionBudgetSubscriptionArgs | undefined;
            if ((!args || args.amount === undefined) && !opts.urn) {
                throw new Error("Missing required property 'amount'");
            }
            if ((!args || args.notifications === undefined) && !opts.urn) {
                throw new Error("Missing required property 'notifications'");
            }
            if ((!args || args.subscriptionId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subscriptionId'");
            }
            if ((!args || args.timePeriod === undefined) && !opts.urn) {
                throw new Error("Missing required property 'timePeriod'");
            }
            resourceInputs["amount"] = args ? args.amount : undefined;
            resourceInputs["etag"] = args ? args.etag : undefined;
            resourceInputs["filter"] = args ? args.filter : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["notifications"] = args ? args.notifications : undefined;
            resourceInputs["subscriptionId"] = args ? args.subscriptionId : undefined;
            resourceInputs["timeGrain"] = args ? args.timeGrain : undefined;
            resourceInputs["timePeriod"] = args ? args.timePeriod : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ConsumptionBudgetSubscription.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ConsumptionBudgetSubscription resources.
 */
export interface ConsumptionBudgetSubscriptionState {
    amount?: pulumi.Input<number>;
    etag?: pulumi.Input<string>;
    filter?: pulumi.Input<inputs.ConsumptionBudgetSubscriptionFilter>;
    name?: pulumi.Input<string>;
    notifications?: pulumi.Input<pulumi.Input<inputs.ConsumptionBudgetSubscriptionNotification>[]>;
    subscriptionId?: pulumi.Input<string>;
    timeGrain?: pulumi.Input<string>;
    timePeriod?: pulumi.Input<inputs.ConsumptionBudgetSubscriptionTimePeriod>;
    timeouts?: pulumi.Input<inputs.ConsumptionBudgetSubscriptionTimeouts>;
}

/**
 * The set of arguments for constructing a ConsumptionBudgetSubscription resource.
 */
export interface ConsumptionBudgetSubscriptionArgs {
    amount: pulumi.Input<number>;
    etag?: pulumi.Input<string>;
    filter?: pulumi.Input<inputs.ConsumptionBudgetSubscriptionFilter>;
    name?: pulumi.Input<string>;
    notifications: pulumi.Input<pulumi.Input<inputs.ConsumptionBudgetSubscriptionNotification>[]>;
    subscriptionId: pulumi.Input<string>;
    timeGrain?: pulumi.Input<string>;
    timePeriod: pulumi.Input<inputs.ConsumptionBudgetSubscriptionTimePeriod>;
    timeouts?: pulumi.Input<inputs.ConsumptionBudgetSubscriptionTimeouts>;
}
