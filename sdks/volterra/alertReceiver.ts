// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AlertReceiver extends pulumi.CustomResource {
    /**
     * Get an existing AlertReceiver resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AlertReceiverState, opts?: pulumi.CustomResourceOptions): AlertReceiver {
        return new AlertReceiver(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'volterra:index/alertReceiver:AlertReceiver';

    /**
     * Returns true if the given object is an instance of AlertReceiver.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AlertReceiver {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AlertReceiver.__pulumiType;
    }

    public readonly annotations!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly disable!: pulumi.Output<boolean | undefined>;
    public readonly emails!: pulumi.Output<outputs.AlertReceiverEmail[] | undefined>;
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly namespace!: pulumi.Output<string>;
    public readonly opsgenies!: pulumi.Output<outputs.AlertReceiverOpsgeny[] | undefined>;
    public readonly pagerduties!: pulumi.Output<outputs.AlertReceiverPagerduty[] | undefined>;
    public readonly slacks!: pulumi.Output<outputs.AlertReceiverSlack[] | undefined>;
    public readonly sms!: pulumi.Output<outputs.AlertReceiverSm[] | undefined>;
    public readonly webhooks!: pulumi.Output<outputs.AlertReceiverWebhook[] | undefined>;

    /**
     * Create a AlertReceiver resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AlertReceiverArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AlertReceiverArgs | AlertReceiverState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AlertReceiverState | undefined;
            resourceInputs["annotations"] = state ? state.annotations : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["disable"] = state ? state.disable : undefined;
            resourceInputs["emails"] = state ? state.emails : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["opsgenies"] = state ? state.opsgenies : undefined;
            resourceInputs["pagerduties"] = state ? state.pagerduties : undefined;
            resourceInputs["slacks"] = state ? state.slacks : undefined;
            resourceInputs["sms"] = state ? state.sms : undefined;
            resourceInputs["webhooks"] = state ? state.webhooks : undefined;
        } else {
            const args = argsOrState as AlertReceiverArgs | undefined;
            if ((!args || args.namespace === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespace'");
            }
            resourceInputs["annotations"] = args ? args.annotations : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["disable"] = args ? args.disable : undefined;
            resourceInputs["emails"] = args ? args.emails : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["opsgenies"] = args ? args.opsgenies : undefined;
            resourceInputs["pagerduties"] = args ? args.pagerduties : undefined;
            resourceInputs["slacks"] = args ? args.slacks : undefined;
            resourceInputs["sms"] = args ? args.sms : undefined;
            resourceInputs["webhooks"] = args ? args.webhooks : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AlertReceiver.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AlertReceiver resources.
 */
export interface AlertReceiverState {
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    disable?: pulumi.Input<boolean>;
    emails?: pulumi.Input<pulumi.Input<inputs.AlertReceiverEmail>[]>;
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    name?: pulumi.Input<string>;
    namespace?: pulumi.Input<string>;
    opsgenies?: pulumi.Input<pulumi.Input<inputs.AlertReceiverOpsgeny>[]>;
    pagerduties?: pulumi.Input<pulumi.Input<inputs.AlertReceiverPagerduty>[]>;
    slacks?: pulumi.Input<pulumi.Input<inputs.AlertReceiverSlack>[]>;
    sms?: pulumi.Input<pulumi.Input<inputs.AlertReceiverSm>[]>;
    webhooks?: pulumi.Input<pulumi.Input<inputs.AlertReceiverWebhook>[]>;
}

/**
 * The set of arguments for constructing a AlertReceiver resource.
 */
export interface AlertReceiverArgs {
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    disable?: pulumi.Input<boolean>;
    emails?: pulumi.Input<pulumi.Input<inputs.AlertReceiverEmail>[]>;
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    name?: pulumi.Input<string>;
    namespace: pulumi.Input<string>;
    opsgenies?: pulumi.Input<pulumi.Input<inputs.AlertReceiverOpsgeny>[]>;
    pagerduties?: pulumi.Input<pulumi.Input<inputs.AlertReceiverPagerduty>[]>;
    slacks?: pulumi.Input<pulumi.Input<inputs.AlertReceiverSlack>[]>;
    sms?: pulumi.Input<pulumi.Input<inputs.AlertReceiverSm>[]>;
    webhooks?: pulumi.Input<pulumi.Input<inputs.AlertReceiverWebhook>[]>;
}
